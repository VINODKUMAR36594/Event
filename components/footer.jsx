import { Instagram, Mail, Twitter, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800/50 py-8 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-6 text-sm text-gray-400">
        Made with ❤️ for Event Organizing
      </div>

      <div className="flex gap-4 items-center">
        <div className="text-gray-400">
          <Youtube />
        </div>
        <div className="text-gray-400">
          <Instagram className="w-5 h-5" />
        </div>
        <div className="text-gray-400">
          <Twitter className="w-5 h-5" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
