pipeline {

    agent any

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