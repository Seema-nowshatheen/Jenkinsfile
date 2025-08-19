pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Seema-nowshatheen/Jenkinsfile'
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
                echo 'Deploying application...'
            }
        }
    }
}
