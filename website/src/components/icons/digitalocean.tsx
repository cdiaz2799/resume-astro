import * as React from "react";

// By: mdi
// See: https://v0.app/icon/mdi/digital-ocean
// Example: <IconMdiDigitalOcean width="24px" height="24px" style={{color: "#000000"}} />

export const IconMdiDigitalOcean = ({
  height = "1em",
  fill = "currentColor",
  focusable = "false",
  ...props
}: Omit<React.SVGProps<SVGSVGElement>, "children">) => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={height}
    focusable={focusable}
    {...props}
  >
    <path
      fill={fill}
      d="M6 12H2C2 6.5 6.5 2 12 2s10 4.5 10 10s-4.5 10-10 10v-4H8v-4h4v4c3.32 0 6-2.69 6-6s-2.69-6-6-6s-6 2.69-6 6m2 6v3H5v-3zm-5-2h2v2H3z"
    />
  </svg>
);
