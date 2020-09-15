<template>
    <div id="mainCarousel">
        <h2>Категории товаров интернет-магазина</h2>
        <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#FFFFFF"
                img-width="1024"
                img-height="480"
                style="border: 2px solid #ef98aa; border-radius: 5px; overflow: hidden;"
        >
            <b-carousel-slide
                    v-for="banner in banners" class="banner-slide"
            >
                <template v-slot:img>
                    <img
                            class="d-block img-fluid banner-slide__img"
                            width="1024"
                            height="480"
                            v-bind:src="banner.url"
                            alt="image slot"
                    >
                    <div class="banner-slide__text">
                        <div class="banner-slide__text-title">
                            {{banner.title}}
                        </div>
                        <div class="banner-slide__text-descripttion">
                            {{banner.description}}
                        </div>

                        <router-link v-bind:to="{name: 'catalog2', params: {fromSliderToCatalog: banner.title}}">
                            <button>Перейти в каталог: {{banner.title}}</button>
                        </router-link>

                    </div>
                </template>
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
    export default {
        name: "MainSlider",
        data() {
            return {
                slide: 0,
                sliding: null,
                banners: [
                    {id: 1, title: 'brown', description: 'Клевые сумки', url: '/banner/1.jpg'},
                    {id: 2, title: 'blue', description: 'Офигенные кошельки', url: '/banner/2.jpg'},
                    {id: 3, title: 'green', description: 'Классные очки', url: '/banner/3.jpg'},
                    {id: 4, title: 'red', description: 'Крутые перчатки', url: '/banner/4.jpg'}
                ]
            }
        }
    }
</script>

<style scoped>
    .banner-slide {
        height: 300px;
    }
    .banner-slide__img {
        width: 50%;
        height: 100%;
        object-fit: contain;
        float: left;
    }
    .banner-slide__text {
        width: 50%;
        height: 100%;
        float: left;
    }
</style>