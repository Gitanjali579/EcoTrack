import React from "react";
import { LoaderCircle } from "lucide-react";

function LoadingSpinner({
  message = "Loading...",
  size = 32,
  fullScreen = false
}) {
  return (
    <div
      className={`loading-spinner ${
        fullScreen ? "full-screen" : ""
      }`}
    >
      <LoaderCircle
        size={size}
        className="loading-spinner-icon"
      />

      {message && (
        <p className="loading-spinner-message">
          {message}
        </p>
      )}
    </div>
  );
}

export default LoadingSpinner;