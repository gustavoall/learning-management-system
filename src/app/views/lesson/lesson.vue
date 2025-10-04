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
                        <CardReveal :list="CardList" :id="1" />
                    </div>
                </div>
                <div class="row row-03">
                    <div class="col-lg-12 col-01">
                        <Accordion :list="AccordionList" :id="1" />
                    </div>
                </div>
                <div class="row row-04">
                    <div class="col-lg-12 col-01">
                        <Slide :list="SlideList" :id="2" />
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
                <div class="row row-07">
                    <div class="col-lg-12 col-01">
                        <Tab :list="TabList" :id="2" :initial="0" />
                        <button data-bs-toggle="modal" data-bs-target="#modal2">Modal</button>
                    </div>
                </div>
                <div class="row row-08">
                    <div class="col-lg-12 col-01">
                        <QuestionChoice :questions="Question02" />
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
import Modal from '../../components/template/props/Modals/modal.vue';
import Tab from '../../components/template/props/Tab/tab.vue';
import CardReveal from '../../components/template/props/Card/cardReveal.vue';
import Accordion from '../../components/template/props/Accordion/accordion.vue';
import Slide from '../../components/template/props/Slide/slide.vue';
import QuestionAlternative from '../../components/template/props/Questions/question-alternative.vue';
import QuestionChoice from '../../components/template/props/Questions/question-choice.vue';
import Footer from '../../components/layout/footer.vue';

export default {
    name: 'Lesson',
    components: {
        Header,
        Modal,
        Tab,
        CardReveal,
        Accordion,
        Slide,
        QuestionAlternative,
        QuestionChoice,
        Footer
    },
    data() {
        return {
            ModalList: [
                {
                    id: 1,
                    title: '1',
                    text: 'aeeeew'
                },
                {
                    id: 2,
                    title: '2',
                    text: 'aeeeew'
                }
            ],
            CardList: [
                {
                    id: 1,
                    cards: [
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
                },
                {
                    id: 2,
                    cards: [
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
                        },
                        {
                            image: '/src/app/assets/images/card-1.png',
                            title: 'Where can I get some?',
                            text: 'There are many variations of passages of Lorem Ipsum available.'
                        }
                    ]
                }
            ],
            AccordionList: [
                {
                    id: 1,
                    accordions: [
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
                },
                {
                    id: 2,
                    accordions: [
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
                        },
                        {
                            image: '/src/app/assets/images/card-1.png',
                            title: 'Where can I get some?',
                            text: 'There are many variations of passages of Lorem Ipsum available.'
                        }
                    ]
                }
            ],
            SlideList: [
                {
                    id: 1,
                    slides: [
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
                    ]
                },
                {
                    id: 2,
                    slides: [
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
                        },
                        {
                            id: 4,
                            text: "4",
                        }
                    ]
                }
            ],
            TabList: [
                {
                    id: 1,
                    tabs: [
                        {
                            image: '/src/app/assets/images/cerebro.png',
                            title: "1",
                            subtitle: "one",
                            description: "It is a long established fact that a reader will.",
                        },
                        {
                            image: '/src/app/assets/images/cerebro.png',
                            title: "2",
                            subtitle: "two",
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                        }
                    ]
                },
                {
                    id: 2,
                    tabs: [
                        {
                            image: '/src/app/assets/images/cerebro.png',
                            title: "1",
                            subtitle: "one",
                            description: "It is a long established fact that a reader will.",
                        },
                        {
                            image: '/src/app/assets/images/cerebro.png',
                            title: "2",
                            subtitle: "two",
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                        },
                        {
                            image: '/src/app/assets/images/cerebro.png',
                            title: "3",
                            subtitle: "three",
                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                        }
                    ]
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
            Question02: [
                {
                    text: "Quais dessas tecnologias você já usou?",
                    alternatives: [
                        { text: "Vue.js", value: "vue" },
                        { text: "React", value: "react" },
                        { text: "Angular", value: "angular" },
                        { text: "Svelte", value: "svelte" }
                    ],
                    feedback: "Essas são algumas das principais libs/frameworks do mercado!"
                }
            ],
        }
    }

};

</script>