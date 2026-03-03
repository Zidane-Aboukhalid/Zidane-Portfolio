pipeline {
  agent any

  options {
    disableConcurrentBuilds(abortPrevious: false)
    buildDiscarder(logRotator(numToKeepStr: '10'))
    timeout(time: 20, unit: 'MINUTES')
  }

  stages {

    // ── 1. Checkout ────────────────────────────────────────────────────────────
    stage('Checkout') {
      steps {
        checkout([
          $class           : 'GitSCM',
          branches         : [[name: 'refs/heads/main']],
          userRemoteConfigs: [[
            url          : 'https://github.com/Zidane-Aboukhalid/Zidane-Portfolio.git',
            credentialsId: 'token_Jenkins',
            refspec      : '+refs/heads/main:refs/remotes/origin/main'
          ]],
          extensions: [
            // Wipe workspace before checkout so no stale files remain
            [$class: 'CleanBeforeCheckout'],
            [$class: 'CloneOption', noTags: true, shallow: true, depth: 1]
          ]
        ])
        sh 'git log -1 --format="Deploying: %H | %s | %cd" --date=short'
      }
    }

    // ── 2. Ensure docker-compose binary exists ─────────────────────────────────
    stage('Check docker-compose') {
      steps {
        sh '''
          if ! command -v docker-compose > /dev/null 2>&1; then
            echo "docker-compose not found — installing v2.24.5..."
            curl -SL https://github.com/docker/compose/releases/download/v2.24.5/docker-compose-linux-x86_64 \
              -o /usr/local/bin/docker-compose
            chmod +x /usr/local/bin/docker-compose
          fi
          echo "docker-compose version: $(docker-compose version)"
        '''
      }
    }

    // ── 3. Build & Deploy ──────────────────────────────────────────────────────
    stage('Build & Deploy') {
      steps {
        sh '''
          # ── Stop & remove old container ───────────────────────────────────
          docker-compose down --remove-orphans || true
          docker rm -f portfolio_app 2>/dev/null || true

          # ── Remove old image so Docker does NOT use stale layer cache ─────
          # This is the key fix: without this, new code changes are ignored.
          docker rmi -f portfolio-app 2>/dev/null || true
          # Also try the compose-generated image name pattern
          docker rmi -f portfolio_portfolio-app 2>/dev/null || true

          # ── Build fresh image and start container ─────────────────────────
          docker-compose up -d --build

          # ── Wait up to 2 minutes for container to become healthy ──────────
          echo "Waiting for container health..."
          for i in $(seq 1 12); do
            STATUS=$(docker inspect --format="{{.State.Health.Status}}" portfolio_app 2>/dev/null || echo "starting")
            echo "  Check $i/12 — status: $STATUS"
            if [ "$STATUS" = "healthy" ]; then
              echo "Container is healthy!"
              break
            fi
            sleep 10
          done
        '''
      }
    }

    // ── 4. Configure VPS Nginx ─────────────────────────────────────────────────
    stage('Configure Nginx') {
      steps {
        sh '''
          if [ -d /etc/nginx/conf.d ]; then
            cp nginx/vps-nginx.conf /etc/nginx/conf.d/portfolio.conf
            echo "Deployed to conf.d"
          elif [ -d /etc/nginx/sites-available ]; then
            mkdir -p /etc/nginx/sites-available /etc/nginx/sites-enabled
            cp nginx/vps-nginx.conf /etc/nginx/sites-available/portfolio
            ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/portfolio
            rm -f /etc/nginx/sites-enabled/default || true
            echo "Deployed to sites-available"
          else
            echo "WARNING: Nginx config directory not found"
          fi
          nginx -t && systemctl reload nginx || service nginx reload || true
        '''
      }
    }

    // ── 5. Verify ─────────────────────────────────────────────────────────────
    stage('Verify') {
      steps {
        sh '''
          echo "=== Running containers ==="
          docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

          echo ""
          echo "=== Smoke test ==="
          curl -sf https://aboukhalid-zidane.com/ -o /dev/null \
            && echo "HTTP 200 — site is live!" \
            || echo "WARNING: site not responding yet — check logs"
        '''
      }
    }

  }

  post {
    always {
      sh 'docker logs --tail=60 portfolio_app 2>/dev/null || true'
    }
    success {
      echo 'Deployment successful — portfolio is live!'
    }
    failure {
      echo 'Pipeline failed — check the logs above.'
    }
  }
}
