pipeline {

    agent any

     stages {

        stage('build') {
            steps {
              nodejs('Node-14.17.2') { 
                  sh 'npm run build' 
                  sh 'npm start'
                }
            }
        }

        stage('test') {
            steps {
                nodejs('Node-14.17.2') { sh 'npm run test' }
            }
        }

        stage('deploy') {
            steps {
                nodejs('Node-14.17.2') { sh 'npm start' }
            }
        }

    }

}