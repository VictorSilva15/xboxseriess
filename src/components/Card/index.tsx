import React from "react";

interface CardProps {
  title: string;
  description: string;
}

export default function Card({ title, description }: CardProps) {
  return (
    <div className="flex flex-col gap-1 w-full p-1">
      <h3 className="text-lg font-header text-black">{title}</h3>
      <p className="ml-6 font-serif text-smtext-black opacity-90 text-left">
        {description}
      </p>
    </div>
  );
}
