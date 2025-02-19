import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          About Me
        </h2>
        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          [Tulis deskripsi singkat tentang diri kamu, latar belakang,
          keterampilan, dan minat. Buat beberapa paragraf agar terlihat bagus.]
        </p>
      </div>
    </section>
  );
};
export default About;