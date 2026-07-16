import PageHero from '../components/PageHero';

export default function Legal({ type }: { type: 'privacy' | 'terms' }) {
  const isPrivacy = type === 'privacy';
  return (
    <div>
      <PageHero
        badge={isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
        title={isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
        subtitle={isPrivacy ? 'How Opsloom collects, uses, and protects your data.' : 'The terms and conditions for using Opsloom services.'}
      />
      <section className="py-16 lg:py-24">
        <div className="container-max section-padding">
          <div className="max-w-3xl prose dark:prose-invert">
            <p className="text-sm text-ops-gray-400 mb-6">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            {isPrivacy ? (
              <div className="space-y-6 text-base text-ops-gray-600 dark:text-ops-gray-300 leading-relaxed">
                <h2 className="text-xl font-bold text-ops-black dark:text-white">1. Information We Collect</h2>
                <p>We collect information you provide directly to us, such as your name, email, phone number, company, and message when you fill out our contact or demo request forms. We also collect usage data when you visit our website.</p>
                <h2 className="text-xl font-bold text-ops-black dark:text-white">2. How We Use Your Information</h2>
                <p>We use your information to respond to your inquiries, schedule demos, provide our services, and send you relevant updates. We do not sell your data to third parties.</p>
                <h2 className="text-xl font-bold text-ops-black dark:text-white">3. Data Security</h2>
                <p>We implement industry-standard security measures including encrypted data transmission (TLS), encrypted data at rest, role-based access control, and regular security reviews to protect your data.</p>
                <h2 className="text-xl font-bold text-ops-black dark:text-white">4. Data Retention</h2>
                <p>We retain your data only as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time.</p>
                <h2 className="text-xl font-bold text-ops-black dark:text-white">5. Your Rights</h2>
                <p>You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at opsloom.ke@gmail.com.</p>
                <h2 className="text-xl font-bold text-ops-black dark:text-white">6. Contact</h2>
                <p>For privacy-related questions, contact us at opsloom.ke@gmail.com.</p>
              </div>
            ) : (
              <div className="space-y-6 text-base text-ops-gray-600 dark:text-ops-gray-300 leading-relaxed">
                <h2 className="text-xl font-bold text-ops-black dark:text-white">1. Acceptance of Terms</h2>
                <p>By accessing and using Opsloom's website and services, you accept and agree to be bound by these Terms of Service.</p>
                <h2 className="text-xl font-bold text-ops-black dark:text-white">2. Services</h2>
                <p>Opsloom provides manufacturing digital transformation services including software development, AI integration, maintenance management systems, and consulting. Specific service terms are defined in individual project agreements.</p>
                <h2 className="text-xl font-bold text-ops-black dark:text-white">3. Intellectual Property</h2>
                <p>All custom software developed by Opsloom for a client is the intellectual property of that client upon full payment, unless otherwise agreed in writing.</p>
                <h2 className="text-xl font-bold text-ops-black dark:text-white">4. Confidentiality</h2>
                <p>Both parties agree to keep confidential all proprietary information shared during the course of engagement.</p>
                <h2 className="text-xl font-bold text-ops-black dark:text-white">5. Limitation of Liability</h2>
                <p>Opsloom's liability is limited to the value of the services provided. We are not liable for indirect, incidental, or consequential damages.</p>
                <h2 className="text-xl font-bold text-ops-black dark:text-white">6. Contact</h2>
                <p>For questions about these terms, contact us at opsloom.ke@gmail.com.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
