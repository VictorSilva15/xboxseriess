import React, { ReactNode } from "react";

import { Disclosure } from "@headlessui/react";
import { CaretCircleDown } from "phosphor-react";
import { SpecificationProps } from "../../types/accordion";

interface AccordionProps {
  items: Array<SpecificationProps>;
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <div className="w-full px-4 pt-6">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        {items.map((item) => {
          return (
            <Disclosure key={item.title}>
              {({ open }) => {
                return (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-green-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
                      <span>{item.title}</span>
                      <div className={`${open ? "rotate-180 transform" : ""}`}>
                        <CaretCircleDown
                          size={32}
                          color="#47B100"
                          weight="bold"
                        />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      {item.children}
                    </Disclosure.Panel>
                  </>
                );
              }}
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
}
