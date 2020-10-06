<template>
    <div id="card"
        class="card-product col-lg-4 col-md-6 col-xs-12"
        v-bind:class="slideClass"
    >
        <a class="card-product_wrapper">
            <div class="card-product_picture">
                <img v-bind:src="card.img_preview">
            </div>
            <div class="card-product_description">
                <h5 class="card_title">{{card.title}}</h5>
                <p class="card_price">{{card.price}}</p>
                <p>
                    <button
                        class="btn btn_yellow"
                        v-on:click="openProductPage"
                    >
                        Подробнее
                    </button>
                </p>
                <p>
                    <button
                        class="btn btn_orange"
                        v-on:click="addCardToCart"
                    >
                        В корзину
                    </button>
                </p>
                <div
                    v-if="card.isSale"
                    class="sale"
                >
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
        data() {
          return {
              thisCard: this.card
          }
        },
        props: {
            card: {
                type: Object,
                required: true
            },
            slideClass: {
                type: String
            }
        },
        watch: { //Отслеживание данных о товаре
            card: function (newCard) {
                this.$set(this.card, 'count', 1);
                this.thisCard = newCard;
            }
        },
        methods: {
            ...mapActions(['addToCart']),
            addCardToCart() { //Добавление товара в корзину
                this.addToCart(this.thisCard);
            },
            openProductPage() { //Открытие детальной страницы товара
                this.$router.push({name: 'product', query: {'product': this.card.id}});
            }
        },
        mounted() { //Получение данных о товаре и установка начального количества товара
            this.$set(this.card, 'count', 1);
            this.thisCard = this.card;
        }
    }
</script>