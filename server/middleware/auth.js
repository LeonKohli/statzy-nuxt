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

  if (!token) {
    throw createError({ statusCode: 401, message: 'Not authenticated' });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    throw createError({ statusCode: 401, message: 'Invalid token' });
  }
});
