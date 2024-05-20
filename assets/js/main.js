/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show")
    })
  }
}
showMenu("nav-toggle", "nav-menu")

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link")

function linkAction() {
  const navMenu = document.getElementById("nav-menu")
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show")
}
navLink.forEach((n) => n.addEventListener("click", linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]")

const scrollActive = () => {
  const scrollDown = window.scrollY

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      )

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link")
    } else {
      sectionsClass.classList.remove("active-link")
    }
  })
}
window.addEventListener("scroll", scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
})

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {})
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 400,
})
sr.reveal(".home__social-icon", { interval: 200 })
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 })

/*===== SCROLL REVEAL ANIMATION =====*/

var collapse = document.getElementsByClassName("skills__data")
var i

for (i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener("click", function () {
    this.classList.toggle("active")
    var content = this.children[this.children.length - 1]
    content.style.display = "flex"
    var arrowElement = this.querySelector(".skills_collapse__icon")
    if (arrowElement.classList.contains("bx-chevron-down")) {
      arrowElement.classList.remove("bx-chevron-down")
      arrowElement.classList.add("bx-chevron-up")
    } else {
      arrowElement.classList.remove("bx-chevron-up")
      arrowElement.classList.add("bx-chevron-down")
    }
    if (content.style.maxHeight) {
      content.style.maxHeight = null
    } else {
      content.style.maxHeight = content.scrollHeight + "px"
    }
  })
}
