pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Seema-nowshatheen/ecommerce.git'

            }
        }

        stage('Build') {
            steps {
                echo 'No build step needed for static site'
            }
        }

        stage('Test') {
            steps {
                echo 'Skipping tests for static site'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                  aws s3 sync "celin ecommerce" s3://celin-ecommerce --delete
                '''
            }
        }
    }
}
