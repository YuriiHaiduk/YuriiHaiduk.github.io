module.exports = {
    plugins: [
        require('postcss-preset-env')({
            browsers: 'last 2 versions',
        }),
    ],
};
// tailwind css
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    }
}