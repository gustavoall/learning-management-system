<template>
    <div id="lesson-01">
        <Header />
        <section class="section-01">
            <div class="container">
                <div class="row row-01">
                    <div class="col-lg-12 col-01">
                        <h1>Lição</h1>
                        <p>Conteúdo da lição dinâmica.</p>
                    </div>
                </div>
                <div class="row row-02">
                    <div class="col-lg-12 col-01">
                        <CardReveal :cards="cardList" />
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
    import CardReveal from '../../components/template/Lesson-01/Card/Card_Reveal.vue'
    import Footer from '../../components/layout/footer.vue';

    export default {
        name: 'Lesson',
        components: {
            Header,
            CardReveal,
            Footer
        },
        data() {
            return {
                cardList: [
                    {
                        image: '/src/app/assets/images/card-1.png',
                        title: 'What is Lorem Ipsum?',
                        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
                    },
                    {
                        image: '/src/app/assets/images/card-1.png',
                        title: 'Why do we use it?',
                        text: 'It is a long established fact that a reader will.'
                    },
                    {
                        image: '/src/app/assets/images/card-1.png',
                        title: 'Where can I get some?',
                        text: 'There are many variations of passages of Lorem Ipsum available.'
                    }
                ]
            }
        }
    };
</script>