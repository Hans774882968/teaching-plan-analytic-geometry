module.exports = {
  theme: {
    extend: {
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
