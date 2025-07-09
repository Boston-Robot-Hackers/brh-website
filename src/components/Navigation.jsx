const Navigation = ({ links }) => (
  <nav className="sticky top-0 z-20 backdrop-blur-md bg-nav shadow-sm">
    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[var(--blue)] via-[var(--sky)] to-[var(--indigo)]" />
    <ul className="relative flex justify-center space-x-6 md:space-x-10 py-4 font-[Telex] text-base md:text-lg tracking-wide select-none">
      {links.map(({ href, label }) => (
        <li key={href}>
          <a
            href={href}
            className="relative inline-block px-1 transition-colors duration-200 hover:text-[var(--blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]"
          >
            {label}
            <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-current transition-all duration-300 group-hover:w-full" />
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
