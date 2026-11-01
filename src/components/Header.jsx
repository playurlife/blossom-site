// Header = logo on the left, plus a dark contact bar and the main navigation on the right.
import { useState } from 'react';
import { MailIcon, PhoneIcon, SearchIcon, ChevronDown, SocialLink } from './Icons.jsx';

// The menu is stored as data, so adding a link means adding one line here.
const NAV_ITEMS = [
  { label: 'Home', hasMenu: true },
  { label: 'About Us' },
  { label: 'Pages', hasMenu: true },
  { label: 'Portfolio', hasMenu: true },
  { label: 'Blog', hasMenu: true },
  { label: 'Contact' },
];

function Logo() {
  return (
    <a href="#" className="logo">
      <span className="logo-mark" aria-hidden="true">
        <span className="logo-dot" />
      </span>
      <span className="logo-text">
        <span className="logo-top">Blossom</span>
        <span className="logo-bottom">Business</span>
      </span>
    </a>
  );
}

function TopBar() {
  return (
    <div className="topbar">
      <a href="mailto:mail@blossombusiness.com" className="topbar-item">
        <MailIcon /> mail@blossombusiness.com
      </a>
      <a href="tel:+019876543210" className="topbar-item">
        <PhoneIcon /> +01 987 654 32 10
      </a>
      <div className="topbar-social">
        <SocialLink label="Facebook">f</SocialLink>
        <SocialLink label="Google">G+</SocialLink>
        <SocialLink label="LinkedIn">in</SocialLink>
        <SocialLink label="Twitter">t</SocialLink>
      </div>
      <button className="topbar-lang">
        <span className="flag" aria-hidden="true" /> English <ChevronDown />
      </button>
      <button className="search-btn" aria-label="Search">
        <SearchIcon />
      </button>
    </div>
  );
}

export default function Header() {
  // "state" = data that can change. Here it remembers which menu item is active.
  const [active, setActive] = useState('Home');

  return (
    <header className="header">
      <Logo />
      <div className="header-right">
        <TopBar />
        <nav className="nav">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href="#"
              className={item.label === active ? 'nav-link active' : 'nav-link'}
              onClick={(e) => {
                e.preventDefault();
                setActive(item.label);
              }}
            >
              {item.label}
              {item.hasMenu && <ChevronDown />}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
