new Swiper('.cards-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPerView: 4,

    breakpoints: {
        1170: {
            slidesPerView: 4,
        },
        960: {
            slidesPerView: 3,
        },
        720: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        },
    },
});
