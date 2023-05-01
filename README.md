<!--
title: 'AWS Simple HTTP Endpoint in NodeJS using AWS Cognito and DynamoDB operations'
description: 'This template makes a simple REST API with Node.js, with AWS Cognito authentication and DynamoDB operations running on AWS Lambda and API Gateway using the traditional Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
priority: 1
authorLink: 'https://github.com/danieltikamori'
authorName: 'Daniel Tikamori'
authorAvatar: 'https://avatars.githubusercontent.com/danieltikamori'
-->

# Serverless Framework Node REST API with DynamoDB and Cognito on AWS

This template makes a simple REST API with Node.js, with AWS Cognito authentication and DynamoDB operations running on AWS Lambda and API Gateway using the traditional Serverless Framework. Based on [aws-node-rest-api repo](https://github.com/serverless/examples/tree/v3/aws-node-rest-api/).

This template does create a DynamoDB database and an Amazon Cognito User Pool. For more advanced examples check out the [examples repo](https://github.com/serverless/examples/) which includes Typescript, Mongo, DynamoDB and other examples.

## Usage

### Deployment

This example is made to work with the Serverless Framework dashboard which includes advanced features like CI/CD, monitoring, metrics, etc.

```
$ serverless login
$ serverless deploy
```

To deploy without the dashboard you will need to remove `org` and `app` fields from the `serverless.yml`, and you won’t have to run `sls login` before deploying.

After running deploy, you should see output similar to:
\_Note_In the current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [http event docs](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).

### Invocation

After successful deployment, you can call the created application via HTTP:
This should result in a response similar to the following (removed `input` content for brevity):

```json
{
  "message": "Go Serverless v2.0! Your function executed successfully!",
  "input": {
    ...
  }
}
```

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function hello
```

Which should result in a response similar to the following:

```
{
  "statusCode": 200,
  "body": "{\n  \"message\": \"Go Serverless v2.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
}
```

Alternatively, it is also possible to emulate API Gateway and Lambda locally by using `serverless-offline` plugin. In order to do that, execute the following command:

```bash
serverless plugin install -n serverless-offline
```

It will add the `serverless-offline` plugin to `devDependencies` in `package.json` file as well as will add it to `plugins` in `serverless.yml`.

After installation, you can start local emulation with:

```
serverless offline
```

To learn more about the capabilities of `serverless-offline`, please refer to its [GitHub repository](https://github.com/dherault/serverless-offline).

### Amazon DynamoDB

Amazon DynamoDB is a fully managed, serverless, key-value NoSQL database designed to run high-performance applications at any scale. DynamoDB offers built-in security, continuous backups, automated multi-Region replication, in-memory caching, and data import and export tools.

This template creates a database and uses the [AWS DynamoDB](https://aws.amazon.com/dynamodb/) service to store data in DynamoDB.
Operate a database with the operations listed below:

- dynamodb:PutItem
- dynamodb:GetItem
- dynamodb:UpdateItem
- dynamodb:Scan

### Amazon Cognito

Amazon Cognito helps you implement customer identity and access management (CIAM) into your web and mobile applications. You can quickly add user authentication and access control to your applications in minutes.

This template creates a user pool and allows the following operations:

- cognito-idp:AdminInitiateAuth
- cognito-idp:AdminCreateUser
- cognito-idp:AdminSetUserPassword
