import pg from 'pg';
import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
  try {
    const { username, password } = await readBody(event);
    
    // Attempt to connect to PostgreSQL with provided credentials
    const client = new pg.Client({
      user: username,
      password: password,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    });

    await client.connect();
    await client.end();

    // Generate JWT token
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Set cookie with JWT token
    setCookie(event, 'auth_token', token, {
      httpOnly: true,
      sameSite: 'strict',
      path: '/',
      maxAge: 3600 // 1 hour
    });

    console.log('Login successful with cookie login.post: ', event.res.getHeader('Set-Cookie'));
    console.log('Request URL: ', event.req.url);
    console.log('Request Method: ', event.req.method);
    console.log('Request Headers: ', event.req.headers);
    console.log('Response Headers: ', event.res.getHeaders());
    console.log('Response Status Code: ', event.res.statusCode);
    console.log('Response Body: ', event.res.body);
        console.log('Login successful');
      return { message: 'Login successful', token };
  } catch (error) {
      console.error('Login error:', error);
    return createError({ statusCode: 401, message: 'login.post says: Invalid credentials' });
  }
});
