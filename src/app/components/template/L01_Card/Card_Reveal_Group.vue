<template>
    <div class="row card-reveal-group">
        <div class="col-lg-4 col-card" v-for="(card, index) in cards" :key="index">
            <div class="card card-reveal" :class="{ open: card.open }" @click="toggleCard(index)">
                <div class="card-front" :style="{ opacity: card.open ? 0 : 1 }">
                    <img :src="card.image" :alt="card.title" />
                </div>
                <div class="card-back">
                    <div class="content">
                        <h2>{{ card.title }}</h2>
                        <p>{{ card.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardRevealGroup',
    props: {
        cards: Array
    },
    methods: {
        toggleCard(index) {
            this.cards[index].open = !this.cards[index].open
        }
    }
}
</script>

<style scoped>
    .card-reveal {
        perspective: 1000px;
        width: 100%;
        height: 400px;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.8s;
        cursor: pointer;
    }

    .card-reveal.open {
        transform: rotateY(180deg);
    }

    .card-front,
    .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
    }

    .card-front {
        background-color: #222;
    }

    .card-front img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card-back {
        background-color: #222;
        color: #fff;
        transform: rotateY(180deg);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.5rem;
        text-align: center;
    }
</style>
