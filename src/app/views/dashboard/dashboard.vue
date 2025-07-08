<template>
    <div id="dashboard">
        <section class="section-01">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-01">
                        <h1>Bem-vindo ao seu LMS!</h1>
                        <Modules />
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
    import Modules from '../../components/template/01_Slide/swiper.vue'

    export default {
        name: 'Dashboard',
        components: {
            Modules,
        }
    };
</script>
