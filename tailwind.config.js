const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
    purge: ["./src/**/*.{tsx,ts}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                hero: "url('/images/hero-image.png')",
            },
            colors: {
                blue: {
                    100: "#EDF4F9", //light blue
                    300: "#76819E", // text blue
                    500: "#0078D2", // primary blue
                    700: "#0061AB", // second blue
                },
                gray: {
                    100: "#EEEEEE", // placeholdedr
                    300: "#BDBDBD", // gray placeholder
                    700: "#696969", // gray stroke
                    900: "#4F4F4F", // gray text
                },
            },
            spacing: {
                112: "28rem",
            },
        },
        fontFamily: {
            sans: ["Helvetica", ...fontFamily.sans],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/forms"),
    ],
}
