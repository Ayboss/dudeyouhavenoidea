import React from "react";

function CardContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10">
      {children}
    </div>
  );
}

export default CardContainer;
