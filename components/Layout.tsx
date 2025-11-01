import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => (
  <header className="header container">
    <div>
      <Link href="/"><strong>FlySafe</strong></Link>
    </div>
    <nav className="nav">
      <Link href="/products">Products</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  </header>
);

const Footer: React.FC = () => (
  <footer className="footer container">
    <div>© {new Date().getFullYear()} FlySafe — Flight assurances</div>
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
