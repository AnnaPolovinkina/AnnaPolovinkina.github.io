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
                        <button>Перейти в каталог</button>
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
                    {id: 1, title: 'Сумки', description: 'Клевые сумки', url: '/banner/1.jpg'},
                    {id: 2, title: 'Очки', description: 'Офигенные очки', url: '/banner/2.jpg'},
                    {id: 3, title: 'Перчатки', description: 'Классные перчатки', url: '/banner/3.jpg'},
                    {id: 4, title: 'Кошельки', description: 'Крутые кошельки', url: '/banner/4.jpg'}
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