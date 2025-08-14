export default function Terms() {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="text-gray-400 mb-6">
        Last Updated: {new Date().toLocaleDateString("en-IN")}
      </p>

      <div className="space-y-8 text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p>
            Welcome to the TradeConnect Association (“the Association”). These Terms of Service (“Terms”) govern your
            membership, participation, and use of our website, services, and events. By accessing or using our services,
            you agree to comply with and be bound by these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Eligibility</h2>
          <p>
            Membership and participation in the Association are open to individuals, companies, and organizations
            engaged in trade, commerce, and related activities, subject to approval by our governing body.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Membership Obligations</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Provide accurate and up-to-date information during registration.</li>
            <li>Adhere to the Association’s code of conduct and ethical guidelines.</li>
            <li>Promptly pay applicable membership fees and dues.</li>
            <li>Respect the confidentiality of member information and trade-sensitive data.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Use of Services</h2>
          <p>
            The Association provides resources, events, and networking opportunities for members. You agree not to use
            our services for unlawful activities, fraudulent purposes, or any conduct that harms the reputation of the
            Association or its members.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Intellectual Property</h2>
          <p>
            All content, logos, event materials, and publications provided by the Association are protected by
            applicable copyright and trademark laws. You may not reproduce, distribute, or use our intellectual
            property without prior written consent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Event Participation</h2>
          <p>
            Participation in Association-organized events is subject to separate event-specific terms and may require
            registration and payment. The Association reserves the right to refuse participation to any individual or
            entity violating our guidelines.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Limitation of Liability</h2>
          <p>
            The Association is not responsible for any direct, indirect, or consequential losses arising from your use
            of our services or participation in our events. All activities undertaken through the Association are at
            your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Termination of Membership</h2>
          <p>
            The Association reserves the right to suspend or terminate your membership at its discretion, without
            refund, if you breach these Terms or engage in conduct detrimental to our objectives.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">9. Amendments</h2>
          <p>
            We may revise these Terms from time to time. Continued use of our services after changes are posted
            constitutes your acceptance of the revised Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">10. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be
            subject to the exclusive jurisdiction of the courts located in New Delhi, India.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">11. Contact</h2>
          <p>
            For any questions regarding these Terms, please contact us at{" "}
            <a href="mailto:info@tradeconnect.org" className="text-accent underline">
              info@tradeconnect.org
            </a>
            .
          </p>
        </section>
      </div>
    </section>
  );
}
