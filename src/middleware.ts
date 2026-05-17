import { createDualmarkMiddleware } from "@dualmark/nextjs";

export default createDualmarkMiddleware({
  siteUrl: "https://genlift.online",
});

export const config = {
  matcher: ["/((?!_next/|favicon.ico|md/).*)"],
};
