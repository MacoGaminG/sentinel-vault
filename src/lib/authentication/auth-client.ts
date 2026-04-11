import { createAuthClient } from "better-auth/react";
import { toast } from "sonner";
export const authClient = createAuthClient();

export const signIn = async () => {
  const { data } = await authClient.signIn.social({
    provider: "google",
    callbackURL: "/callback",
    errorCallbackURL: "/error",
    newUserCallbackURL: "/callback",
    disableRedirect: true,
    // idToken: {
    //     token: // Google ID Token,
    //     accessToken: // Google Access Token
    // }
  });

  window.open(data?.url, "_blank", "width=500,height=600");
  window.addEventListener("message", (event) => {
    if (event.origin !== window.location.origin) return;

    if (event.data.type === "auth-success") {
      toast.success("Authentication completed successfully !");
    } else {
      toast.error("Authentication failed.");
    }

    window.removeEventListener("message", () => {});
  });
};

export const { signOut, getSession, useSession } = authClient;
