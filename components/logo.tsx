"use client"

export function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      {/* Floral circle background */}
      <circle cx="20" cy="20" r="18" fill="currentColor" opacity="0.1" />

      {/* Stylized A with floral elements */}
      <path d="M20 8L12 30H15.5L17 25H23L24.5 30H28L20 8Z" fill="url(#logoGradient)" />
      <path d="M18 21L20 14L22 21H18Z" fill="currentColor" opacity="0.6" />

      {/* Floral accent - small flower on top */}
      <g transform="translate(20, 6)">
        <circle cx="0" cy="0" r="2.5" fill="currentColor" />
        <circle cx="-2" cy="-1" r="1.2" fill="currentColor" opacity="0.7" />
        <circle cx="2" cy="-1" r="1.2" fill="currentColor" opacity="0.7" />
        <circle cx="0" cy="-2.5" r="1.2" fill="currentColor" opacity="0.7" />
      </g>

      {/* Decorative dots */}
      <circle cx="8" cy="12" r="1" fill="currentColor" opacity="0.4" />
      <circle cx="32" cy="12" r="1" fill="currentColor" opacity="0.4" />
    </svg>
  )
}
