<template>
    <div class="row card-reveal-group">
        <div class="col-lg-4 col-card" v-for="(card, index) in localCards" :key="index">
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
    name: "CardReveal",
    props: {
        list: { type: Array, required: true },
        id: { type: Number, required: true }
    },
    data() {
        return {
            localCards: []
        };
    },
    watch: {
        id: {
            immediate: true,
            handler(newId) {
                const group = this.list.find((item) => item.id === newId);
                this.localCards = group
                    ? group.cards.map((c) => ({ ...c, open: false }))
                    : [];
            }
        }
    },
    methods: {
        toggleCard(index) {
            this.localCards[index].open = !this.localCards[index].open;
        }
    }
};
</script>

<style scoped>
.card-reveal-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.card-reveal {
    perspective: 1000px;
    width: 100%;
    max-width: 400px;
    height: 400px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.8s;
    cursor: pointer;
    border: unset;
    margin: auto;
}

.card-reveal.open .card-front {
    opacity: 0%;
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.card-reveal.open .card-back {
    opacity: 100%;
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.card-reveal-group .col-card {
    margin-bottom: 30px;
}
.card-front,
.card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 40px;
    overflow: hidden;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.card-front {
    opacity: 100%;
    z-index: 2;
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.card-front img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-back {
    opacity: 0%;
    background-color: #222;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    text-align: center;
    z-index: 1;
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>
