import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
  try {
    const { token } = await useBody(event);

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET);
    
    return { message: 'Token is valid' };
  } catch (error) {
    return createError({ statusCode: 401, message: 'Invalid token' });
  }
});
