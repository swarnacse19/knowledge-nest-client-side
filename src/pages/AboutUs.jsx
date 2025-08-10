import React from 'react';
import { FaRegCommentDots } from 'react-icons/fa';
import { FaMobileScreen } from 'react-icons/fa6';
import { MdLibraryBooks } from 'react-icons/md';
import { SiGnuprivacyguard } from 'react-icons/si';
import { TbWorld } from 'react-icons/tb';

const AboutUs = () => {
  return (
    <div className="mx-auto rounded-2xl bg-gray-50 text-black px-14 py-12 md:px-20 my-20">
      <div className="space-y-10">

        <section>
          <h2 className="text-3xl font-semibold mb-4 text-center">Welcome to KnowledgeNest!</h2>
          <p className="text-[16px] text-gray-600">
            KnowledgeNest is a student-driven platform where learning meets collaboration. Here, students can freely share their thoughts, write informative articles, and engage in meaningful discussions with peers. We believe that everyone has something valuable to contribute.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-[16px] text-gray-600">
            To build a supportive, secure, and engaging community where students can express ideas, learn from each other, and grow together through knowledge sharing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
          <ul className=" text-gray-600 text-[16px] space-y-2">
            <li className='flex gap-2 items-center'><MdLibraryBooks color='black' size={24}/> Article Posting - Share your ideas, research, or reflections.</li>
            <li className='flex gap-2 items-center'><FaRegCommentDots color='black' size={24}/> Commenting - Engage in thoughtful discussions.</li>
            <li className='flex gap-2 items-center'><SiGnuprivacyguard color='black' size={24}/> Private Dashboard - Manage your own content easily.</li>
            <li className='flex gap-2 items-center'><TbWorld color='black' size={24}/> Browse All Articles - Discover what others are sharing.</li>
            <li className='flex gap-2 items-center'><FaMobileScreen color='black' size={24}/> Fully Responsive - Use it anywhere, on any device.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
