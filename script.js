document.addEventListener('DOMContentLoaded', function() {
    const intro = document.querySelector('.intro');
    intro.classList.add('visible');
});

document.getElementById('learnMoreBtn').addEventListener('click', function() {
    const facts = document.querySelectorAll('.facts li');
    facts.forEach((fact, index) => {
        setTimeout(() => {
            fact.classList.add('visible');
        }, index * 300); // staggered animation
    });

    const actions = document.querySelectorAll('.actions li');
    actions.forEach((action, index) => {
        setTimeout(() => {
            action.classList.add('visible');
        }, (index + facts.length) * 300); // staggered animation after facts
    });
});
