<template>
    <div>
        <nav>
            <router-link to="/">Dashboard</router-link>
            <router-link to="/lesson/1">Lição 1</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
    };
</script>