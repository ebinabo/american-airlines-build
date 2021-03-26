module.exports = {
    purge: ["./styles/**/*.{tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                blue: {
                    100: "#EDF4F9", //light blue
                    300: "#76819E", // text blue
                    500: "#0078D2", // primary blue
                    700: "#0061AB", // second blue
                },
            },
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
