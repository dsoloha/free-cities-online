const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

const config = {
	plugins: [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
<<<<<<< HEAD
		tailwindcss(), //Some plugins, like tailwindcss/nesting, need to run before Tailwind, tailwindcss(), //But others, like autoprefixer, need to run after, //But others, like autoprefixer, need to run after,
=======
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
>>>>>>> 981c0c5 (Added Skeleton framework)
		autoprefixer
	]
}

module.exports = config
