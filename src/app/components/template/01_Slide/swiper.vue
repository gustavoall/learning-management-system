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
</script>
