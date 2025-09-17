<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item" v-for="(accordion, index) in accordions" :key="index">
            <h2 class="accordion-header" :id="'heading' + index">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    :data-bs-target="'#collapse' + index" aria-expanded="false" :aria-controls="'collapse' + index">
                    <h5>{{ accordion.title }}</h5>
                </button>
            </h2>
            <div :id="'collapse' + index" class="accordion-collapse collapse" :aria-labelledby="'heading' + index"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="box-image">
                        <img :src="accordion.image" alt="">
                    </div>
                    <div class="box-text">
                        <p>{{ accordion.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Accordion',
        props: {
            accordions: Array
        }
    }
</script>

<style>
    .accordion .accordion-collapse .accordion-body {
        display: flex;
        align-items: center;
        justify-content: start;
    }
    .accordion .accordion-collapse .accordion-body .box-image {
        display: flex;
    }
    .accordion .accordion-collapse .accordion-body .box-image img {
        width: 100%;
        max-width: 150px;
        margin: auto;
        margin-left: 0;
        margin-right: 30px;
    }
    .accordion .accordion-collapse .accordion-body .box-text p {
        text-align: left;
    }
</style>