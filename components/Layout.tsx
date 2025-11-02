import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => (
  <header className="bg-white border-b">
    <div className="container mx-auto px-6 py-4 flex items-center justify-between">
      <div>
        <Link href="/" className="text-xl font-bold text-slate-800">FlySafe</Link>
      </div>
      <nav className="flex items-center gap-4 text-slate-600">
        <Link href="/products" className="hover:text-slate-900">Products</Link>
        <Link href="/contact" className="hover:text-slate-900">Contact</Link>
      </nav>
    </div>
  </header>
);

const Footer: React.FC = () => (
  <footer className="mt-12 border-t bg-slate-50">
    <div className="container mx-auto px-6 py-6 text-sm text-slate-600">© {new Date().getFullYear()} FlySafe — Flight assurances</div>
  </footer>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
