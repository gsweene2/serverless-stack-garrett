export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-uploads-garrett"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://1x3inwvcl3.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_PkB5OXqdf",
      APP_CLIENT_ID: "6k33u4ers34v3l9rtmu7710fm0",
      IDENTITY_POOL_ID: "us-east-1:9fa20d6c-ffa6-4a62-b352-3ebb3ce8e399"
    }
  };
  