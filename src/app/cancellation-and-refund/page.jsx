"use client";

const CancellationAndRefund = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-600">
        Cancellation & Refund Policy
      </h1>

      <section className="space-y-6">
        <p>
          At <strong>Programmerd</strong>, we strive to deliver valuable coding education,
          high-quality web solutions, and project-based services. Our Cancellation and Refund
          Policy outlines the terms under which refunds or cancellations may be processed.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-500 mt-6">1. Courses & Digital Products</h2>
        <p>
          Due to the nature of digital content, all course purchases are considered final. Once
          access is granted to learning materials or downloadable content, no refund will be issued.
          Please review course details and previews carefully before purchasing.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-500 mt-6">2. Project & Development Services</h2>
        <p>
          For custom development services (e.g., websites, CRMs, delivery platforms), the cancellation
          or refund policy is as follows:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>📌 Full refund if cancelled before any work has started.</li>
          <li>⚙️ Partial refund if cancelled during early development, minus hours already worked.</li>
          <li>❌ No refund once the project is delivered or near completion.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-500 mt-6">3. Technical Issues or Errors</h2>
        <p>
          If you experience a technical issue (e.g., unable to access course materials), please contact
          us within 48 hours of purchase. We will attempt to resolve the issue or issue a refund if we are
          unable to deliver what was promised.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-500 mt-6">4. Refund Process</h2>
        <p>
          Approved refunds will be processed within 5–7 business days to your original payment method.
          Any applicable transaction or processing fees may be deducted.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-500 mt-6">5. Contact Us</h2>
        <p>
          For any questions or refund requests, reach out to us at:
          <br />
          📧 <a href="mailto:support@programmerd.com" className="text-blue-600 underline">support@programmerd.com</a>
        </p>
      </section>
    </main>
  );
};

export default CancellationAndRefund;
