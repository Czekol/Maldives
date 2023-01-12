const nav = document.querySelector('.nav')
const navItems = document.querySelectorAll('.nav__item')
const burgerBtn = document.querySelector('.burger-btn')

const navBtnBars = document.querySelector('.burger-btn__bars')
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')

const toggleNav = () => {
	nav.classList.toggle('nav--active')
	navBtnBars.classList.toggle('black-bars-color')
	burgerBtn.classList.toggle('blue-focus')

	navItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
		})
	})
	deleteAnimation()
	toggleNavAnimation()
}

const toggleNavAnimation = () => {
	let delatTime = 0

	navItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delatTime + 's'
		delatTime++
	})
}

const deleteAnimation = () => {
	navItems.forEach(item => {
		item.addEventListener('click', () => {
			navItems.forEach(el => {
				el.classList.remove('nav-items-animation')
			})
		})
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.textContent = year
}
handleCurrentYear()

const handleObserver = () => {
	const currentSection = window.scrollY

	allSections.forEach(section => {
		if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 90) {
			navBtnBars.classList.add('black-bars-color')
			burgerBtn.classList.add('blue-focus')
		} else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection) {
			navBtnBars.classList.remove('black-bars-color')
			burgerBtn.classList.remove('blue-focus')
		}
	})
}

window.addEventListener('scroll', handleObserver)
burgerBtn.addEventListener('click', toggleNav)
