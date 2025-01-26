# Setting
```bash
S3_BUCKET_NAME="<S3_BUCKET_NAME>"

npm install
npm run buind
aws s3 sync build/ s3://$S3_BUCKET_NAME
```