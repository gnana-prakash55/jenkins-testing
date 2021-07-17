pipeline {

    agent any

     stages {

        stage('build') {
            steps {
              nodejs('Node-14.17.2') { sh 'npm run build' }
            }
        }

         stage('Stoping existing node app') {
            steps {
               nodejs('Node-14.17.2') { sh "pm2 stop app.js" }
            }
        }

        stage('test') {
            steps {
                nodejs('Node-14.17.2') { sh 'npm run test' }
            }
        }

        stage('deploy') {
            steps {
                nodejs('Node-14.17.2') { sh 'pm2 start app.js' }
            }
        }

    }

}