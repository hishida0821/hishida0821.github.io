// libs/client.js
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'hirokiishida',
  apiKey: process.env.API_KEY,
});
