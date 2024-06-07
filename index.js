const slider = document.querySelector('.slider')
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')

let slideIndex = 0
const slidesCount = slider.children.length
let startX = 0
let dist = 0

function showSlide(index) {
	if (index < 0) {
		slideIndex = 0
	} else if (index >= slidesCount) {
		slideIndex = slidesCount - 1
	} else {
		slideIndex = index
	}
	const slideWidth = slider.children[0].offsetWidth
	slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`

	if (slideIndex === 0) {
		prevButton.style.display = 'none'
	} else {
		prevButton.style.display = 'block'
	}
	if (slideIndex === slidesCount - 1) {
		nextButton.style.display = 'none'
	} else {
		nextButton.style.display = 'block'
	}
}

prevButton.addEventListener('click', () => {
	showSlide(slideIndex - 1)
})

nextButton.addEventListener('click', () => {
	showSlide(slideIndex + 1)
})

slider.addEventListener('touchstart', (event) => {
	startX = event.touches[0].clientX
})

slider.addEventListener('touchmove', (event) => {
	let currentX = event.touches[0].clientX
	dist = currentX - startX
})

slider.addEventListener('touchend', () => {
	if (Math.abs(dist) > 50) {
		if (dist > 0) {
			showSlide(slideIndex - 1)
		} else {
			showSlide(slideIndex + 1)
		}
	}
	dist = 0
})