const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition duration-300 ease-out hover:scale-[1.03] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60';

const sizes = {
  md: 'px-5 py-3 text-[15px]',
  sm: 'px-3.5 py-2 text-sm',
};

const variants = {
  // accent-solid / accent-on are paired in index.css for at least 4.5:1 text contrast.
  primary: 'bg-accent-solid text-accent-on shadow-glow hover:brightness-110',
  secondary: 'border border-line bg-surface/70 text-fg hover:border-accent/50 hover:text-accent',
};

// Renders a link when `href` is given, otherwise a button.
export default function Button({ href, external = false, variant = 'primary', size = 'md', className = '', children, ...rest }) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {children}
        {external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
