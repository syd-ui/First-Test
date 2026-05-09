pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Connexion Jenkins-GitHub réussie !'
                sh 'java -version'
                sh 'git --version'
            }
        }
        stage('Test de l\'environnement') {
            steps {
                echo 'Vérification du système...'
                sh 'uptime'
            }
        }
    }
}