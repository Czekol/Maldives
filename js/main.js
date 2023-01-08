const nav = document.querySelector('.nav')
const navItems = document.querySelectorAll('.nav__item')
const burgerBtn = document.querySelector('.burger-btn')

const toggleNav = () => {
	nav.classList.toggle('nav--active')

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

burgerBtn.addEventListener('click', toggleNav)
