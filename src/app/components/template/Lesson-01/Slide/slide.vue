<template>
    <swiper :modules="modules" :spaceBetween="30" :slidesPerView="1" :navigation="true" class="Slide">
        <SwiperSlide v-for="(slide, index) in localSlides" :key="index">
            <div class="item">
                <div class="row">
                    <div class="col-lg-10 offset-lg-1 col-01">
                        <div class="box-item">
                            <p>{{ slide.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    </swiper>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

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

const localSlides = ref([])

watch(
    () => props.id,
    (newId) => {
        const group = props.list.find((item) => item.id === newId)
        localSlides.value = group ? group.slides.map((s) => ({ ...s })) : []
    },
    { immediate: true }
)

const modules = [Navigation, Pagination]
</script>

<style>
.Slide {
    width: 100%;
}

.Slide .item .box-item {
    background-color: #13293D;
    border-radius: 35px;
    padding: 35px;
}

.Slide .item p {
    color: #fff;
    text-align: center;
    margin: auto;
}
</style>
