pipeline{
  agent {
    docker {
      image "shavbb/react-machine-coding"
      args '--user root -v /var/run/docker.sock:/var/run/docker.sock'
    }
  }
  stages{
    stage('Checkout') {
      steps {
        sh "echo passed!!!"
        // git url:'https://github.com/ShavB/machine-coding', branch: "main"
      }
    }
    state('Build and Test'){
      steps{
        sh 'ls -ltr'
      }
    }
  }
}