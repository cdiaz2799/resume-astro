import * as React from "react";

// By: devicon-plain
// See: https://v0.app/icon/devicon-plain/docker
// Example: <IconDeviconPlainDocker width="24px" height="24px" style={{color: "#000000"}} />

export const IconDeviconPlainDocker = ({
  height = "1em",
  fill = "currentColor",
  focusable = "false",
  ...props
}: Omit<React.SVGProps<SVGSVGElement>, "children">) => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    height={height}
    focusable={focusable}
    {...props}
  >
    <path
      fill={fill}
      d="M124.8 52.1c-4.3-2.5-10-2.8-14.8-1.4c-.6-5.2-4-9.7-8-12.9l-1.6-1.3l-1.4 1.6c-2.7 3.1-3.5 8.3-3.1 12.3c.3 2.9 1.2 5.9 3 8.3c-1.4.8-2.9 1.9-4.3 2.4c-2.8 1-5.9 2-8.9 2H79V49H66V24H51v12H26v13H13v14H1.8l-.2 1.5c-.5 6.4.3 12.6 3 18.5l1.1 2.2l.1.2c7.9 13.4 21.7 19 36.8 19c29.2 0 53.3-13.1 64.3-40.6c7.4.4 15-1.8 18.6-8.9l.9-1.8zM28 39h10v11H28zm13.1 44.2c0 1.7-1.4 3.1-3.1 3.1c-1.7 0-3.1-1.4-3.1-3.1c0-1.7 1.4-3.1 3.1-3.1c1.7.1 3.1 1.4 3.1 3.1M28 52h10v11H28zm-13 0h11v11H15zm27.7 50.2c-15.8-.1-24.3-5.4-31.3-12.4c2.1.1 4.1.2 5.9.2c1.6 0 3.2 0 4.7-.1c3.9-.2 7.3-.7 10.1-1.5c2.3 5.3 6.5 10.2 14 13.8zM51 63H40V52h11zm0-13H40V39h11zm13 13H53V52h11zm0-13H53V39h11zm0-13H53V26h11zm13 26H66V52h11zM38.8 81.2c-.2-.1-.5-.2-.8-.2c-1.2 0-2.2 1-2.2 2.2c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2c0-.3-.1-.6-.2-.8c-.2.3-.4.5-.8.5c-.5 0-.9-.4-.9-.9c.1-.4.3-.7.5-.8"
    />
  </svg>
);
