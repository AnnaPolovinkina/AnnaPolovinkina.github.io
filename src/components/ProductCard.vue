<template>
    <div id="productCard" class="col-lg-4 col-md-6 col-xs-12">
        <a class="card-wrapper">
            <div class="card-picture">
                <img v-bind:src="card.url">

                <div class="card-overlay">
                    <a href="@/assets/banner.jpg" data-fancybox="gallery" class="btn card-btn js__popup">Подробнее</a>
                </div>
            </div>
            <div class="card-description">
                <h5 class="card-title">{{card.title}}</h5>
                <p class="card-text">{{card.description}}</p>
                <a href="#" class="btn card-btn">В корзину</a>

                <div v-if="card.sale" class="sale">
                    <span>Скидка</span>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        props: {
            card: {
                type: Object,
                required: true
            }
        },
        name: "ProductCard"
    }
</script>

<style scoped>
    .card-wrapper {
        display: block;
        border: 2px solid #ef98aa;
        background: #FFFFFF;
        border-radius: 5px;
        margin-top: 20px;
    }
    .card-picture {
        height: 200px;
        overflow: hidden;
        position: relative;
    }
    img {
        width: auto;
        height: 100%;
        transition: 0.5s ease-in-out all;
    }
    .card-title {
        font-weight: 700;
    }
    .card-description {
        padding: 15px;
        text-align: left;
        position: relative;
        overflow: hidden;
    }
    .card-btn {
        background-color: #ef98aa;
        color: #FFFFFF;
    }
    .sale {
        position: absolute;
        width: 150px;
        height: 100%;
        top: 0;
        left: auto;
        right: 0;
    }
    .sale span {
        display: inline-block;
        width: 200px;
        height: 45px;
        background: red;
        color: #FFF;
        text-align: center;
        position: absolute;
        line-height: 45px;
        font-size: 16px;
        font-weight: 700;
        top: auto;
        bottom: 8px;
        right: -66px;
        transform: rotate(-45deg);
    }
    .card-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        text-align: center;
    }
    .card-overlay a {
        display: inline-block;
        width: auto;
        height: 38px;
        background: gray;
        color: #FFFFFF;
        position: relative;
        top: calc(50% - 19px);
        opacity: 0;
        transition: 0.2s ease-in-out all;
    }
    .card-wrapper:hover .card-overlay a {
        opacity: 1;
    }
    .card-wrapper:hover .card-picture img {
        transform: scale(1.3);
    }
    a.btn:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
</style>