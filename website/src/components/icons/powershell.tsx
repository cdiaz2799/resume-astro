import * as React from "react";

// By: devicon-plain
// See: https://v0.app/icon/devicon-plain/powershell
// Example: <IconDeviconPlainPowershell width="24px" height="24px" style={{color: "#000000"}} />

export const IconDeviconPlainPowershell = ({
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
      d="M124.912 19.358c-.962-1.199-2.422-1.858-4.111-1.858h-92.61c-3.397 0-6.665 2.642-7.444 6.015L2.162 104.022c-.396 1.711-.058 3.394.926 4.619c.963 1.199 2.423 1.858 4.111 1.858v.001H99.81c3.396 0 6.665-2.643 7.443-6.016l18.586-80.508c.395-1.711.057-3.395-.927-4.618m-98.589 77.17c-1.743-2.397-1.323-5.673.94-7.318l37.379-27.067v-.556L41.157 36.603c-1.916-2.038-1.716-5.333.445-7.361c2.162-2.027 5.466-2.019 7.382.019l28.18 29.979c1.6 1.702 1.718 4.279.457 6.264c-.384.774-1.182 1.628-2.593 2.618l-41.45 29.769c-2.263 1.644-5.512 1.034-7.255-1.363m59.543.538H63.532c-2.597 0-4.702-2.082-4.702-4.65s2.105-4.65 4.702-4.65h22.333c2.597 0 4.702 2.082 4.702 4.65s-2.104 4.65-4.701 4.65"
      clipRule="evenodd"
    />
  </svg>
);
