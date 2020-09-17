pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t docker.pkg.github.com/sharknoon/personal-site/personal-site .'
      }
    }

    stage('Push') {
      steps {
        withCredentials(bindings: [string(credentialsId: 'github-access-token', variable: 'GITHUB_TOKEN')]) {
          sh 'echo ${GITHUB_TOKEN} | docker login docker.pkg.github.com -u sharknoon --password-stdin '
        }

        sh 'docker push docker.pkg.github.com/sharknoon/personal-site/personal-site:latest'
      }
    }

    stage('Deploy') {
      steps {
        sh '''docker stop personal-site || true
docker rm personal-site || true
docker rmi personal-site || true'''
        sh 'docker run -d --name personal-site --network traefik-net --restart=always docker.pkg.github.com/sharknoon/personal-site/personal-site'
      }
    }

  }
}