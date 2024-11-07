/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "", //+
  theme: {
	container: {
		center: true,
		padding: "15px",
	},
	screens: {
		sm: "640px",
		md: "768px",
		lg: "960px",
		xl: "1200px",
	},
	fontFamily :{
		primary: "var(--font-geist-sans)",
	},
  	extend: {
		transitionDuration: {
			'3': '3000ms',
		  },
		aspectRatio: {
			'1': '1',
		  },
		keyframes: {
			"accordion-down": {
				from: { height: "0" },
				to: { height: "var(--radix-accordion-content-height)" },
			},
			"accordion-up": {
				from: { height: "var(--radix-accordion-content-height)" },
				to: { height: "0" },
			},
			'text': {
                '0%, 100%': {
					'background-size':'200% 200%',
					'background-position': 'left center'
                },
                '50%': {
					'background-size':'200% 200%',
					'background-position': 'right center'
                }
			}
		},
		animation: {
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out",
			'text':'text 5s ease infinite',
		}, //+
  		colors: {
			primary: '#fff',
			accent: {
				DEFAULT: '#0000ff',
				hover: '#000',
			},
  		}, // -
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		} // -
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
