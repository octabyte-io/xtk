import type { Metadata } from "next";
import LegalLayout from "@/components/site/legal/legal-layout";
import { A, H2, LI, P, UL } from "@/components/site/legal/prose";
import { LAST_UPDATED, company, pricing } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy — XTK",
  description:
    "How trials, cancellations and refunds work for OctaByte XTK subscriptions.",
};

export default function Refunds() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Refund & cancellation policy"
      lede="How the free trial, cancellations and refunds work."
      updated={LAST_UPDATED}
    >
      <H2 id="trial">Free trial</H2>
      <P>
        Every new Practice starts with a{" "}
        {pricing.trialDays}-day free trial with full functionality and no credit
        card required. If you do not subscribe, your Practice moves to a read-only
        state at the end of the trial — you are never charged automatically for the
        trial.
      </P>

      <H2 id="cancel">Cancelling</H2>
      <UL>
        <LI>You can cancel your subscription at any time from account settings.</LI>
        <LI>
          Cancellation takes effect at the end of the current billing period; you
          keep access until then.
        </LI>
        <LI>After cancellation your Practice moves to a read-only state.</LI>
      </UL>

      <H2 id="refunds">Refunds</H2>
      <P>
        Subscriptions are billed in advance per {pricing.interval} at{" "}
        {pricing.amount} {pricing.currency}. Because a free trial lets you evaluate
        XTK before paying, fees are generally non-refundable except where required
        by law. We may, at our discretion, provide a pro-rata or full refund in
        cases such as a clear billing error or a prolonged service failure.
      </P>

      <H2 id="how">How to request a refund</H2>
      <P>
        Email <A href={`mailto:${company.supportEmail}`}>{company.supportEmail}</A>{" "}
        from your account email within 14 days of the charge, with your Practice
        name and the reason. Approved refunds are returned to the original payment
        method via our payments processor.
      </P>

      <H2 id="consumer">Statutory rights</H2>
      <P>
        Nothing in this policy affects any non-waivable statutory rights you may
        have under the consumer laws of your jurisdiction. See also our{" "}
        <A href="/legal/terms">Terms of Service</A>.
      </P>
    </LegalLayout>
  );
}
