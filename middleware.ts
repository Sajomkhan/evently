import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    publicRoutes: [    // add routes address to be public as needed.
        '/',
        '/events/:id',
        '/api/webhook/clerk',
        '/api/webhooks(.*)',
        '/api/webhook(.*)',
        '/api/webhook/stripe',
        '/api/uploadthing',
    ],
    ignoredRoutes: [
        '/api/webhook/clerk',
        '/api/webhook/stripe',
        '/api/uploadthing',
    ]
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 