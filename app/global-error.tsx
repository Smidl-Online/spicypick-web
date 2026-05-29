"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            fontFamily: "sans-serif",
            background: "#0a0a14",
            color: "#fff",
            gap: "1rem",
          }}
        >
          <div style={{ fontSize: "4rem" }}>🌶️</div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700 }}>
            Something went wrong
          </h2>
          <button
            onClick={reset}
            style={{
              background: "#ff3b3b",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "0.6rem 1.4rem",
              cursor: "pointer",
              fontSize: "0.9rem",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
