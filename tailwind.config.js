/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            colors: {
                'dark': '#000614',
                'text': 'white',
                'primary': '#E50914',
                'secendary': 'red',
                'faq': '#4E4E4E'
            },
            backgroundImage: {
                'hero-pattern': "url('/assets/bg-image.jpg')"
            }
        },
    },
    plugins: [],
}