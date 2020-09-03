<template>
    <div class="page-wrapper">
        <MainSlider></MainSlider>
        <a href="/catalog">
            Перейти в каталог
        </a>
        <a href="/catalog2">
            Перейти в каталог 2
        </a>
        <a href="/cart">
            Перейти в корзину
        </a>
    </div>
</template>

<script>
    import MainSlider from '@/components/MainSlider'

    export default {
        name: "Home",
        components: {
            MainSlider: MainSlider,
        },
    }
</script>

<style scoped>
    .page-wrapper {
        display: flex;
        flex-direction: column;
    }
</style>