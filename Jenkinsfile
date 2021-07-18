pipeline {

    agent any

    environment {
        registry = 'node-app-demo'
    }


    stages {

        stage('Creating docker image') {
            steps {
                script {
                    docker.build registry
                }
            }
        }

        stage('Stoping running container') {
            steps {
                sh "docker rm node-app-demo-server -f"
            }
        }

        stage('Running latest container') {
            steps {
                sh "docker run -d -p 3000:3000 --name node-app-demo-server node-app-demo"
            }
        }

    }

    post {
        success {
            sh "docker image prune -f"
        }

        failure {
            sh "docker run -d -p 3000:3000 --name node-app-demo-server node-app-demo"
        }
    }
}