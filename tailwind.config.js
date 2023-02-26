module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    content: [],
    theme: {
        extend: {
            colors:{
                "bg-event" : "#eeeeee61",
                "P-color": "#888",
                "p": "#666",
                "main": "#7b6cd5"
            }
        },
    },
    plugins: [],
}