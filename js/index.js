const darkThemeItemsList = 	[ 
	document.body, 
	document.querySelector(".linearGradient"), 
	document.querySelector("h1"), 
	document.querySelector(".contactMe")
];

function toggleGptImage() {
	const gptLightTheme = document.querySelector(".gptLightTheme");
	const gptDarkTheme = document.querySelector(".gptDarkTheme");

  if (gptLightTheme.style.display === "block") {
    gptLightTheme.style.display = "none";
    gptDarkTheme.style.display = "block";
  } else {
    gptDarkTheme.style.display = "none";
    gptLightTheme.style.display = "block";
  };
};

function toggleButtonListener() {
	darkThemeItemsList.forEach((element) => {
		if (element) {
			element.classList.toggle('darkTheme');
		};
	});

	toggleGptImage();
	
	const newTheme = document.body.classList.contains('darkTheme') ? 'dark' : 'light';
	
	// à retirer après la création du nouveau bouton de changement de thême
	const toggleButton = document.getElementById('themeToggleButton');
	toggleButton.textContent = newTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';

	localStorage.setItem('theme', newTheme);
};

function handleTheme() {
	// à retirer après la création du nouveau bouton de changement de thême
	const toggleButton = document.getElementById('themeToggleButton');

  const currentTheme = localStorage.getItem('theme') || 'light';
	const gptLightTheme = document.querySelector(".gptLightTheme");
	const gptDarkTheme = document.querySelector(".gptDarkTheme");

	if (currentTheme === 'light') {
		gptLightTheme.style.display = "block";
		gptDarkTheme.style.display = "none";
  } else {
		darkThemeItemsList.forEach((element) => {
			if (element) {
				element.classList.add('darkTheme');
			};
		});
		
		// à retirer après la création du nouveau bouton de changement de thême
    toggleButton.textContent = 'Switch to Light Mode';

		gptLightTheme.style.display = "none";
		gptDarkTheme.style.display = "block";
	}
};

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('themeToggleButton');
	toggleButton.addEventListener('click', () => {
		toggleButtonListener();
  });
	handleTheme();
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
	const timeout = 350;
	slides.forEach((slide, i) => {
		if (slide.classList.contains('active') && i !== index) {
			slide.style.transition = 'opacity var(--transitionDuration)';
			slide.style.opacity = 0;
			setTimeout(() => {
				slide.classList.remove('active');
			}, timeout);
		};

		setTimeout(() => {
			if (i === index) {
				slide.classList.add('active');
				slide.style.opacity = 0;
				slide.style.transition = 'opacity var(--transitionDuration)';
				setTimeout(() => {
					slide.style.opacity = 1;
				}, 50);
			};
		}, timeout);
	});
};

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    };
    showSlide(currentSlide);
};

showSlide(currentSlide);
