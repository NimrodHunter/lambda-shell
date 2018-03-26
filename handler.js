'use strict';

const providers = require('ethers').providers;

module.exports.provider = (event, context, callback) => {
  const provider = new providers.InfuraProvider(process.env.BN_PROVIDER_NAME, process.env.BN_PROVIDER_TOKEN);
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'I can user ethers!',
      provider: provider
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};