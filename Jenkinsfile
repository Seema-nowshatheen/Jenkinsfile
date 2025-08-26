pipeline {
    agent any

    environment {
        AWS_DEFAULT_REGION = 'eu-north-1'   // Change to your region
        S3_BUCKET = 'celin-ecommerce'      // Your S3 bucket
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Seema-nowshatheen/ecommerce.git'
            }
        }

        stage('Deploy to S3') {
            steps {
                withAWS(credentials: 'aws-jenkins-creds', region: "${AWS_DEFAULT_REGION}") {
                    sh '''
                        aws s3 sync . s3://$S3_BUCKET --delete --exclude ".git/*" --exclude "Jenkinsfile"
                    '''
                }
            }
        }
    }

    post {
        success {
            echo '✅ Website updated successfully!'
        }
        failure {
            echo '❌ Deployment failed.'
        }
    }
}
