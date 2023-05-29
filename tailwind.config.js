/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["var(--font-barlow)"],
        fraunces: ["var(--font-fraunces)"],
      },
      backgroundImage: {
        "hero-mobile": "url('/images/mobile/image-header.jpg')",
        "hero-desktop": "url('/images/desktop/image-header.jpg')",
        "egg-mobile": "url('/images/mobile/image-transform.jpg')",
        "egg-desktop": "url('/images/desktop/image-transform.jpg')",
        "standout-mobile": "url('/images/mobile/image-stand-out.jpg')",
        "standout-desktop": "url('/images/desktop/image-stand-out.jpg')",
        "graphic-mobile": "url('/images/mobile/image-graphic-design.jpg')",
        "graphic-desktop": "url('/images/desktop/image-graphic-design.jpg')",
        "photography-mobile": "url('/images/mobile/image-photography.jpg')",
        "photography-desktop": "url('/images/desktop/image-photography.jpg')",
      },
    },
    colors: {
      primary: {
        "soft-red": "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        "dark-desaturated-cyan": "hsl(167, 40%, 24%)",
        "dark-blue": "hsl(198, 62%, 26%)",
        "dark-moderate-cyan": "hsl(168, 34%, 41%)",
      },
      neutral: {
        "very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
        "very-dark-grayish-blue": "hsl(213, 9%, 39%)",
        "dark-grayish-blue": "hsl(232, 10%, 55%)",
        "grayish-blue": "hsl(210, 4%, 67%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
