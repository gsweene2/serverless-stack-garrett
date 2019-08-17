# Sample Notes App

Built using the https://serverless-stack.com tutorial

A great resource for
  - Basic React App
  - Utilizing react router
  - Authenticating Users with Cognito
  - Connecting to AWS resources with Amplify
  - An S3 Uploader
  - CRUD options on a Dynamo table

# Upload React App to S3

```
npm run build
aws s3 sync build/ s3://notes-app-ciient-garrett --delete
aws cloudfront create-invalidation --distribution-id E18AY1FT7925S6 --paths "/*"
aws cloudfront create-invalidation --distribution-id E37KZH3NT5MRXU --paths "/*"
```
