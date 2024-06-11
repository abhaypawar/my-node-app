# my-node-app

### My Node.js App CI/CD Pipeline with Jenkins

This project demonstrates a Continuous Integration/Continuous Deployment (CI/CD) pipeline using Jenkins for a Node.js application. The pipeline covers building, testing, and deploying the application to AWS.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Setup](#setup)
  - [Local Setup](#local-setup)
  - [Jenkins Setup](#jenkins-setup)
  - [AWS Setup](#aws-setup)
- [CI/CD Pipeline](#cicd-pipeline)
- [Folder Structure](#folder-structure)
- [Author](#author)

## Prerequisites

- **AWS Account**: An AWS account is required to deploy the application.
- **Jenkins**: Jenkins should be installed. You can install it locally or use a cloud-based Jenkins server.
- **AWS CLI**: AWS CLI should be installed and configured on the machine where Jenkins is running.
- **GitHub Account**: To host the repository.

## Setup
Local Setup: Clone the Repository:

```sh
git clone https://github.com/your-repo/my-node-app.git
cd my-node-app
```

Install Dependencies:

```sh
npm install
```

Run Application:

```sh
npm start
```

Run Tests:
```
sh
npm test
```

### Jenkins Setup: Install Jenkins

Follow the instructions to install Jenkins from Jenkins official website.

    Install Required Plugins:
        Go to Jenkins Dashboard > Manage Jenkins > Manage Plugins > Available tab.
        Install the following plugins:
            Git Plugin
            NodeJS Plugin
            Pipeline Plugin
            AWS Pipeline Plugin

    Create a New Pipeline Job:
        Go to Jenkins Dashboard > New Item > Pipeline > OK.
        Under Pipeline, set the definition to "Pipeline script from SCM".
        Select Git and enter the repository URL.
        Set the script path to Jenkinsfile.

    Configure AWS Credentials:
        Go to Jenkins Dashboard > Manage Jenkins > Manage Credentials.
        Add a new credential of type "AWS Credentials" with ID aws-credentials-id.

### AWS Setup

    Create an S3 Bucket:
        Log in to the AWS Management Console.
        Go to S3 and create a new bucket.
        Note the bucket name for use in the Jenkinsfile.

    Configure AWS CLI:
        Ensure the AWS CLI is installed and configured on the Jenkins server.
        Use aws configure to set up your AWS credentials.

### CI/CD Pipeline

The CI/CD pipeline is configured using Jenkins. The pipeline performs the following steps:

    Checkout: Clones the repository from GitHub.
    Install Dependencies: Installs the Node.js dependencies.
    Test: Runs the test suite using Mocha.
    Build: Builds the application.
    Deploy: Deploys the application to an S3 bucket on AWS.

### Pipeline Stages

    Checkout: This stage clones the repository from GitHub.
    Install Dependencies: This stage installs the necessary Node.js dependencies.
    Test: This stage runs the test suite using Mocha to ensure the application is working as expected.
    Build: This stage builds the application. In this example, it runs a build script.
    Deploy: This stage deploys the built application to an S3 bucket on AWS.

### Post Actions

    Cleanup: The post section ensures that the workspace is cleaned up after each build.

### Folder Structure

bash

my-node-app/
├── app.js
├── package.json
├── test/
│   └── test.js
└── Jenkinsfile
