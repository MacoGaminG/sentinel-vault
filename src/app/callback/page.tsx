"use client";

import { Spinner } from "@/components/ui/spinner";
import { useEffect } from "react";

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

  return (
    <div>
      <Spinner />
    </div>
  );
}
