- [Introduction](#introduction)
  - [Project description](#project-description)
- [Development Environment](#development-environment)
  - [Requirements](#requirements)
- [Pipeline Environment](#pipeline-environment)
  - [Requirements](#requirements-1)
    - [Creating an AWS IAM user](#creating-an-aws-iam-user)
    - [Setting our AWS GitHub repository secrets](#setting-our-aws-github-repository-secrets)
    - [Create an application on AWS Elastic Beanstalk](#create-an-application-on-aws-elastic-beanstalk)
  - [Available Scripts](#available-scripts)
    - [`npm start`](#npm-start)
    - [`npm run start:docker`](#npm-run-startdocker)
    - [`npm test`](#npm-test)
    - [`npm run build`](#npm-run-build)
    - [`npm run eject`](#npm-run-eject)

# Introduction

## Project description

This repository contains the source code for Carsearch, a simple application that retrieves static information on automobiles based on a search query.

The purpose of this app was to test my DevOps skills, specifically with the following new technologies:
  - `AWS`
  - `Docker`
  - `GitHub Actions`

To test the app out, run locally and use the names from `searchableCarNames.md` to query search:

# Development Environment
## Requirements
* Install the tools below:
  * NodeJS 12+
  * npm 6.14.0+
  * Docker (`https://www.docker.com/get-started/`)

* Accounts needed:
  * AWS account (`https://aws.amazon.com/`)
      - You will need to provide your card details to sign up, but you will only be using the free tier.

* Run `npm install` to install dependencies

# Pipeline Environment
## Requirements
### Creating an AWS IAM user
...

### Setting our AWS GitHub repository secrets
...

### Create an application on AWS Elastic Beanstalk
...

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run start:docker`

Runs the app locally in a container via Docker.
Open [http://localhost:4500](http://localhost:4500) to view it in the browser.

Because we will be running the same image in "production", this is where you can run integrations test before pushing changes to "production".

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.