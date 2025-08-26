pipeline {
    agent any

    environment {
        AWS_DEFAULT_REGION = 'eu-north-1'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Seema-nowshatheen/ecommerce.git'
            }
        }

        stage('Upload to S3') {
            steps {
                withAWS(credentials: 'aws-creds', region: 'eu-north-1') {
                    sh '''
                        aws s3 cp index.html s3://celin-ecommerce --acl public-read
                        aws s3 cp images/ s3://celin-ecommerce/images/ --recursive --acl public-read
                    '''
                }
            }
        }
    }
}
