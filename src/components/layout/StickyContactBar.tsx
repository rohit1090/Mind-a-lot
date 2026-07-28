const WHATSAPP_URL = "https://wa.me/919606258596";

export function StickyContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brand/10 bg-cream/95 backdrop-blur-sm sm:hidden">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-5 py-3">
        <p className="min-w-0 truncate text-xs text-text-muted sm:text-sm">
          Talk to a counsellor &middot; 100% anonymous
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with a counsellor on WhatsApp"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0">
            <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.2.2-.4.1-.1 0-.3 0-.4-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9 0 1.1.8 2.2.9 2.4.1.2 1.6 2.4 3.8 3.4.5.2 1 .4 1.3.5.5.2 1 .1 1.4.1.4-.1 1.5-.6 1.7-1.2.2-.6.2-1 .1-1.1-.1-.1-.2-.2-.4-.3z" />
          </svg>
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
