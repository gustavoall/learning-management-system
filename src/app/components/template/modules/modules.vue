<template>
    <swiper :slidesPerView="3" :spaceBetween="30" :breakpoints="breakpoints" :effect="'fade'" :centeredSlides="true"
        :navigation="true" :pagination="{
            clickable: true,
        }" :modules="[Pagination, Navigation]" class="Modules">
        <swiper-slide v-for="(slideModules, index) in localSlide" :key="index">
            <a :href="'/lesson/' + index">
                <div class="slide-content" :id="'Module' + slideModules.id">
                    <img :src="slideModules.image" alt="">
                    <div class="box">
                        <p>{{ slideModules.title }}</p>
                    </div>
                </div>
            </a>
        </swiper-slide>
    </swiper>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const props = defineProps({
    list: {
        type: Array,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
})

const localSlide = ref([])

watch(
    () => props.id,
    (newId) => {
        const group = props.list.find((item) => item.id === newId)
        localSlide.value = group ? group.slides.map((s) => ({ ...s })) : []
    },
    { immediate: true }
)

const modules = [Navigation, Pagination]

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
        slidesPerView: 2,
        spaceBetween: 20,
    },
    1200: {
        slidesPerView: 2,
        spaceBetween: 30,
    },
    1920: {
        slidesPerView: 3,
        spaceBetween: 30,
    },
};
</script>

<style>
.Modules {
    width: 1080px;
    height: 400px;
    overflow: visible;
}

.Modules .swiper-button-next,
.Modules .swiper-button-prev {
    color: #fff !important;
    padding: 20px;
    border-radius: 100px;
    top: 120% !important;
}

.Modules .slide-content {
    display: flex;
    align-items: center;
    font-size: 24px;
    border-radius: 45px;
    height: 100%;
    box-shadow: 8px 15px 38px -20px rgba(0, 0, 0, 0.75);
}

.Modules .slide-content img {
    object-fit: cover;
    border-radius: 40px;
    user-select: none;
    width: 100%;
    height: 100%;
    margin: auto;
}

.Modules a .slide-content {
    overflow: hidden;
    position: relative;
}

.Modules a .slide-content .box {
    background-color: #fff;
    padding-top: 20px;
    padding-bottom: 20px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.Modules a .slide-content:hover .box{
    padding-top: 35px;
    padding-bottom: 35px;
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.Modules a .slide-content .box p {
    color: #13293D;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    text-transform: uppercase;
    margin: auto;
    text-decoration: none !important;
}

.Modules .swiper-slide-active {
    filter: opacity(1) !important;
    pointer-events: all !important;
}

.Modules .swiper-slide-active:after {
    display: none !important;
}

.Modules .swiper-slide {
    filter: opacity(0.6);
    pointer-events: none;
}

.Modules .swiper-slide.completed:after {
    background-image: url(../../../assets/images/correct.png);
    display: block !important;
    filter: drop-shadow(3px 8px 12px green);
    animation: pulse 0.5s ease-in-out;
}

.Modules .swiper-slide:after {
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

.Modules .swiper-pagination {
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
    .Modules {
        width: 100%;
        height: 350px;
    }
}
</style>
