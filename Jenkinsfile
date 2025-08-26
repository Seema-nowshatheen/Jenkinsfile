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
    withAWS(credentials: 'aws-jenkins-creds', region: 'eu-north-1') {
        bat """
        aws s3 sync ${WORKSPACE}\\celin-ecommerce s3://celin-ecommerce --delete
        """
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
