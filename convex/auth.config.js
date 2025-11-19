import { AuthConfig } from "convex/server";

const authConfig = {
  providers: [
    {
      // Replace with your own Clerk Issuer URL
      // You can also use process.env.CLERK_JWT_ISSUER_DOMAIN
      domain:process.env.CLERK_JWT_ISSUER_DOMAIN,
      applicationID: "convex",
    },
  ],
};

export default authConfig;
