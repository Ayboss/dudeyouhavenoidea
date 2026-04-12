import React from "react";

function Menu({
  color = "white",
  ...props
}: { color?: string } & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="32"
        d="M80 160h352M80 256h352M80 352h352"
      />
    </svg>
  );
}

export default Menu;
