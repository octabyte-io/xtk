import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import LegalLayout from "@/components/site/legal/legal-layout";
import { A, H2, P, Table } from "@/components/site/legal/prose";
import { LEGAL_UPDATED, company, subProcessors } from "@/lib/legal";

export const metadata: Metadata = pageMetadata({
  title: "Sub-processors",
  description:
    "The third-party services XTK relies on to process data, their purpose and region.",
  path: "/legal/subprocessors",
});

export default function SubProcessors() {
  return (
    <LegalLayout
      path="/legal/subprocessors"
      eyebrow="Legal"
      title="Sub-processors"
      lede="The third-party services XTK uses to deliver the product, what each one does, and where it processes data."
      updated={LEGAL_UPDATED.subprocessors}
    >
      <P>
        We engage the sub-processors below to provide {company.product}. Each is
        bound by data protection terms consistent with our{" "}
        <A href="/legal/dpa">Data Processing Addendum</A>. This list is kept current;
        material changes are announced so controllers can object on reasonable
        data-protection grounds.
      </P>

      <Table
        head={["Sub-processor", "Purpose", "Region"]}
        rows={subProcessors.map((s) => [s.name, s.purpose, s.region])}
      />

      <H2 id="notice">Changes &amp; notice</H2>
      <P>
        To be notified of additions or replacements to this list, email{" "}
        <A href={`mailto:${company.privacyEmail}`}>{company.privacyEmail}</A> and ask
        to be added to sub-processor change notifications.
      </P>
    </LegalLayout>
  );
}
