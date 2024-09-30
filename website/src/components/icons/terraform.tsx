import * as React from "react";

// By: devicon-plain
// See: https://v0.app/icon/devicon-plain/terraform
// Example: <IconDeviconPlainTerraform width="24px" height="24px" style={{color: "#000000"}} />

export const IconDeviconPlainTerraform = ({
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
      fillRule="evenodd"
      d="M46.324 26.082L77.941 44.5v36.836L46.324 62.918zM81.41 44.5v36.836l31.633-18.418V26.082zM11.242 5.523V42.36L42.86 60.777V23.941zm66.699 79.852L46.324 66.957v36.824L77.941 122.2zm0 0"
    />
  </svg>
);
