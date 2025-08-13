module.exports = {
  theme: {
    extend: {
      keyframes: {
        'tpm-shake': {
          '0%, 100%': { transform: 'scale(.99)' },
          '50%':      { transform: 'scale(1.01)' },
        },
      },
      animation: {
        tpmShake: 'tpm-shake 2s infinite',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            '--tw-prose-quote-borders': 'var(--tpm-primary)',
          },
        },
        invert: {
          css: {
            '--tw-prose-quote-borders': 'var(--tpm-primary-invert)',
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
