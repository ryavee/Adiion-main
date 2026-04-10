import React, { useEffect } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';
import contactBanner from '../../images/contact.jpg';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="font-[Segoe_UI,Tahoma,Geneva,Verdana,sans-serif] text-[#333] pb-[60px]"
      style={{
        backgroundColor: '#f7f9fc',
        backgroundImage: 'radial-gradient(#dfe6f1 1px, transparent 1px)',
        backgroundSize: '20px 20px',
      }}
    >
      {/* Banner Section */}
      <section
        className="relative h-[65vh] flex items-center justify-center text-center text-white mb-[60px]"
        style={{
          backgroundImage: `url(${contactBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/[0.45] z-[1]" />

        {/* Banner Text */}
        <div className="relative z-[2] px-10 py-10 rounded-xl max-w-[800px] w-[90%]">
          <h2
            className="text-[2.6rem] font-bold mb-[15px]"
            style={{ textShadow: '0 2px 6px rgba(0,0,0,0.4)' }}
          >
            Why Contact Us?
          </h2>
          <p
            className="text-[1.2rem] leading-[1.6] font-normal text-[#eaeaea]"
            style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
          >
            We're here to help you with your tech needs, business queries, or collaborations.
            <br />
            Let's build something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-5 max-w-[1200px] mx-auto py-[60px]" id="contact">
        <div className="flex flex-col gap-10">

          {/* Row: Form + Info */}
          <div className="flex flex-wrap gap-10 justify-center">

            {/* Left - Contact Form */}
            <div className="flex-1 min-w-[300px] max-w-[500px] bg-white rounded-xl px-[25px] py-[30px] shadow-[0_10px_32px_rgba(0,0,0,0.3)]">
              <h3 className="text-[1.7rem] text-[#15157d] font-bold mb-5">Send Us a Message</h3>
              <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>

                <label className="font-semibold text-black" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  required
                  className="px-3 py-3 text-[1rem] border border-[#ccc] rounded-md bg-white w-full transition-all duration-200 focus:outline-none focus:border-[#15157d] focus:shadow-[0_0_0_2px_rgba(21,21,125,0.15)]"
                />

                <label className="font-semibold text-black" htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  className="px-3 py-3 text-[1rem] border border-[#ccc] rounded-md bg-white w-full transition-all duration-200 focus:outline-none focus:border-[#15157d] focus:shadow-[0_0_0_2px_rgba(21,21,125,0.15)]"
                />

                <label className="font-semibold text-black" htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  placeholder="Write your message..."
                  rows="5"
                  required
                  className="px-3 py-3 text-[1rem] border border-[#ccc] rounded-md bg-white w-full transition-all duration-200 focus:outline-none focus:border-[#15157d] focus:shadow-[0_0_0_2px_rgba(21,21,125,0.15)]"
                ></textarea>

                <button
                  type="submit"
                  className="self-start flex items-center gap-2 bg-[#15157d] text-white px-6 py-2.5 text-[1rem] border-none rounded-md cursor-pointer transition-all duration-300 hover:bg-[#0f0f63] hover:scale-105"
                >
                  <MdSend className="text-[1rem]" /> Send Message
                </button>
              </form>
            </div>

            {/* Right - Contact Info + Map */}
            <div className="flex-1 min-w-[300px] max-w-[500px] bg-white rounded-xl px-[25px] py-[30px] shadow-[0_10px_32px_rgba(0,0,0,0.3)]">
              <h3 className="text-[1.7rem] text-[#15157d] font-bold mb-5">Our Office</h3>

              <p className="flex items-start gap-3 mb-[18px] text-[1rem] font-medium text-[#333] leading-[1.6]">
                <FaMapMarkerAlt className="text-[1.3rem] text-[#15157d] min-w-[22px] mt-[3px]" />
                73C, 74C, 2nd Floor, S Park St, Secretariat Colony, Venkatapuram
                Ambattur, Chennai, Tamil Nadu, IN 600053
              </p>

              <p className="flex items-start gap-3 mb-[18px] text-[1rem] font-medium text-[#333] leading-[1.6]">
                <FaEnvelope className="text-[1.3rem] text-[#15157d] min-w-[22px] mt-[3px]" />
                info@adiion.com
              </p>

              <p className="flex items-start gap-3 mb-[18px] text-[1rem] font-medium text-[#333] leading-[1.6]">
                <FaPhoneAlt className="text-[1.3rem] text-[#15157d] min-w-[22px] mt-[3px]" />
                +91-7029395817
              </p>

              {/* Map */}
              <div className="mt-5 rounded-xl overflow-hidden shadow-[0_6px_18px_rgba(0,0,0,0.25)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.6810550783025!2d80.14853247321275!3d13.119380411624856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52637f41897ffd%3A0x261f50bf454406e4!2sAdiion%20Digital%20Labs%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1756580203816!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Adiion Office Location"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;