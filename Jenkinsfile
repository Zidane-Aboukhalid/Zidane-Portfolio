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
        sh 'rm -f /etc/nginx/conf.d/default.conf || true'
        sh 'docker compose down || true'
        sh 'docker compose up -d --build'
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
      sh 'docker compose logs || true'
    }

    success {
      echo 'Application déployée avec succès et reste active sur le serveur.'
    }

  }
}
