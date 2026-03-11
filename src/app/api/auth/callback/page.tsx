"use client";

import { useEffect } from "react";
import { toast } from "sonner";

export default function AuthCallbackPage() {
  useEffect(() => {
    if (window.opener) {
      window.opener.postMessage(
        { type: "auth-success" },
        window.location.origin,
      );
    }

    window.close();
  }, []);
  return <p>Authentication complete. You can close this window.</p>;
}
