<template>
    <div id="carousel">
        <h1>
            Accessories - интернет-магазин женских аксессуаров
        </h1>
        <h3>Категории товаров интернет-магазина</h3>
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
                            <h3>
                                {{banner.title}}
                            </h3>
                        </div>
                        <div class="carousel-banner_slide_text-description">
                            {{banner.description}}
                        </div>

                        <router-link
                                v-bind:to="{name: 'catalog2', params: {fromSliderToCatalog: banner.title}}">
                            <button class="btn btn_yellow">Перейти в каталог {{banner.title}}</button>
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
                    {id: 1, title: 'brown', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ', url: '/banner/1.jpg'},
                    {id: 2, title: 'blue', description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. ', url: '/banner/2.jpg'},
                    {id: 3, title: 'green', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.', url: '/banner/3.jpg'},
                    {id: 4, title: 'red', description: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. ', url: '/banner/4.jpg'}
                ]
            }
        }
    }
</script>
