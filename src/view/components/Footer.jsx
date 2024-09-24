import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:text-gray-400 transition-colors">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/careers" className="hover:text-gray-400 transition-colors">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="/blog" className="hover:text-gray-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/features" className="hover:text-gray-400 transition-colors">
                  Features
                </a>
              </li>
              <li className="mb-2">
                <a href="/pricing" className="hover:text-gray-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li className="mb-2">
                <a href="/support" className="hover:text-gray-400 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">123 CRM Street, Suite 100</p>
            <p className="mb-2">City, State, 12345</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Email: support@crmplatform.com</p>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-400">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-400">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-400">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-400">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-sm">
            &copy; 2024 CRM Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
