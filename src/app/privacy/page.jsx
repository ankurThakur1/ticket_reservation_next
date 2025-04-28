import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-28">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-600 py-3 text-center relative z-10">
        Privacy{" "}
        <span className="
            relative text-white
            before:content-[''] before:absolute before:-top-1 before:-left-2
            before:w-full before:h-full
            before:bg-[orangered] before:-z-10 before:rounded-[5px] before:skew-x-[-20deg]
            before:px-14 before:py-5
            sm:before:px-16 sm:before:py-6
            sm:before:-top-1 sm:before:-left-3
            md:before:px-20 md:before:py-8
          "
        >
          Policy
        </span>
      </h2>

      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-600">Introduction</h2>
          <p className="text-lg text-gray-700">
            Welcome to AeroHaven! Your privacy is of paramount importance to us.
            This privacy policy outlines the types of information we collect, how
            we use it, and the steps we take to protect your personal data.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-600">Information We Collect</h2>
          <p className="text-lg text-gray-700">
            We collect several types of information to provide and improve our
            services to you:
          </p>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            <li>Personal identification information (name, email, phone number, etc.)</li>
            <li>Booking and payment information (flight details, payment method)</li>
            <li>Usage data (such as IP addresses, browser type, etc.)</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-600">How We Use Your Information</h2>
          <p className="text-lg text-gray-700">
            We use the information we collect for various purposes:
          </p>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            <li>To process and manage flight bookings and payments</li>
            <li>To provide customer support and assistance</li>
            <li>To improve our website and services</li>
            <li>To send promotional emails and updates, with your consent</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-600">How We Protect Your Information</h2>
          <p className="text-lg text-gray-700">
            We take the security of your personal data seriously. We use a variety
            of security measures to protect your data, including encryption and
            secure servers. We also comply with industry standards and regulations.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-600">Third-Party Services</h2>
          <p className="text-lg text-gray-700">
            We do not sell or share your personal data with third parties without
            your consent. However, we may share data with trusted third-party
            service providers to perform services on our behalf (e.g., payment
            processing). These providers are obligated to protect your data and
            only use it for the services they provide.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-600">Cookies</h2>
          <p className="text-lg text-gray-700">
            Our website uses cookies to enhance your experience. Cookies are small
            files stored on your device that help us remember your preferences and
            track website usage. You can manage your cookie settings through your
            browser.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-600">Your Rights</h2>
          <p className="text-lg text-gray-700">
            You have the right to:
          </p>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            <li>Access, update, or delete your personal data</li>
            <li>Request a copy of your personal data</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-600">Changes to This Privacy Policy</h2>
          <p className="text-lg text-gray-700">
            We may update this privacy policy from time to time. Any changes will
            be posted on this page, and we will notify you of any significant
            changes via email.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-600">Contact Us</h2>
          <p className="text-lg text-gray-700">
            If you have any questions about this privacy policy or your personal
            data, please contact us at:
          </p>
          <p className="text-lg text-gray-700">
            Email: <a href="mailto:examplesupport@aerohaven.com" className="text-orange-600">support@aerohaven.com</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
