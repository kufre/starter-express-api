const enviroment = process.env.API_ENVIRONMENT;
const appName = process.env.APP_NAME;
const apiServer = process.env.API_SERVER || '0.0.0.0';
const apiVersion = process.env.API_VERSION;
const payStackApiKey = process.env.PAYSTACK_API_KEY;
const payStackSecretKey = process.env.PAYSTACK_SECRET_KEY;
const visitTokenVerificationUrl = process.env.VISIT_TOKEN_VERIFICATION_URL || 'https://staging.evisit.pro/verify';
const apiPort = process.env.API_PORT || '4000';



export {
  apiPort,
  apiVersion,
  appName,
  apiServer,
  enviroment,
  payStackApiKey,
  payStackSecretKey,
  visitTokenVerificationUrl
};
