<template>
    <div class="router-view-container">
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" class="page" />
            </transition>
        </router-view>
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
