/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebasFont: ["Bebas Neue", "sans-serif"],
      },
      backgroundImage: {
        landing_page_bg:
          "url('/assets/images/starter_page_images/main_page.png')",
        red_button:
          "url('/assets/images/starter_page_images/red_starter_button.png')",
        rent_car_home_page_bg:
          "url('/assets/images/userPanel/HomePage/lower_bg.png')",
        car_3: "url('/assets/images/userPanel/HomePage/car_3.png')",
        navigation_page_bg:
          "url('/assets/images/navigation_page.png')",
        navigation_left_page_bg:
          "url('/assets/images/car2.png')",
        navigation_right_page_bg:
          "url('/assets/images/car1.png')",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-textshadow"),
  ],
};
