module.exports = {
  theme: {
    screens: {
      '2xs': '360px',
      xs: '480px',
    },
    extend: {
      keyframes: {
        'tpm-shake': {
          '0%, 100%': { transform: 'scale(.99)' },
          '50%': { transform: 'scale(1.01)' },
        },
        'tpm-pop-in': {
          '0%': { opacity: 0, transform: 'translateY(20px) scale(0.6) rotate(-8deg)' },
          '40%': { opacity: 1, transform: 'translateY(-8px) scale(1.15) rotate(4deg)' },
          '70%': { transform: 'translateY(2px) scale(0.95) rotate(-2deg)' },
          '100%': { opacity: 1, transform: 'translateY(0) scale(1) rotate(0)' },
        },
        'tpm-sheen-move': {
          '0%': { transform: 'translateX(-150%) skewX(-20deg)' },
          '100%': { transform: 'translateX(150%) skewX(-20deg)' },
        },
        'tpm-sparkle': {
          '0%': { opacity: 0.8, transform: 'scale(0.8)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
          '100%': { opacity: 0.8, transform: 'scale(0.8)' },
        },
      },
      animation: {
        tpmShake: 'tpm-shake 2s infinite',
        'tpm-pop-in': 'tpm-pop-in 1 ease-out forwards',
        'tpm-sheen': 'tpm-sheen-move 1 ease-out forwards',
        'tpm-spark': 'tpm-sparkle 2s infinite',
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
