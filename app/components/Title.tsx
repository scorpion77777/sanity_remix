/* eslint-disable prettier/prettier */

import type { PropsWithChildren } from "react";


export function Title(props: PropsWithChildren) {
  return props.children ? (
    <h1 className="text-bold max-w-4xl text-base font-bold tracking-tighter md:text-2xl lg:text-5xl xl:text-7xl">
      {props.children}
    </h1>

  ) : null
}
