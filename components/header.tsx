"use client"

import { Phone, Menu } from "lucide-react"
import { useState } from "react"
import { useCallback } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("Home")

  const scrollTo = useCallback((e: React.MouseEvent, id: string, linkName: string) => {
    e.preventDefault()
    setActiveLink(linkName)
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Left Side - Logo and Navigation Links */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => scrollTo(e, "top", "Home")}
            className="flex items-center no-underline"
            aria-label="FastGuzo Home"
          >
            <img
              src="/images/primary-logo-colored.png"
              alt="FastGuzo Logo"
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              onClick={(e) => scrollTo(e, "top", "Home")}
              className={`text-base font-medium transition-colors ${
                activeLink === "Home" ? "text-blue-600" : "text-slate-800"
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => scrollTo(e, "about", "About Us")}
              className={`text-base font-medium transition-colors ${
                activeLink === "About Us" ? "text-blue-600" : "text-slate-800"
              }`}
            >
              About Us
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "contact", "Contact")}
              className={`text-base font-medium transition-colors ${
                activeLink === "Contact" ? "text-blue-600" : "text-slate-800"
              }`}
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <Menu size={24} className="text-slate-900" />
        </button>

        {/* Right Side - Call to Action */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <p className="text-xs text-slate-500">Call us now!</p>
              <a href="tel:+251953535348" className="text-base font-bold text-slate-800 hover:text-blue-600 transition-colors">
                +251953535348
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-4 space-y-4">
          <a
            href="#"
            onClick={(e) => {
              scrollTo(e, "top", "Home")
              setIsOpen(false)
            }}
            className={`block text-base font-medium transition-colors ${
              activeLink === "Home" ? "text-blue-600" : "text-slate-800"
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => {
              scrollTo(e, "about", "About Us")
              setIsOpen(false)
            }}
            className={`block text-base font-medium transition-colors ${
              activeLink === "About Us" ? "text-blue-600" : "text-slate-800"
            }`}
          >
            About Us
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              scrollTo(e, "contact", "Contact")
              setIsOpen(false)
            }}
            className={`block text-base font-medium transition-colors ${
              activeLink === "Contact" ? "text-blue-600" : "text-slate-800"
            }`}
          >
            Contact
          </a>
          <div className="flex items-center gap-3 pt-2">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-xs text-slate-500">Call us now!</p>
              <a href="tel:+251953535348" className="text-base font-bold text-slate-800">
                +251953535348
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
