// server/middleware/log.js
import { eventHandler } from 'h3';

export default eventHandler((event) => {
  console.log('Request logged:', event.req.url);
});
