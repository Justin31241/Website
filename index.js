

document.addEventListener("DOMContentLoaded", () => {

    const aboutMeCard = document.querySelector("#about-me-info");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 
    });

    observer.observe(aboutMeCard);

});
