const texts = [
    "ToolsFix "
]

const typingSpeed = 100; 
const deletingSpeed = 50; 
const pauseBeforeDeleting = 2000; 
let textIndex = 0; 
let charIndex = 0; 
let isDeleting = false; 

document.getElementById('menu-button').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
    navLinks.classList.toggle('box-shadow');
})

function typeText() {
    const currentText = texts[textIndex];
    
    if (!isDeleting && charIndex < currentText.length) {
 
        document.getElementById("typed-text").innerHTML = currentText.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else if (isDeleting && charIndex > 0) {

        document.getElementById("typed-text").innerHTML = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeText, deletingSpeed);
    } else if (!isDeleting && charIndex === currentText.length) {

        isDeleting = true;
        setTimeout(typeText, pauseBeforeDeleting);
    } else if (isDeleting && charIndex === 0) {

        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length; 
        setTimeout(typeText, typingSpeed);
    }
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-fill');

    skillBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = percent;
    });
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function onScroll() {
    const skillSection = document.querySelector('.skills-section');
    if (isInViewport(skillSection)) {
        animateSkillBars();
        window.removeEventListener('scroll', onScroll); // To trigger the animation only once
    }
}

window.addEventListener('scroll', onScroll);

function enter() {
    for (let i = 20; i >= 0; i--) {
        setTimeout(() => {
            document.querySelector('.enter').style.backdropFilter = `blur(${i}px)`;
            document.querySelector('.enter').style.WebkitBackdropFilter = `blur(${i}px)`;
        }, 40 * (20 - i));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    enter();
})

window.onload = onScroll;
window.onload = typeText;
