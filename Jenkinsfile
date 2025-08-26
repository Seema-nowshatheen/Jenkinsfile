pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Seema-nowshatheen/ecommerce.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Running build steps...'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                  aws s3 sync . s3://celin-ecommerce --delete
                '''
            }
        }
    }
}
