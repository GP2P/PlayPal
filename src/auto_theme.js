// define light and dark themes
const lightTheme = 'cupcake';
const darkTheme = 'synthwave';

// Get the theme toggle checkbox
const themeToggle = document.querySelector('.theme-controller');

// Listen for changes to the checkbox
if (themeToggle) {
	themeToggle.addEventListener('change', function () {
		// Get the new theme
		const newTheme = this.checked ? darkTheme : lightTheme;

		// Update the data-theme attribute
		document.documentElement.setAttribute('data-theme', newTheme);

		// Store the new theme in local storage
		localStorage.setItem('theme', newTheme);
	});
}

// When the page loads, check for a saved theme
document.addEventListener('DOMContentLoaded', function () {
	// Get the saved theme from local storage
	const savedTheme = localStorage.getItem('theme');

	// If there is a saved theme
	if (savedTheme) {
		// Set the data-theme attribute
		document.documentElement.setAttribute('data-theme', savedTheme);

		// Update the checkbox to match
		if (themeToggle) themeToggle.checked = savedTheme === darkTheme;
	} else { // auto-detect theme based on user's preference
		// If there is no saved theme, check the media query
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		// If the media query matches
		if (prefersDark) {
			// Set the data-theme attribute to dark
			document.documentElement.setAttribute('data-theme', darkTheme);

			// Update the checkbox
			if (themeToggle) themeToggle.checked = true;
		} else {
			// Set the data-theme attribute to light
			document.documentElement.setAttribute('data-theme', lightTheme);

			// Update the checkbox
			if (themeToggle) themeToggle.checked = false;
		}
	}
});
