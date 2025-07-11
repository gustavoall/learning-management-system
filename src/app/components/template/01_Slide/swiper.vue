<template>
    <swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :effect="'fade'"
    :centeredSlides="true"
    :navigation="true"
    :pagination="{
        clickable: true,
    }"
    
    :modules="[Pagination, Navigation]"
    class="Slide-Modules"
    
    >
        <swiper-slide>
            <a href="/lesson/1">
                <div class="slide-content module_01"></div>
            </a>
        </swiper-slide>
        <swiper-slide>
            <a href="/lesson/2">
                <div class="slide-content module_02"></div>
            </a>
        </swiper-slide>
        <swiper-slide>
            <a href="/lesson/3">
                <div class="slide-content module_03"></div>
            </a>
        </swiper-slide>
        <swiper-slide>
            <a href="/lesson/4">
                <div class="slide-content module_04"></div>
            </a>
        </swiper-slide>
        <swiper-slide>
            <a href="/lesson/5">
                <div class="slide-content module_05"></div>
            </a>
        </swiper-slide>
    </swiper>
</template>

<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation, Pagination } from 'swiper/modules';

    import 'swiper/css';
    import 'swiper/css/effect-fade';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';

const breakpoints = {
    0: {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    640: {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    768: {
        slidesPerView: 1,
        spaceBetween: 20,
    },
    1024: {
        slidesPerView: 1,
        spaceBetween: 30,
    },
};
</script>

<style>
    .Slide-Modules {
        width: 1080px;
        height: 400px;
        overflow: visible;
    }

    .Slide-Modules .swiper-button-next,
    .Slide-Modules .swiper-button-prev {
        color: #fff !important;
        padding: 20px;
        border-radius: 100px;
        top: 120% !important;
    }

    .Slide-Modules .slide-content {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        border-radius: 45px;
        height: 100%;
        box-shadow: 8px 15px 38px -20px rgba(0, 0, 0, 0.75);
    }

    .Slide-Modules .slide-content.module_01 {
        background-image: url(../../../assets/images/modulo-01.jpeg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top center;
    }

    .Slide-Modules .slide-content.module_02 {
        background-image: url(../../../assets/images/modulo-02.jpeg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top center;
    }

    .Slide-Modules .slide-content.module_03 {
        background-image: url(../../../assets/images/modulo-03.jpeg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top center;
    }

    .Slide-Modules .slide-content.module_04 {
        background-image: url(../../../assets/images/modulo-04.jpeg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top center;
    }

    .Slide-Modules .slide-content.module_05 {
        background-image: url(../../../assets/images/modulo-05.jpeg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top center;
    }

    .Slide-Modules .swiper-slide-active {
        filter: opacity(1);
        pointer-events: all;
    }

    .Slide-Modules .swiper-slide-active:after {
        display: none !important;
    }

    .Slide-Modules .swiper-slide {
        filter: opacity(0.6);
        pointer-events: none;
    }

    .Slide-Modules .swiper-slide.completed:after {
        background-image: url(../../../assets/images/correct.png);
        display: block !important;
        filter: drop-shadow(3px 8px 12px green);
        animation: pulse 0.5s ease-in-out;
    }

    .Slide-Modules .swiper-slide:after {
        content: "";
        position: absolute;
        width: 55px;
        height: 65px;
        background-image: url(../../../assets/images/lock.png);
        background-repeat: no-repeat;
        background-size: contain;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
    }

    .Slide-Modules .swiper-pagination {
        bottom: var(--swiper-pagination-bottom, -90px);
        z-index: -1;
    }
    .swiper-pagination-bullet-active {
        background: #fff;
    }

    .swiper-pagination-bullet {
        width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 15px));
        height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 15px));
    }

    @media (max-width: 991px) {
        .Slide-Modules {
            width: 100%;
            height: 350px;
        }
        .Slide-Modules .slide-content {
        }
    }

</style>
