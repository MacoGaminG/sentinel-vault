import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient();

export const signIn = async (): Promise<boolean> => {
  const { data } = await authClient.signIn.social({
    provider: "google",
    callbackURL: "/callback",
    errorCallbackURL: "/error",
    newUserCallbackURL: "/callback",
    disableRedirect: true,
  });

  if (!data?.url) return false;

  window.open(data.url, "_blank", "width=500,height=600");

  return new Promise<boolean>((resolve) => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;

      if (event.data.type === "auth-success") {
        window.removeEventListener("message", handleMessage);
        resolve(true);
      } else if (event.data.type === "auth-error") {
        window.removeEventListener("message", handleMessage);
        resolve(false);
      }
    };

    window.addEventListener("message", handleMessage);
  });
};

export const { signOut, getSession, useSession } = authClient;
