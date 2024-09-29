import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Image
          src="/images/kenny_logo.png"
          alt="logo"
          width={200}
          height={40}
        />
        <p className="text-slate-600">© 2024 Kenny Li. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
