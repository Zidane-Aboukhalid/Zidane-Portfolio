pipeline {
  agent any
  stages {
    stage('Checkout code') {
      steps {
        git(url: 'https://github.com/Zidane-Aboukhalid/Zidane-Portfolio.git', branch: 'main', changelog: true, poll: true, credentialsId: 'token_Jenkins')
        sh 'git log -1 --oneline'
      }
    }

    stage('Deploy') {
      steps {
        sh '''
          # ── Install docker-compose v2 if not present ──────────────────────
          if ! command -v docker-compose > /dev/null 2>&1; then
            echo "docker-compose not found — installing v2 binary..."
            curl -SL https://github.com/docker/compose/releases/download/v2.24.5/docker-compose-linux-x86_64 \
              -o /usr/local/bin/docker-compose
            chmod +x /usr/local/bin/docker-compose
            echo "Installed: $(docker-compose version)"
          fi

          # ── Deploy Next.js container ──────────────────────────────────────
          docker-compose down || true
          docker-compose up -d --build

          # ── Configure VPS host Nginx to proxy → container:3000 ────────────
          # Support both Ubuntu (sites-available) and CentOS/Alpine (conf.d)
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

    stage('Check Running Containers') {
      steps {
        sh 'docker ps'
      }
    }

  }
  post {
    always {
      sh 'docker-compose logs || true'
    }

    success {
      echo 'Application déployée avec succès et reste active sur le serveur.'
    }

  }
}
