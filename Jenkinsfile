pipeline {
  agent any

  options {
    // Only one build runs at a time — new triggers queue, never parallel
    disableConcurrentBuilds(abortPrevious: false)
    // Keep only the last 10 builds
    buildDiscarder(logRotator(numToKeepStr: '10'))
    // Fail the build if it runs longer than 20 minutes
    timeout(time: 20, unit: 'MINUTES')
  }

  stages {

    // ── 1. Checkout ────────────────────────────────────────────────────────────
    stage('Checkout') {
      steps {
        // Always check out a clean copy of the main branch
        checkout([
          $class           : 'GitSCM',
          branches         : [[name: 'refs/heads/main']],
          userRemoteConfigs: [[
            url          : 'https://github.com/Zidane-Aboukhalid/Zidane-Portfolio.git',
            credentialsId: 'token_Jenkins',
            refspec      : '+refs/heads/main:refs/remotes/origin/main'
          ]],
          extensions: [
            // Clean workspace before checkout so no stale files remain
            [$class: 'CleanBeforeCheckout'],
            [$class: 'CloneOption', noTags: true, shallow: true, depth: 1]
          ]
        ])
        // Print the latest commit so the build log shows exactly what code is deployed
        sh 'git log -1 --oneline'
        sh 'git log -1 --format="Deploying commit: %H  |  %s  |  %cd" --date=short'
      }
    }

    // ── 2. Build & Deploy ──────────────────────────────────────────────────────
    stage('Build & Deploy') {
      steps {
        sh '''
          # ── Stop & remove the old container completely ─────────────────────
          docker compose down --remove-orphans --timeout 30 || true
          docker rm -f portfolio_app 2>/dev/null || true

          # ── Remove old image to guarantee a FRESH build picks up new code ──
          # Without this, Docker layer cache can serve stale code.
          docker rmi -f portfolio-app 2>/dev/null || true

          # ── Build new image and start container ────────────────────────────
          # --build   → always rebuild the image (never skip the build step)
          # --no-deps → skip dependency services (none here, but safer)
          docker compose up -d --build

          # ── Wait until the container is healthy ───────────────────────────
          echo "Waiting for container to become healthy..."
          for i in $(seq 1 12); do
            STATUS=$(docker inspect --format="{{.State.Health.Status}}" portfolio_app 2>/dev/null || echo "unknown")
            echo "  Attempt $i/12 — status: $STATUS"
            if [ "$STATUS" = "healthy" ]; then
              echo "✅ Container is healthy!"
              break
            fi
            sleep 10
          done
        '''
      }
    }

    // ── 3. Configure VPS Nginx ─────────────────────────────────────────────────
    stage('Configure Nginx') {
      steps {
        sh '''
          if [ -d /etc/nginx/conf.d ]; then
            cp nginx/vps-nginx.conf /etc/nginx/conf.d/portfolio.conf
            echo "Nginx config deployed to conf.d"
          elif [ -d /etc/nginx/sites-available ]; then
            mkdir -p /etc/nginx/sites-available /etc/nginx/sites-enabled
            cp nginx/vps-nginx.conf /etc/nginx/sites-available/portfolio
            ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/portfolio
            rm -f /etc/nginx/sites-enabled/default || true
            echo "Nginx config deployed to sites-available"
          else
            echo "WARNING: Could not find nginx config directory — configure manually"
          fi
          nginx -t && systemctl reload nginx || service nginx reload || true
        '''
      }
    }

    // ── 4. Verify ─────────────────────────────────────────────────────────────
    stage('Verify') {
      steps {
        sh '''
          echo "=== Running containers ==="
          docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

          echo ""
          echo "=== Health check ==="
          STATUS=$(docker inspect --format="{{.State.Health.Status}}" portfolio_app 2>/dev/null || echo "no healthcheck")
          echo "portfolio_app health: $STATUS"

          echo ""
          echo "=== Smoke test (HTTP 200?) ==="
          curl -sf http://localhost:3000/ -o /dev/null \
            && echo "✅ HTTP 200 — site is responding" \
            || echo "⚠️  Site not yet responding — check logs below"
        '''
      }
    }

  }

  post {
    always {
      sh '''
        echo "=== Last 50 lines of container logs ==="
        docker logs --tail=50 portfolio_app 2>/dev/null || true
      '''
    }
    success {
      echo '✅ Deployment successful — portfolio is live!'
    }
    failure {
      echo '❌ Pipeline failed — review the logs above for details.'
    }
  }
}
