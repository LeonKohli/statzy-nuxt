// /middleware/auth.js

import jwt from 'jsonwebtoken';

const excludedPaths = ['/api/auth/login' , '/login']; // Exclude login route

export default defineEventHandler((event) => {
  const url = new URL(event.req.url, `http://${event.req.headers.host}`);

  // Skip middleware for excluded paths
  if (excludedPaths.includes(url.pathname)) {
    return;
  }

  const token = getCookie(event, 'auth_token');
  console.log('auth.js token in auth.js: ', token);

  if (!token) {
    event.res.writeHead(302, { Location: '/login' });
    event.res.end();
    return;
  }
  
  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    event.res.writeHead(302, { Location: '/login' });
    event.res.end();
  }
});
