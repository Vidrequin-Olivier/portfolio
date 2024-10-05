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

