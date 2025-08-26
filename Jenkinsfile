pipeline {
    agent any

    environment {
        // Inject AWS credentials from Jenkins Credentials (Secret Text)
        AWS_ACCESS_KEY_ID     = credentials('AKIA57VDLZXUSRIP2JK3')     // ID for Access Key
        AWS_SECRET_ACCESS_KEY = credentials('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')    // ID for Secret Key
        AWS_DEFAULT_REGION    = 'eu-north-1'
    }

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
                bat '''
                    aws s3 sync "celin-ecommerce" s3://celin-ecommerce --delete --region eu-north-1
                '''
            }
        }
    }
}
