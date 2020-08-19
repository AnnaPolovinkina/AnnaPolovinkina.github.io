<template>
    <div class="page-wrapper">
        <MainSlider></MainSlider>
        <a href="/catalog">
            Перейти в каталог
        </a>
        <h2>Товары со скидкой</h2>
        <div class="row">
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import MainSlider from '@/components/MainSlider'

    export default {
        name: "Home",
        components: {
            Header: Header,
            MainSlider: MainSlider,
        }
    }
</script>

<style scoped>
    .page-wrapper {
        display: flex;
        flex-direction: column;
    }
</style>