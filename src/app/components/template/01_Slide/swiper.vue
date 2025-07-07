<template>
    <swiper
    :slidesPerView="4"
    :spaceBetween="30"
    :effect="'fade'"
    :centeredSlides="true"
    :navigation="true"
    :pagination="{
        clickable: true,
    }"
    :modules="[Pagination, Navigation]"
    class="Slide-01"
    >
        <swiper-slide v-for="n in 5" :key="n">
            <div class="slide-content">Modulo {{ n }}</div>
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

<style scoped>
    .Slide-01 {
        width: 1080px;
        height: 300px;
    }
    .slide-content {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        color: #62ff91;
        background: #3ba84d;
        border-radius: 25px;
        height: 100%;
    }
    .swiper-button-next:after, 
    .swiper-button-prev:after {
        color: #fff!important;
        padding: 20px;
        border-radius: 100px;
    }
</style>