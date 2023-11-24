export default defineEventHandler(async (event) => {
    try {
      // Expire the JWT token cookie
      setCookie(event, 'auth_token', '', {
        httpOnly: true,
        sameSite: 'strict',
        path: '/',
        maxAge: -1 // This will expire the cookie immediately
      });
  
      console.log('Logout successful');
      return { message: 'Logout successful' };
    } catch (error) {
      console.error('Logout error:', error);
      return createError({ statusCode: 500, message: 'logout.post says: Logout failed' });
    }
  });