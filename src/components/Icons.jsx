// Small inline SVG icons, so the project needs no icon library.
// Each one uses "currentColor", so it takes the text color of its parent.

export const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const PhoneIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.6a1 1 0 01-.25 1z" />
  </svg>
);

export const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-4-4" strokeLinecap="round" />
  </svg>
);

export const ChevronDown = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M15 6l-6 6 6 6" />
  </svg>
);

export const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M9 6l6 6-6 6" />
  </svg>
);

export const GearIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.4 13a7.6 7.6 0 000-2l2.1-1.6-2-3.5-2.5 1a7.4 7.4 0 00-1.7-1L15 3h-4l-.4 2.9a7.4 7.4 0 00-1.7 1l-2.5-1-2 3.5L6.6 11a7.6 7.6 0 000 2l-2.1 1.6 2 3.5 2.5-1a7.4 7.4 0 001.7 1L11 21h4l.4-2.9a7.4 7.4 0 001.7-1l2.5 1 2-3.5zM13 15.5A3.5 3.5 0 1116.5 12 3.5 3.5 0 0113 15.5z" />
  </svg>
);

// Simple text-style social marks (swap for official brand icons later)
export const SocialLink = ({ label, children }) => (
  <a href="#" aria-label={label} className="social-link">
    {children}
  </a>
);
