import { createClient } from 'microcms-js-sdk';

console.log('SERVICE_DOMAIN:', process.env.SERVICE_DOMAIN);
console.log('API_KEY:', process.env.API_KEY);

const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

export default client; 