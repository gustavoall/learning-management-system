<template>
    <div id="dashboard">
        <video class="background" src="../../assets/images/modules-backgroundmp4.mp4"autoplay loop muted playsinline></video>
        <section class="section-01">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-01">
                        <h1>Bem-vindo ao seu LMS!</h1>
                        <Slide01 />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import './dashboard.scss';
    
    /*-> COMPONENTS <-*/
    import '../../components/template/01_Slide/swiper.scss';
    import Slide01 from '../../components/template/01_Slide/swiper.vue'

    export default {
        name: 'Dashboard',
        components: {
            Slide01,
        }
    };
</script>
