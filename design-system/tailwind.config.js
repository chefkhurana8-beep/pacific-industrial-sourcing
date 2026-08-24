/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Slate Blue
        primary: {
          50: '#F3F7F8',
          100: '#E4ECEF',
          300: '#A9BEC7',
          400: '#7C97A3',
          500: '#52717F',
          600: '#3E5A6B',
          700: '#2E4756',
          800: '#1B3540',
          900: '#12222B',
        },
        // Neutral - Cool Grays
        neutral: {
          50: '#F7F8F9',
          100: '#EEF0F2',
          200: '#DDE1E5',
          300: '#C3CAD1',
          400: '#9AA3AC',
          500: '#7C8891',
          600: '#5B6570',
          700: '#3A434B',
          800: '#232B32',
          900: '#12171C',
        },
        // Accent - Bronze
        accent: {
          100: '#F3E9DD',
          300: '#DCC0A0',
          500: '#BC8A5C',
          600: '#A9723F',
          700: '#8C5E32',
          800: '#6E4A26',
        },
        // Semantic Colors
        success: '#3F7D58',
        'success-bg': '#E7F1EA',
        warning: '#B98A2E',
        'warning-bg': '#FBF1DF',
        error: '#B0453D',
        'error-bg': '#F8E7E5',
        info: '#52717F',
        'info-bg': '#F3F7F8',
        // Surfaces
        surface: {
          page: '#F7F8F9',
          card: '#FFFFFF',
          sunken: '#EEF0F2',
          inverse: '#1B3540',
        },
        // Brand
        brand: {
          primary: '#2E4756',
          'primary-dark': '#1B3540',
          accent: '#A9723F',
        }
      },
      fontFamily: {
        display: ["'Libre Franklin'", '-apple-system', 'sans-serif'],
        body: ["'Source Sans 3'", '-apple-system', 'sans-serif'],
        mono: ['monospace'],
      },
      fontSize: {
        display: ['3.5rem', { lineHeight: '1.08' }],
        h1: ['2.5rem', { lineHeight: '1.15' }],
        h2: ['2rem', { lineHeight: '1.2' }],
        h3: ['1.5rem', { lineHeight: '1.3' }],
        h4: ['1.25rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        body: ['1rem', { lineHeight: '1.6' }],
        small: ['0.875rem', { lineHeight: '1.5' }],
        caption: ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '24px',
        6: '32px',
        7: '48px',
        8: '64px',
        9: '96px',
        10: '128px',
      },
      maxWidth: {
        container: '1200px',
      },
      padding: {
        container: '24px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        pill: '999px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(18, 23, 28, 0.06)',
        md: '0 4px 16px rgba(18, 23, 28, 0.08)',
        lg: '0 16px 40px rgba(18, 23, 28, 0.12)',
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(.2, .6, .2, 1)',
      },
      transitionDuration: {
        fast: '120ms',
        base: '200ms',
      },
      letterSpacing: {
        eyebrow: '0.08em',
        caps: '0.04em',
      }
    },
  },
  plugins: [],
}
