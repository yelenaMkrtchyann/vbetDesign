function showTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    const liveTimeElements = document.getElementsByClassName('live_time');

    for (let i = 0; i < liveTimeElements.length; i++) {
        liveTimeElements[i].textContent = timeString;
    }
}

setInterval(showTime, 1000);
showTime();










let currentIndex = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide_item');

    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    document.getElementById('slideIndicator').textContent = `${currentIndex + 1}/${slides.length}`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(() => {
    nextSlide();
}, 3000);

showSlide(currentIndex);



setTimeout(() => {
    document.getElementById("loading").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.body.style.display = "block";
}, 2000);


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
