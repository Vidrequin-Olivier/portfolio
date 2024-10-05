document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('themeToggleButton');
  const currentTheme = localStorage.getItem('theme') || 'light';
	const darkThemeItemsList = 	[ 
		document.body, 
		document.querySelector(".linearGradient"), 
		document.querySelector("h1"), 
		document.querySelector(".contactMe")
	];

  if (currentTheme === 'dark') {
		darkThemeItemsList.forEach((element) => {
			if (element) {
				element.classList.add('darkTheme');
			}
		});
    toggleButton.textContent = 'Switch to Light Mode';
  }

  toggleButton.addEventListener('click', () => {
		darkThemeItemsList.forEach((element) => {
			if (element) {
				element.classList.toggle('darkTheme');
			}
		});
		
    const newTheme = document.body.classList.contains('darkTheme') ? 'dark' : 'light';

    toggleButton.textContent = newTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    localStorage.setItem('theme', newTheme);
  });
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
	const timeout = 500;
	slides.forEach((slide, i) => {
		if (slide.classList.contains('active') && i !== index) {
			slide.style.transition = 'opacity var(--transitionDuration)';
			slide.style.opacity = 0;
			setTimeout(() => {
				slide.classList.remove('active');
			}, timeout);
		}

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
}

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
