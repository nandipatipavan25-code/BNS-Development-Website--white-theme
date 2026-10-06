/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#C41E1E",
          redDark: "#A31919",
          redLight: "rgba(196, 30, 30, 0.08)",
          redGlow: "rgba(196, 30, 30, 0.2)",
          
          // Tonal Off-White & Soft Grey Canvases
          bg: "#F7F7F5",          // Primary light background
          bgWarm: "#F2F2EF",      // Secondary section background
          bgMuted: "#ECECE9",     // Muted highlight surface
          bgSubtle: "#E6E6E3",    // Subtle tone
          card: "#FCFCFB",        // Card & modal background
          cardAlt: "#F7F7F5",     // Alternate card surface
          
          // Architectural Borders & Dividers
          border: "#E6E6E3",      // Standard border
          borderLight: "#ECECE9", // Subtle divider
          borderDark: "#DEDEDA",  // High-contrast border
          
          // Tonal Charcoal Typography Opacity Hierarchy
          text: "rgba(24, 24, 24, 0.90)",        // Primary text (90% black)
          heading: "rgba(24, 24, 24, 0.90)",     // Primary headings H1/H2 (90% black)
          subheading: "rgba(24, 24, 24, 0.75)",  // Secondary headings H3/H4 / Card titles (75% black)
          body: "rgba(24, 24, 24, 0.60)",        // Body & paragraph copy (60% black)
          subtext: "rgba(24, 24, 24, 0.60)",     // Section descriptions / supporting copy (60% black)
          muted: "rgba(24, 24, 24, 0.45)",       // Captions, metadata, eyebrows, hints (45% black)
          
          // Deep Architectural Contrast Accents
          charcoal: "#181818",
          darkSurface: "#202020",
          darkBorder: "rgba(255, 255, 255, 0.12)",
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Albert Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        body: ['"Albert Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        mono: ['"Albert Sans"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.03em',
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.15em',
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(24, 24, 24, 0.03)',
        'card': '0 10px 30px -10px rgba(24, 24, 24, 0.05)',
        'card-hover': '0 20px 40px -15px rgba(24, 24, 24, 0.08)',
        'elevated': '0 25px 50px -12px rgba(24, 24, 24, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
