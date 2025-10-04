<template>
    <div class="modal fade" :id="'modal' + modal.id" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true" v-for="(modal, index) in modals" :key="'modal' + modal.id">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ modal.title }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>{{ modal.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        modals: Array
    }
}
</script>

<style>
.modal .modal-dialog {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin: auto;
}
</style>