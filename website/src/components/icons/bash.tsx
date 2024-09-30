import * as React from "react";

// By: mdi
// See: https://v0.app/icon/mdi/bash
// Example: <IconMdiBash width="24px" height="24px" style={{color: "#000000"}} />

export const IconMdiBash = ({
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
      d="M5 9h2.31l.32-3h2l-.32 3h2l.32-3h2l-.32 3H15v2h-1.9l-.2 2H15v2h-2.31l-.32 3h-2l.32-3h-2l-.32 3h-2l.32-3H5v-2h1.9l.2-2H5zm4.1 2l-.2 2h2l.2-2M19 6h-2v8h2m0 2h-2v2h2Z"
    />
  </svg>
);
