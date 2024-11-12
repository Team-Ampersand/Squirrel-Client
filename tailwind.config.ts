import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          p10: 'rgb(var(--PRIMARY_P10))',
          p20: 'rgb(var(--PRIMARY_P20))',
          p30: 'rgb(var(--PRIMARY_P30))',
        },
        neutral: {
          n10: 'rgb(var(--NEUTRAL_N10))',
          n20: 'rgb(var(--NEUTRAL_N20))',
          n30: 'rgb(var(--NEUTRAL_N30))',
          n40: 'rgb(var(--NEUTRAL_N40))',
          n50: 'rgb(var(--NEUTRAL_N50))',
        },
        background: {
          bg: 'rgb(var(--BACKGROUND_BG))',
          card: 'rgb(var(--BACKGROUND_CARD))',
        },
        system: {
          error: 'rgb(var(--SYSTEM_ERROR))',
          positive: 'rgb(var(--SYSTEM_POSITIVE))',
        },
        sub: {
          green: 'rgb(var(--SUB_GREEN))',
          yellow: 'rgb(var(--SUB_YELLOW))',
          red: 'rgb(var(--SUB_RED))',
        },
        black: 'rgb(var(--BLACK))',
        white: 'rgb(var(--WHITE))',
      },

      fontFamily: {
        SUIT: ['SUIT'],
      },
      fontSize: {
        h1: ['1.75rem', { lineHeight: '2.1837rem', fontWeight: '900' }],
        h2: ['2rem', { lineHeight: '2.5rem', fontWeight: '700' }],
        h3: ['1.375rem', { lineHeight: '1.125rem', fontWeight: '700' }],
        h4: ['1rem', { lineHeight: '1.25rem', fontWeight: '700' }],
        h5: ['1.125rem', { lineHeight: '1.4038rem', fontWeight: '700' }],
        h6: ['1.125rem', { lineHeight: '1.4038rem', fontWeight: '500' }],
        body1: ['1rem', { lineHeight: '1.5rem', fontWeight: '500' }],
        body2: ['0.875rem', { lineHeight: '1.0919rem', fontWeight: '600' }],
        body3: ['0.875rem', { lineHeight: '17.4704px', fontWeight: '500' }],
        body4: ['0.875rem', { lineHeight: '17.4704px', fontWeight: '700' }],
      },
      spacing: {
        '0': '0',
        '0.5': '0.1875rem',
        '1': '0.25rem', //4px
        '2': '0.5rem', //8px
        '3': '0.75rem', //12px
        '4': '1rem', // 16px
        '5': '1.25rem', // 20px
        '6': '1.5rem', // 24px
        '7': '1.75rem', // 28px
        '8': '2rem', // 32px
        '9': '2.5rem', //40px
        px: '1px',
      },
      borderRadius: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.25rem',
      },
      borderWidth: {
        '1': '0.0625rem',
      },
      opacity: {
        '20': '0.2',
        '40': '0.4',
        '60': '0.6',
        '80': '0.8',
      },
    },
  },
  plugins: [],
};

export default config;
