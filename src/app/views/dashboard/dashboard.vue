<template>
    <div id="dashboard">
        <video class="background" src="../../assets/images/modules-backgroundmp4.mp4"autoplay loop muted playsinline></video>
        <section class="section-01">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-01">
                        <h1>Bem-vindo ao seu LMS!</h1>
                        <slideModules :list="SlideList" :id="1" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import './dashboard.scss';
    
    /*-> COMPONENTS <-*/
    import slideModules from '../../components/template/Modules/modules.vue'

    export default {
        name: 'Dashboard',
        components: {
            slideModules,
        },
        data() {
            return {
                SlideList: [
                {
                    id: 1,
                    slides: [
                        {
                            id: 1,
                            title: 'Example Lesson',
                            image: '/src/app/assets/images/modulo-01.jpeg',
                            text: "1",
                        },
                        {
                            id: 2,
                            title: 'Test your lesson',
                            image: '/src/app/assets/images/modulo-02.jpeg',
                            text: "2",
                        },
                        {
                            id: 3,
                            title: 'Credits',
                            image: '/src/app/assets/images/modulo-03.jpeg',
                            text: "3",
                        }
                    ]
                }
            ],
            }
        }
    };
</script>
