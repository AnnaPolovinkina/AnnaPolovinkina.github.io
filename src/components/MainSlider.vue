<template>
    <div id="carousel">
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
            class="carousel-banner"
        >
            <b-carousel-slide
                v-for="banner in banners"
                class="carousel-banner_slide"
            >
                <template v-slot:img>
                    <img
                        class="d-block img-fluid carousel-banner_slide_img"
                        width="1024"
                        height="480"
                        v-bind:src="banner.url"
                        alt="image slot"
                    >
                    <div class="carousel-banner_slide_text">
                        <div class="carousel-banner_slide_text-title">
                            {{banner.title}}
                        </div>
                        <div class="carousel-banner_slide_text-description">
                            {{banner.description}}
                        </div>

                        <router-link
                                v-bind:to="{name: 'catalog2', params: {fromSliderToCatalog: banner.title}}">
                            <button class="btn btn_yellow">Перейти в каталог: {{banner.title}}</button>
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
