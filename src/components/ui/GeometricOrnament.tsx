type GeometricOrnamentProps = {
  className?: string;
  variant?: "corner" | "divider" | "tile";
};

export function GeometricOrnament({
  className = "",
  variant = "corner",
}: GeometricOrnamentProps) {
  if (variant === "divider") {
    return (
      <svg
        viewBox="0 0 120 12"
        fill="none"
        className={className}
        aria-hidden
      >
        <path
          d="M0 6h44M76 6h44M60 6l-8-6 8 6-8 6 8-6z"
          stroke="currentColor"
          strokeWidth="0.75"
        />
      </svg>
    );
  }

  if (variant === "tile") {
    return (
      <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden>
        <path
          d="M40 4 76 40 40 76 4 40Z"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.35"
        />
        <path
          d="M40 14 66 40 40 66 14 40Z"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.55"
        />
        <circle cx="40" cy="40" r="3" fill="currentColor" opacity="0.7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path
        d="M24 2 46 24 24 46 2 24Z"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.4"
      />
      <path
        d="M24 10 38 24 24 38 10 24Z"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.65"
      />
    </svg>
  );
}
