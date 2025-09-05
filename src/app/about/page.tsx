// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-green-900 mb-8 text-center">
        About Us
      </h1>

      {/* History Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our History</h2>
        <p className="text-gray-600 leading-relaxed">
          Organo Choice Global Limited was established with a commitment to
          provide natural, high-quality extracts that promote health and
          wellness. Over the years, our dedication to excellence and innovation
          has helped us build a trusted reputation in the extracts industry.
        </p>
      </section>

      {/* Vision Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
        <p className="text-gray-600 leading-relaxed">
          To be a leading global brand in natural extracts, trusted for our
          integrity, quality, and impact on healthier living.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          Our mission is to harness the power of nature through innovative
          extraction processes, delivering safe and effective products that
          improve lives while upholding sustainability and ethical practices.
        </p>
      </section>

      {/* Closing Statement */}
      <div className="bg-green-50 border-l-4 border-green-700 p-6 rounded-lg shadow-sm">
        <p className="text-green-900 font-medium text-lg">
          At Organo Choice, we believe in a healthier future powered by natural
          solutions.
        </p>
      </div>
    </div>
  );
}
