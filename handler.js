'use strict';

const providers = require('ethers').providers;

module.exports.provider = async (event, context, callback) => {
  const provider = new providers.InfuraProvider(process.env.BN_PROVIDER_NAME, process.env.BN_PROVIDER_TOKEN);
  const nonce = await provider.getTransactionCount('0xa5652e6244F673cc20c9fb6BeD1572F62183aC8e');
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'I can user ethers!',
      provider: provider,
      nonce: nonce
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};