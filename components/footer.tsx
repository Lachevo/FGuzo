"use client"

import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/primary-logo-colored.png" alt="FastGuzo logo" className="h-16 block" />
            <div className="mt-3 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor">
                <path d="M12 2l3 3 5 1-1 5 3 3-3 3-3 1-2 3-2-3-3-1-3-3 3-3-1-5 5-1 3-3z" strokeWidth=".8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <a href="#certification" className="text-sm text-slate-700 hover:text-blue-600">Certified by Canada Immigration Office</a>
            </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Call or email us today to schedule a free consultation. Let us discuss your goals and how we can make them
              a reality.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-blue-50 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.9.36 1.76.72 2.58a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.5-1.5a2 2 0 0 1 2.11-.45c.82.36 1.68.6 2.58.72A2 2 0 0 1 22 16.92z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>0928929394</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-blue-50 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.9.36 1.76.72 2.58a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.5-1.5a2 2 0 0 1 2.11-.45c.82.36 1.68.6 2.58.72A2 2 0 0 1 22 16.92z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>0952434344</span>
              </div>

              <div className="flex items-center gap-3">
                <a href="mailto:Fastguzoglobalservice@gmail.com" className="flex items-center gap-3 text-slate-600 hover:text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor">
                    <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 8l-10 7L2 8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Fastguzoglobalservice@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                Home
              </a>
              <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors">
                About Us
              </a>
              <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors">
                Contact Us
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Follow Us</h4>
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a href="https://facebook.com" aria-label="Facebook" className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition transform hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-100 shadow-sm">
                <img src="/images/face.png" alt="Facebook" className="w-6 h-6 object-contain" />
              </a>

              {/* Twitter */}
              <a href="https://twitter.com" aria-label="Twitter" className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition transform hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-100 shadow-sm">
                <img src="/images/twitter.png" alt="Twitter" className="w-6 h-6 object-contain" />
              </a>

              {/* Instagram */}
              <a href="https://instagram.com" aria-label="Instagram" className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition transform hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-100 shadow-sm">
                <img src="/images/insta.png" alt="Instagram" className="w-6 h-6 object-contain" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8">
          {/* Newsletter / small subscribe form */}
          <div className="max-w-2xl mx-auto mb-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!email) return;
                setSubscribed(true);
                setEmail("");
                setTimeout(() => setSubscribed(false), 3500);
              }}
              className="flex gap-2 items-center justify-center"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-3 py-2 border border-slate-200 rounded-md w-64 md:w-80 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                aria-label="Email for newsletter"
              />
              <button className="px-3 py-2 bg-blue-600 text-white rounded-md text-sm hover:brightness-95 transition" type="submit">
                Subscribe
              </button>
            </form>
            {subscribed && <p className="text-center text-sm text-green-600 mt-2">Thanks — you are subscribed!</p>}
          </div>

          <p className="text-center text-slate-600 text-sm">© 2025 FastGuzo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
