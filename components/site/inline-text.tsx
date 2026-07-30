import { Fragment, type ReactNode } from "react";
import type { Inline } from "@/lib/inline";
import { A } from "./prose-link";

/**
 * Renders body copy that may contain inline links. A plain string returns
 * itself, so this is a drop-in for `{block.text}` at every call site in
 * guide-body.tsx and post-body.tsx.
 *
 * A function rather than a component: both renderers are server components in a
 * static export, so a component boundary buys nothing and this keeps each call
 * site a one-token wrap.
 */
export function renderInline(value: Inline): ReactNode {
  if (typeof value === "string") return value;
  return value.map((node, i) =>
    typeof node === "string" ? (
      <Fragment key={i}>{node}</Fragment>
    ) : (
      <A key={i} href={node.href}>
        {node.text}
      </A>
    ),
  );
}
