import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t mt-12 py-6">
      <div className="container text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Neehal Raj Gupta — Built with React + Tailwind
      </div>
    </footer>
  )
}
