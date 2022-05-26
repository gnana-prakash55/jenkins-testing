pipeline {
    agent any
    stages {
         stage('Stopping Existing App') {
            steps {
                sh "pm2 delete app"
            }

        }

        stage('Building App') {
            steps {
                sh "npm run build"
            }

        }

        stage('Test App') {
            steps {
                sh "npm run test"
            }

        }

        stage('Run App') {
            steps {
                sh "pm2 start app.js"
            }

        }
    }
}