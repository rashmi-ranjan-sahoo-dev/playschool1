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
          coral: {
            50: '#FDF4F2',
            100: '#FCE7E4',
            200: '#F9CFCA',
            300: '#F4A9A0',
            400: '#EE7F70',
            500: '#F26440', // Primary Brand Accent
            600: '#D94E2B', // Hover
            700: '#BA3B1C',
            800: '#973017',
            900: '#7B2C19',
          },
          teal: {
            50: '#EFF8F8',
            100: '#D9F0EF',
            200: '#B6E2E0',
            300: '#84C9C7',
            400: '#4CAAA8',
            500: '#149392',
            600: '#0E7C7B', // Secondary Brand Anchor
            700: '#085453',
            800: '#063E3E',
            900: '#042D2D',
          },
          honey: {
            DEFAULT: '#F7B801',
            50: '#FEFAF0',
            100: '#FDF3D9',
            200: '#FCE5B0',
            500: '#F7B801',
            600: '#D89E00',
          },
          azure: {
            DEFAULT: '#3A86C8',
            50: '#F2F7FC',
            100: '#E1EDF8',
            500: '#3A86C8',
            600: '#2A6FA8',
          },
          sprout: {
            DEFAULT: '#2A9D8F',
            50: '#F0F9F8',
            100: '#DDF1EF',
            500: '#2A9D8F',
            600: '#1F7D72',
          },
          cream: '#FFFDF9',     // Warm Canvas Light
          canvas: '#FBF8F2',    // Subtle Section Contrast
          slate: '#1A3038',     // High Contrast Headline Text
          charcoal: '#374151',  // Body Paragraphs
          muted: '#64748B',     // Microcopy
        },
        // Baby House Reference Website Palette
        ref: {
          orange: '#f57f25',
          purple: '#907ee2',
          yellow: '#ffba06',
          green: '#a9d63b',
          pink: '#e868a7',
          sky: '#00C3C9',
          blue: '#6ab3d1',
          red: '#ec4b4b',
          dark: '#1e1e1e',
          lightgray: '#f5f5f5',
        },
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'Open Sans', 'sans-serif'],
        script: ['Lobster', 'cursive'],
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      boxShadow: {
        'soft-card': '0 10px 30px -10px rgba(234, 88, 12, 0.08)',
        'soft-hover': '0 20px 40px -15px rgba(234, 88, 12, 0.16)',
        'floater': '0 12px 28px -6px rgba(14, 124, 123, 0.14)',
      },
    },
  },
  plugins: [],
};
