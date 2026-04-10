import React, { useEffect } from 'react';
import careerBanner from './career-banner.jpg';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-[Segoe_UI,Tahoma,Geneva,Verdana,sans-serif] m-0 p-0">

      {/* Banner Section */}
      <div
        className="relative h-[70vh] w-full flex items-center justify-center text-center text-white px-5"
        style={{
          backgroundImage: `url(${careerBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 z-[1]" />

        {/* Overlay Text */}
        <div className="relative z-[2] max-w-[800px] px-10 py-5 rounded-xl text-center">
          <h1
            className="text-[2.8rem] md:text-[2rem] font-medium text-white mb-2.5"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}
          >
            Join Our Team at Adiion
          </h1>
          <p
            className="text-[1.2rem] md:text-[1rem] text-[#ddd] font-medium"
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
          >
            Innovate. Collaborate. Grow with us.
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <section className="w-full py-[60px] px-5 bg-[#f0f4ff]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center text-[2.4rem] text-[#15157d] mb-[30px]">
            Welcome to Adiion Careers
          </h2>
          <p className="text-[1.05rem] text-[#0a0a0a] leading-[1.6] mb-3">
            We're on a mission to deliver cutting-edge solutions in SaaS, IT, BPO, Cybersecurity, and AI Automation.
            Whether you're a developer, designer, marketer, or customer support professional — there's a place for you here.
            Grow your career while shaping the future of technology.
          </p>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="w-full py-[60px] px-5 bg-[#fff8e1]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center text-[2.4rem] text-[#15157d] mb-[30px]">
            Why Work With Us
          </h2>
          <ul className="pl-5 list-disc">
            <li className="text-[1.05rem] text-[#0a0a0a] leading-[1.6] mb-3">
              <strong>Innovative Projects:</strong> Build next-gen SaaS platforms, automation tools, and enterprise software.
            </li>
            <li className="text-[1.05rem] text-[#0a0a0a] leading-[1.6] mb-3">
              <strong>Career Growth:</strong> Learn from experts, gain certifications, and explore multiple career paths.
            </li>
            <li className="text-[1.05rem] text-[#0a0a0a] leading-[1.6] mb-3">
              <strong>Flexible Work Culture:</strong> Remote-friendly, inclusive, and collaborative environment.
            </li>
          </ul>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="w-full py-[60px] px-5 bg-[#e8fff1]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center text-[2.4rem] text-[#15157d] mb-[30px]">
            We're Hiring – Explore Open Positions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[30px]">

            <div className="bg-white rounded-xl shadow-[0_6px_16px_rgba(0,0,0,0.08)] p-5 transition-transform duration-300 hover:-translate-y-[5px]">
              <h3 className="text-[1.2rem] text-[#0a0a0a] font-semibold mb-2.5">Software Developer</h3>
              <p className="text-[#555] text-[1rem] leading-[1.5] mb-2.5"><strong>Location:</strong> Remote / Chennai</p>
              <p className="text-[#555] text-[1rem] leading-[1.5] mb-2.5"><strong>Experience:</strong> 2+ Years</p>
              <p className="text-[#555] text-[1rem] leading-[1.5] mb-2.5">Work with Python, Node.js, or React to build robust SaaS and BPO platforms.</p>
              <p className="text-[#555] text-[1rem] leading-[1.5] mb-2.5"><strong>Apply:</strong> hr@adiion.com</p>
            </div>

            <div className="bg-white rounded-xl shadow-[0_6px_16px_rgba(0,0,0,0.08)] p-5 transition-transform duration-300 hover:-translate-y-[5px]">
              <h3 className="text-[1.2rem] text-[#0a0a0a] font-semibold mb-2.5">Digital Marketing Specialist</h3>
              <p className="text-[#555] text-[1rem] leading-[1.5] mb-2.5"><strong>Location:</strong> Remote</p>
              <p className="text-[#555] text-[1rem] leading-[1.5] mb-2.5"><strong>Experience:</strong> 1–3 Years</p>
              <p className="text-[#555] text-[1rem] leading-[1.5] mb-2.5">Plan, execute, and optimize digital campaigns for B2B SaaS, outsourcing, and research clients.</p>
              <p className="text-[#555] text-[1rem] leading-[1.5] mb-2.5"><strong>Apply:</strong> hr@adiion.com</p>
            </div>

            <div className="bg-white rounded-xl shadow-[0_6px_16px_rgba(0,0,0,0.08)] p-5 transition-transform duration-300 hover:-translate-y-[5px]">
              <h3 className="text-[1.2rem] text-[#0a0a0a] font-semibold mb-2.5">Human Resources Executive</h3>
              <p className="text-[#555] text-[1rem] leading-[1.5] mb-2.5"><strong>Location:</strong> Remote / Chennai</p>
              <p className="text-[#555] text-[1rem] leading-[1.5] mb-2.5"><strong>Experience:</strong> 2–4 Years</p>
              <p className="text-[#555] text-[1rem] leading-[1.5] mb-2.5">Manage recruitment, onboarding, employee engagement, and HR operations. Support team growth and uphold company culture across remote and on-site teams.</p>
              <p className="text-[#555] text-[1rem] leading-[1.5] mb-2.5"><strong>Apply:</strong> hr@adiion.com</p>
            </div>

          </div>
        </div>
      </section>

      {/* Open Call Section */}
      <section className="w-full py-[60px] px-5 bg-[#fef3f3]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center text-[2.4rem] text-[#15157d] mb-[30px]">
            We're Always Hiring Passionate People
          </h2>
          <p className="text-[1.05rem] text-[#0a0a0a] leading-[1.6] mb-3">
            Didn't find a role that fits your profile? Share your resume with us at <strong>hr@adiion.com</strong> and we'll get in touch when something suitable comes up.
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="w-full py-[60px] px-5 bg-[#f1f1f1]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-center text-[2.4rem] text-[#15157d] mb-[30px]">
            Life at Adiion
          </h2>
          <p className="text-[1.05rem] text-[#0a0a0a] leading-[1.6] mb-3">
            We believe in teamwork, transparency, and continuous improvement.
            Whether remote or in-office, we ensure everyone has access to mentorship, collaboration tools, and learning opportunities.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Careers;