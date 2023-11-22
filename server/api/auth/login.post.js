// /server/api/auth/login.post.js
import pg from 'pg';
import jwt from 'jsonwebtoken';
const { Pool } = pg;

export default defineEventHandler(async (event) => {
  try {
    const { username, password } = await readBody(event);

    const pool = new Pool({
      user: username,
      password: password,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    });

    // Test the connection
    await pool.connect();

    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return { token };
  } catch (error) {
    console.error(error);
    return createError({ statusCode: 401, statusMessage: 'Invalid credentials' });
  }
});
