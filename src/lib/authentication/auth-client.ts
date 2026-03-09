import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient();

export const signIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
    callbackURL: "/",
    errorCallbackURL: "/error",
    newUserCallbackURL: "/welcome",
    disableRedirect: false,
    // idToken: {
    //     token: // Google ID Token,
    //     accessToken: // Google Access Token
    // }
  });
};
