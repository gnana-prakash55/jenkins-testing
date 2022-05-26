pipeline {
    agent any
    stages {
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
                sh "pm2 restart app"
            }

        }
    }
}