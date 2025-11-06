"use client"

import { useState } from "react";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="mb-2 w-64 md:w-80 bg-white rounded-lg shadow-lg p-4 text-sm text-slate-700">
          <div className="flex items-center justify-between mb-2">
            <strong>Contact FastGuzo</strong>
            <button onClick={() => setOpen(false)} aria-label="Close" className="text-slate-400 hover:text-slate-700">✕</button>
          </div>
          <div className="space-y-2">
            <a href="tel:0928929394" className="block text-slate-700 hover:text-blue-600">Call: 0928929394</a>
            <a href="tel:0952434344" className="block text-slate-700 hover:text-blue-600">Call: 0952434344</a>
            <a href="mailto:Fastguzoglobalservice@gmail.com" className="block text-slate-700 hover:text-blue-600">Email: Fastguzoglobalservice@gmail.com</a>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((s) => !s)}
        aria-label="Contact FastGuzo"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="currentColor" d="M21 8V7l-3 2-2-1-4 3V5l-3 2v10l3-2 4 3 3-2 2 1V8z" />
        </svg>
      </button>
    </div>
  );
}
