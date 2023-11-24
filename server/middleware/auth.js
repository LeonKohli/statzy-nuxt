// /middleware/auth.js

import jwt from 'jsonwebtoken';

const excludedPaths = ['/api/auth/login' , '/login']; // Exclude login route
const loggedInPaths = ['/login']; // Paths that should not be accessible when logged in

export default defineEventHandler((event) => {
  const url = new URL(event.req.url, `http://${event.req.headers.host}`);

  const token = getCookie(event, 'auth_token');

  // If user is trying to access login page while already logged in
  if (token && loggedInPaths.includes(url.pathname)) {
    event.res.writeHead(302, { Location: '/fachverfahren' }); // Redirect to home page
    event.res.end();
    return;
  }

  // Skip middleware for excluded paths
  if (excludedPaths.includes(url.pathname)) {
    return;
  }

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