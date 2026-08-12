/** Very subtle decorative background: soft blue glows + faint paw pattern. */
export function PawBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="paw-pattern absolute inset-0 opacity-[0.5]" />
      <div className="animate-drift-slow absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="animate-drift-slower absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />
    </div>
  );
}
