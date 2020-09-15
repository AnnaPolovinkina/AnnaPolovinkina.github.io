<template>
    <div
            id="productCard"
            class="col-lg-4 col-md-6 col-xs-12"
            v-bind:class="slideClass"
    >
        <a class="card-wrapper">
            <div class="card-picture">
                <img v-bind:src="card.img_preview">
                <!--<div class="card-overlay">
                    <button type="button" @click="$bvModal.show('bv-modal-example')" class="btn card-btn js__popup">Подробнее</button>
                </div>-->
            </div>
            <div class="card-description">
                <h5 class="card-title">{{card.title}}</h5>
                <p class="card-price">{{card.price}}</p>
                <p>
                    <button class="btn card-btn show-more" v-on:click="openProductPage">Подробнее</button>
                </p>
                <p>
                    <button class="btn card-btn add-cart" v-on:click="addCardToCart">В корзину</button>
                </p>
                <div v-if="card.isSale" class="sale">
                    <span>Скидка</span>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "ProductCard",
        props: {
            card: {
                type: Object,
                required: true
            },
            slideClass: {
                type: String
            }
        },
        methods: {
            ...mapActions(['addToCart']),
            addCardToCart() {
                this.addToCart(this.card);
            },
            openProductPage() {
                this.$router.push({name: 'product', query: {'product': this.card.id}});
            }
        },
        mounted() {
            this.$set(this.card, 'count', 1)
        }
    }
</script>

<style scoped>
    .card-wrapper {
        display: block;
        border: 2px solid #ef98aa;
        background: #FFFFFF;
        border-radius: 5px;
        margin-top: 20px;
        color: black;
    }
    .card-wrapper:hover {
        text-decoration: none;
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
    .card-price {
        position: relative;
        display: inline-block;
    }
    .card-price:before {
        content: "₽";
        display: inline;
        position: absolute;
        top: 0;
        left: auto;
        right: -13px;
    }
    .add-cart {
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
    .show-more {
        background: gray;
        color: #FFFFFF;
    }
    .card-wrapper:hover .card-picture img {
        transform: scale(1.3);
    }
    .card-btn:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
</style>