const cardContainer = document.querySelector(".card-container");
const cards = document.querySelectorAll(".card");
const cardWidth = cards[0].offsetWidth + 20;

let currentIndex = 1; 
const totalCards = cards.length - 2; 

cardContainer.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
updateActiveClasses();

function updateCarousel() {
    cardContainer.style.transition = "transform 0.5s ease-in-out";
    cardContainer.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
    updateActiveClasses();
}

function updateActiveClasses() {
    cards.forEach(card => card.classList.remove("active", "prev", "next"));

    let prevIndex = currentIndex - 1 < 0 ? totalCards - 1 : currentIndex - 1;
    let nextIndex = currentIndex + 1 > totalCards ? 0 : currentIndex + 1;

    cards[currentIndex].classList.add("active");
    cards[prevIndex].classList.add("prev");
    cards[nextIndex].classList.add("next");
}


document.querySelector(".next-btn").addEventListener("click", () => {
    currentIndex++;

    if (currentIndex > totalCards) {
        setTimeout(() => {
            cardContainer.style.transition = "none"; 
            currentIndex = 1;
            cardContainer.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
            updateActiveClasses();
        }, 500);
    }

    updateCarousel();
});


document.querySelector(".prev-btn").addEventListener("click", () => {
    currentIndex--;

    if (currentIndex < 0) {
        setTimeout(() => {
            cardContainer.style.transition = "none"; 
            currentIndex = totalCards - 1;
            cardContainer.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
            updateActiveClasses();
        }, 500);
    }

    updateCarousel();
});
