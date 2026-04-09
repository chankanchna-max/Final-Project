import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaTelegramPlane,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white py-12 px-6 md:px-16 font-sans border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="text-lg font-bold tracking-wide">Company</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Cinemas</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold tracking-wide">More</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Promotions</li>
              <li>News & Activity</li>
              <li>My Ticket</li>
              <li>Terms & Conditions</li>
              <li>Privacy & Policy</li>
            </ul>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-lg font-bold mb-4 tracking-wide">
                Download Our App
              </h3>
              <div className="flex gap-4">
                <div className="p-2.5 border border-gray-700 rounded-full">
                  <FaGooglePlay size={18} />
                </div>
                <div className="p-2.5 border border-gray-700 rounded-full">
                  <FaApple size={18} />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 tracking-wide">
                Follow Our Social Media
              </h3>
              <div className="flex gap-3">
                {[
                  FaFacebookF,
                  FaInstagram,
                  FaYoutube,
                  FaTiktok,
                  FaTelegramPlane,
                ].map((Icon, i) => (
                  <div
                    key={i}
                    className="p-2.5 border border-gray-700 rounded-full"
                  >
                    <Icon size={16} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <h3 className="text-lg font-bold mb-6 tracking-wide text-white">
            Payment
          </h3>
          <div className="flex items-center gap-10">
            <img
              className="h-12 object-contain"
              src="https://www.legend.com.kh/aba-payway-logo.png"
              alt="ABA Payway"
            />
            <img
              className="h-5 object-contain"
              src="https://www.legend.com.kh/visa-logo.png"
              alt="Visa"
            />
            <img
              className="h-8 object-contain"
              src="https://www.legend.com.kh/mastercard-logo.png"
              alt="Mastercard"
            />
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs">All right reserved © 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
