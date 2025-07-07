<template>
    <div id="lesson-01">
        <Header />
        <section class="section-01">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-01">
                        <h1>Lição</h1>
                        <p>Conteúdo da lição dinâmica.</p>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
</template>

<script>
    import Header from '../../components/layout/header.vue';
    import Footer from '../../components/layout/footer.vue';
    import './lesson.scss';

    export default {
        name: 'Lesson',
        components: {
            Header,
            Footer
        }
    };
</script>