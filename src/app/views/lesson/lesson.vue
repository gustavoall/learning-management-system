<template>
    <div id="lesson-01">
        <Header />
        <section class="section-01">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-01">
                        <h1>Lição</h1>
                        <p>Conteúdo da lição dinâmica.</p>
                        <CardRevealGroup :cards="cardList" />
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
</template>

<script>
    import './lesson.scss';

    /* COMPONENTS */
    import Header from '../../components/layout/header.vue';
    import Footer from '../../components/layout/footer.vue';
    import CardRevealGroup from '../../components/template/L01_Card/Card_Reveal_Group.vue'

    export default {
        name: 'Lesson',
        components: {
            Header,
            Footer,
            CardRevealGroup
        },
        data() {
            return {
                cardList: [
                    {
                        image: '/src/app/assets/images/modulo-01.jpeg',
                        title: 'Vue Brabo',
                        text: 'Esse card gira lindamente!'
                    },
                    {
                        image: '/src/app/assets/images/modulo-01.jpeg',
                        title: 'Componentização',
                        text: 'Organização topzera pra escalar.'
                    },
                    {
                        image: '/src/app/assets/images/modulo-01.jpeg',
                        title: 'Card Reveal Pro',
                        text: 'Agora em modo chef 💅'
                    }
                ]
            }
        }
    };
</script>