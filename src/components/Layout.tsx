import React, { ReactNode, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaBars, FaTimes } from 'react-icons/fa';

type NavItem = { href: string; label: string };

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems: NavItem[] = useMemo(
    () => [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/skills', label: 'Skills' },
      { href: '/blog', label: 'Blog' },
    ],
    []
  );

  const isActive = (href: string) => {
    if (href === '/') return router.pathname === '/';
    return router.pathname.startsWith(href);
  };

  return (
    <div className="site" id="top">
      <header className="site-header">
        <div className="container header-row">
          <Link href="/" className="brand" aria-label="Go to home">
            <span className="brand__dot" aria-hidden="true" />
            <span className="brand__text">Portfolio</span>
          </Link>

          <nav className="nav" aria-label="Primary">
            <button
              type="button"
              className="nav__toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>

            <ul className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
              {navItems.map((item) => (
                <li key={item.href} className="nav__item">
                  <Link
                    href={item.href}
                    className={`nav__link ${isActive(item.href) ? 'nav__link--active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer">
        <div className="container footer-row">
          <p className="footer-text">© {new Date().getFullYear()} • Built with Next.js</p>
          <div className="footer-links">
            <a className="footer-link" href="#top">
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
