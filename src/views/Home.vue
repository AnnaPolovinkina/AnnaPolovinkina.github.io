<template>
    <div class="page-wrapper">
        <MainSlider></MainSlider>
        <a href="/catalog">
            Перейти в каталог
        </a>
        <h2>Полученный JSON</h2>
        <div class="json">
            {{info}}
        </div>
    </div>
</template>

<script>
    import MainSlider from '@/components/MainSlider'
    import {store} from '../main.js';

    export default {
        name: "Home",
        components: {
            MainSlider: MainSlider,
        },
        data() {
            return {
                info: null
            }
        },
        mounted () {
            this.info = store.data;
        }
    }
</script>

<style scoped>
    .page-wrapper {
        display: flex;
        flex-direction: column;
    }
</style>