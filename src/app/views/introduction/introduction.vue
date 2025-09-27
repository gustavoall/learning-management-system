<template>
    <div id="Introduction">
        <section class="section-01">
            <div class="container container-01">
                <div class="row row-01">
                    <div class="col-lg-10 offset-lg-1 col-01">
                        <div class="element"></div>
                        <h2>Falaa Dev!</h2>
                        <p>Gustavo aquii, passando pra falar brevemente do projeto Front-End em <strong>Vue</strong>,
                            foi desenvolvido para atender produções de <strong>LMS</strong> em larga escala e com prazos
                            curtos.</p>
                        <p>A arquitetura prioriza <strong>alta escalabilidade, compatibilidade entre
                                dispositivos</strong> e facilidade de implementação.</p>
                        <p>Basta montar o roteiro do curso e colocar a mão na massa para transformar conteúdo em uma
                            experiência de aprendizado moderna e responsiva.</p>
                    </div>
                </div>
                <div class="row row-02">
                    <div class="col-lg-10 offset-lg-1 col-01">
                        <router-link to="/dashboard" class="btn">Ir para Dashboard</router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import './introduction.scss';

export default {
    name: 'Introduction',
}
</script>
