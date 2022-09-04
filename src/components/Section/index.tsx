import React, { HTMLAttributes, ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, children, className }: SectionProps) => {
  const aditionalStyle = className ?? "";

  return (
    <section
      className={`w-full h-auto bg-white-default px-5 py-2 mb-[2rem] ${aditionalStyle}`}
      id={id}
    >
      {children}
    </section>
  );
};

export { Section };
