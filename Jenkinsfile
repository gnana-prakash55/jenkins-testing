pipeline {

    agent any

     stages {

        stage('build') {
            steps {
              nodejs('Node-14.17.2') { sh 'npm run build' }
            }
        }

        stage('stop existing') {
            steps {
              nodejs('Node-14.17.2') { 
                  sh 'pm2 stop app.js' 
                  sh 'pm2 delete app.js'
                  sh 'pm2 save --force'
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
                nodejs('Node-14.17.2') { 
                    sh 'pm2 start app.js' 
                    sh 'pm2 save'
                }
            }
        }

    }

}