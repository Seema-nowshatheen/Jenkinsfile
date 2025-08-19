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
                bat 'echo Building static website...'
                bat 'dir'   // list files
            }
        }
        stage('Test') {
            steps {
                bat 'echo Running basic validation...'
                // If you had npm: bat 'npm run lint'
            }
        }
        stage('Deploy') {
            steps {
                bat 'echo Deploying website...'
                // Example local deploy:
                // bat 'xcopy * C:\\inetpub\\wwwroot\\ecommerce /E /Y'
            }
        }
    }
}
