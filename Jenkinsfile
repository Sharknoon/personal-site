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
        sh '''sudo docker stop personal-site || true
sudo docker rm personal-site || true
sudo docker rmi personal-site || true'''
        sh 'sudo docker run -d --name personal-site --network traefik-net --restart=always docker.pkg.github.com/sharknoon/personal-site/personal-site'
      }
    }

  }
}