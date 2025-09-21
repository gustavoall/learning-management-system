<template>
    <div id="lesson-01">
        <Header />
        <Modal :modals="ModalList" />
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
                <div class="row row-03">
                    <div class="col-lg-12 col-01">
                        <Accordion :accordions="accordionList" />
                    </div>
                </div>
                <div class="row row-04">
                    <div class="col-lg-12 col-01">
                        <Slide :slides="SlideList" />
                    </div>
                </div>
                <div class="row row-05">
                    <div class="col-lg-12 col-01">
                        <QuestionAlternative :questions="Question01" />
                    </div>
                </div>
                <div class="row row-06">
                    <div class="col-lg-12 col-01">
                        <button data-bs-toggle="modal" data-bs-target="#modal1">Modal</button>
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
import Modal from '../../components/template/Lesson-01/Modals/modal.vue';
import CardReveal from '../../components/template/Lesson-01/Card/cardReveal.vue'
import Accordion from '../../components/template/Lesson-01/Accordion/accordion.vue'
import Slide from '../../components/template/Lesson-01/Slide/slide.vue'
import QuestionAlternative from '../../components/template/Lesson-01/Questions/question-alternative.vue'
import Footer from '../../components/layout/footer.vue';

export default {
    name: 'Lesson',
    components: {
        Header,
        Modal,
        CardReveal,
        Accordion,
        Slide,
        QuestionAlternative,
        Footer
    },
    data() {
        return {
            ModalList: [
                {
                    id: 1,
                    title: '1',
                    text: 'aeeeew'
                }
            ],
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
            ],
            accordionList: [
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
            ],
            SlideList: [
                {
                    id: 1,
                    text: "1",
                },
                {
                    id: 2,
                    text: "2",
                },
                {
                    id: 3,
                    text: "3",
                }
            ],
            Question01: [
                {
                    points: 10,
                    title: "Qual a capital da França?",
                    alternatives: [
                        { text: "Paris", correct: true },
                        { text: "Londres", correct: false },
                        { text: "Roma", correct: false },
                        { text: "Berlim", correct: false }
                    ],
                    feedPositive_Title: "Boa!",
                    feedPositive_Text: "Acertou, Paris é a capital.",
                    feedNegative_Title: "Ops!",
                    feedNegative_Text: "Não foi dessa vez..."
                }
            ],
        }
    }
};

</script>