import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Contact
        </h2>
        <p className="text-gray-700 text-base md:text-lg">
          Hubungi saya melalui email:{' '}
          <a href="mailto:emailkamu@example.com" className="text-blue-500 hover:underline">
            emailkamu@example.com
          </a>
        </p>
      </div>
    </section>
  );
};
export default Contact