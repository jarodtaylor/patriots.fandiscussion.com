# Get the AWS_BUCKET_NAME value as a variable $AWS_BUCKET_NAME
# AWS_BUCKET_NAME=$(grep AWS_BUCKET_NAME .env | cut -d '=' -f2);
AWS_BUCKET_NAME="patriots.fandiscussion.com"
# Clean the cache, run build and deploy the public directory and exclude the uploads folder.
npm run clean && npm run build && aws s3 sync public s3://$AWS_BUCKET_NAME/ --acl public-read;