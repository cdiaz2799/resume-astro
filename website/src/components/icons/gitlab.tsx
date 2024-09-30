import * as React from "react";

// By: devicon-plain
// See: https://v0.app/icon/devicon-plain/gitlab
// Example: <IconDeviconPlainGitlab width="24px" height="24px" style={{color: "#000000"}} />

export const IconDeviconPlainGitlab = ({
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
      d="m124.758 51.396l-.177-.452l-17.107-44.648a4.459 4.459 0 0 0-1.761-2.121a4.581 4.581 0 0 0-5.236.281a4.578 4.578 0 0 0-1.518 2.304L87.407 42.102H40.632L29.081 6.761a4.492 4.492 0 0 0-1.518-2.31a4.581 4.581 0 0 0-5.236-.281a4.502 4.502 0 0 0-1.761 2.121L3.425 50.918l-.17.452c-5.059 13.219-.763 28.192 10.537 36.716l.059.046l.157.111l26.061 19.516l12.893 9.758l7.854 5.93a5.283 5.283 0 0 0 6.388 0l7.854-5.93l12.893-9.758l26.218-19.634l.065-.052c11.274-8.526 15.562-23.472 10.524-36.677"
    />
  </svg>
);
