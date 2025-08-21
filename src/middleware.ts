import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default withAuth(
  async function middleware(req: { kindeAuth: unknown; } ) {
     console.log("look at me", req.kindeAuth);
  },
  {
    // Middleware still runs on all routes, but doesn't protect the blog route
    publicPaths: ["/", "/dashboard"],
  }
);

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
  ],
}
