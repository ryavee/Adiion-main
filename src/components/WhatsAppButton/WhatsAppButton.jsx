import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppButton = () => {
  return (
   <a
  href="https://wa.me/917029395817"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with us on WhatsApp"
  className="fixed bottom-4 right-4 rounded-xl transition-all duration-300 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-400 via-[#25D366] to-green-700 hover:scale-110"
>
  <BsWhatsapp className="w-9 h-9 sm:w-10 sm:h-10 text-white" />
</a>

  );
};

export default WhatsAppButton;
