// components/TrackedLink.tsx
"use client";

import Link from "next/link";
import { gtagEvent } from "@/lib/gtag";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Link> & {
  eventName: string;
  eventParams?: Record<string, any>;
};

export function TrackedLink({ eventName, eventParams, ...props }: Props) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        props.onClick?.(e);
        gtagEvent(eventName, eventParams);
      }}
    />
  );
}