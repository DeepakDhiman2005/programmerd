"use client";

const ShippingAndDelivery = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-600">
        Shipping & Delivery Policy
      </h1>

      <section className="space-y-6">
        <p>
          At <strong>Programmerd</strong>, we primarily deliver digital services and solutions,
          including websites, CRMs, custom-coded tools, and online course content. This policy outlines
          the delivery process and timelines associated with these digital offerings.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-500 mt-6">
          1. Delivery of Digital Products & Services
        </h2>
        <p>
          All digital services and products (e.g., code, web apps, CRMs, tutorials) are delivered electronically
          via email, secure links, or through client dashboards. No physical shipping is required.
        </p>

        <ul className="list-disc list-inside ml-4">
          <li>💻 Course access is granted immediately upon successful payment.</li>
          <li>🛠️ Custom projects are delivered as per the project timeline discussed during onboarding.</li>
          <li>📦 Source files, documentation, and credentials (if applicable) are shared securely via email or private repository.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-500 mt-6">
          2. Delivery Timelines
        </h2>
        <p>
          Timelines may vary based on the type of service:
        </p>

        <ul className="list-disc list-inside ml-4">
          <li>✅ Online courses: Immediate access.</li>
          <li>⚙️ Project-based work: 7–30 business days depending on complexity and scope.</li>
          <li>📁 Revision requests: 2–5 business days depending on the update.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-500 mt-6">
          3. Delays & Exceptions
        </h2>
        <p>
          In rare cases, project delivery may be delayed due to technical issues, incomplete requirements
          from the client, or unforeseen development challenges. We will proactively communicate any delays
          and work toward timely resolution.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-500 mt-6">
          4. Contact Us
        </h2>
        <p>
          For delivery-related queries or updates, please contact us:
          <br />
          📧 <a href="mailto:support@programmerd.com" className="text-blue-600 underline">support@programmerd.com</a>
        </p>
      </section>
    </main>
  );
};

export default ShippingAndDelivery;
