export default function PrivacyPolicy() {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-gray-400 mb-6">
        Last Updated: {new Date().toLocaleDateString("en-IN")}
      </p>

      <div className="space-y-8 text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p>
            TradeConnect Association (“the Association”, “we”, “our”) is committed to protecting the privacy and
            personal data of our members, partners, and visitors. This Privacy Policy explains how we collect, use,
            store, and protect your information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Personal details such as your name, email, phone number, and postal address.</li>
            <li>Company or organization details for membership and event participation.</li>
            <li>Payment and billing information for membership fees and event registrations.</li>
            <li>Technical data such as IP address, browser type, and website usage statistics.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
          <p>Your information may be used for:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Processing membership applications and renewals.</li>
            <li>Organizing and managing events, meetings, and conferences.</li>
            <li>Sending updates, newsletters, and relevant trade information.</li>
            <li>Complying with legal and regulatory requirements.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Data Sharing & Disclosure</h2>
          <p>
            We do not sell or rent your personal data. Your information may be shared with:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Trusted service providers assisting in event management and IT support.</li>
            <li>Regulatory authorities when required by law.</li>
            <li>Partner organizations for joint events or trade initiatives (with your consent).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
          <p>
            We implement reasonable administrative, technical, and physical safeguards to protect your personal
            information from unauthorized access, loss, misuse, or alteration.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Data Retention</h2>
          <p>
            We retain your information only for as long as necessary to fulfill the purposes for which it was collected
            and to comply with legal obligations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Your Rights</h2>
          <p>You may have the right to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Access the personal information we hold about you.</li>
            <li>Request corrections to your personal data.</li>
            <li>Withdraw consent for certain data uses.</li>
            <li>Request deletion of your personal information (subject to legal requirements).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Cookies & Tracking</h2>
          <p>
            Our website may use cookies and tracking technologies to enhance user experience and analyze website
            performance. You can control cookie settings through your browser.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">9. Third-Party Links</h2>
          <p>
            Our website may contain links to external websites. We are not responsible for the privacy practices of
            these third parties and encourage you to review their privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated
            “Last Updated” date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">11. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our data practices, please contact us at{" "}
            <a href="mailto:privacy@tradeconnect.org" className="text-accent underline">
              privacy@tradeconnect.org
            </a>
            .
          </p>
        </section>
      </div>
    </section>
  );
}
