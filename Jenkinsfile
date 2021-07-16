pipeline {

    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 3000:3000'
        }

     stages {

        stage('build') {
            steps {
               sh 'npm run build'
            }
        }

        stage('test') {
            steps {
               sh 'npm run test'
            }
        }

        stage('deploy') {
            steps {
               sh 'npm start'
            }
        }

    }

}