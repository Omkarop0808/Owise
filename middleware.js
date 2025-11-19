// middleware.ts (or proxy.ts)
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/expenses(.*)',
  '/settlements(.*)',
  '/groups(.*)',
  '/contacts(.*)',
  '/person(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  // If route matches, require a signed-in user
  if (isProtectedRoute(req)) {
    // either:
    // await auth.protect(); // will redirect / 404 per Clerk options
    // or destructure and call redirectToSignIn manually:

    const { userId, redirectToSignIn } = await auth();

    if (!userId) {
      // redirectToSignIn() returns a Next Response
      return redirectToSignIn();
    }
  }

  // allow the request to continue
  return NextResponse.next();
});

export const config = {
  matcher: [
    // skip internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // run for api routes
    '/(api|trpc)(.*)',
  ],
};
