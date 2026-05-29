const APP_STORE_URL = "https://apps.apple.com/app/spicypick/id0000000000";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.spicypick.app";

export function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={APP_STORE_URL}
        className="group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-black/60 px-5 py-3 transition hover:border-white/30 hover:bg-black/80"
        aria-label="Download on the App Store"
      >
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="currentColor"
          className="text-white"
        >
          <path d="M16.365 1.43c0 1.14-.42 2.22-1.13 3.04-.79.94-2.04 1.66-3.27 1.56-.15-1.12.43-2.31 1.16-3.07.79-.84 2.13-1.47 3.24-1.53zM20.5 17.04c-.53 1.24-.78 1.79-1.46 2.88-.95 1.51-2.3 3.38-3.96 3.4-1.48.01-1.86-.97-3.87-.95-2.01.01-2.42.97-3.9.96-1.67-.02-2.94-1.71-3.89-3.22C.94 16.45.4 11.83 2.36 9.04c1.4-1.99 3.6-3.15 5.67-3.15 2.1 0 3.43.97 5.17.97 1.69 0 2.72-.98 5.16-.98 1.85 0 3.81.99 5.21 2.71-4.58 2.5-3.83 9.04 0 9.45z"/>
        </svg>
        <span className="flex flex-col text-left leading-tight">
          <span className="text-[10px] uppercase tracking-widest text-white/60">
            Download on the
          </span>
          <span className="text-base font-semibold text-white">App Store</span>
        </span>
      </a>

      <a
        href={PLAY_STORE_URL}
        className="group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-black/60 px-5 py-3 transition hover:border-white/30 hover:bg-black/80"
        aria-label="Get it on Google Play"
      >
        <svg aria-hidden viewBox="0 0 24 24" width="26" height="26">
          <path fill="#34A853" d="M3.61 1.81C3.22 2.22 3 2.86 3 3.69v16.62c0 .83.22 1.47.61 1.88L3.7 22.3l9.32-9.32v-.22L3.7 3.43l-.09.08z"/>
          <path fill="#FBBC04" d="M16.36 16.06l-3.34-3.34v-.22l3.34-3.34.08.05 3.94 2.24c1.13.64 1.13 1.7 0 2.34l-3.94 2.24-.08.03z"/>
          <path fill="#EA4335" d="M16.44 16.03L13.02 12.6 3.61 22.3c.37.4.99.45 1.69.06l11.14-6.33"/>
          <path fill="#4285F4" d="M16.44 7.97L5.3 1.64c-.7-.39-1.32-.34-1.69.06l9.41 9.41 3.42-3.14z"/>
        </svg>
        <span className="flex flex-col text-left leading-tight">
          <span className="text-[10px] uppercase tracking-widest text-white/60">
            Get it on
          </span>
          <span className="text-base font-semibold text-white">Google Play</span>
        </span>
      </a>
    </div>
  );
}
