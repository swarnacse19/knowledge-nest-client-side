import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12 md:px-20">
      <div className="space-y-10">

        <section>
          <h2 className="text-3xl font-semibold mb-2 text-indigo-600 text-center">Welcome to KnowledgeNest!</h2>
          <p className="text-lg leading-relaxed">
            KnowledgeNest is a student-driven platform where learning meets collaboration. Here, students can freely share their thoughts, write informative articles, and engage in meaningful discussions with peers. We believe that everyone has something valuable to contribute.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-indigo-600">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            To build a supportive, secure, and engaging community where students can express ideas, learn from each other, and grow together through knowledge sharing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-indigo-600">What We Offer</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>📚 Article Posting – Share your ideas, research, or reflections.</li>
            <li>💬 Commenting – Engage in thoughtful discussions.</li>
            <li>🔐 Private Dashboard – Manage your own content easily.</li>
            <li>🌐 Browse All Articles – Discover what others are sharing.</li>
            <li>📱 Fully Responsive – Use it anywhere, on any device.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-indigo-600">Who It's For</h2>
          <p className="text-lg leading-relaxed">
            This platform is for college and university students who want to express themselves, share what they know, and learn from others in a safe, respectful space.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-indigo-600">Why “KnowledgeNest”?</h2>
          <p className="text-lg leading-relaxed">
            Just like a nest nurtures young birds, KnowledgeNest nurtures ideas. It's a safe and warm place where your thoughts can grow, evolve, and take flight.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-indigo-600">Get Involved</h2>
          <p className="text-lg leading-relaxed">
            Ready to share your thoughts? Join our community today. Let your voice be heard and be a part of a growing network of learners and thinkers.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
