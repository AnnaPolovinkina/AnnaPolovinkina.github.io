<template>
    <div class="product-page">
        <div class="row">
            <div class="col-md-12">
                <h1>{{product.title}}</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="product-page_img">
                    <img v-bind:src="product.img_full" alt="">
                </div>
            </div>
            <div class="col-md-8">
                <div class="product-page_tags">
                    <span class="product-page_tags-one" v-for="tag in product.tags">
                        {{tag}}
                    </span>
                </div>

                <div class="product-page_content">
                    <p class="product-page_description">{{product.description}}</p>
                    <p class="product-page_category">Категория: {{product.category}}</p>
                    <p class="product-page_price">Цена: {{product.price}} Р</p>
                    <p class="product-page_sale">Скидка: {{product.isSale}}</p>
                    <p class="product-page_date">Дата добавления: {{product.created}}</p>
                    <button class="btn btn_orange" v-on:click="addCardToCart">В корзину</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'

    export default {
        name: "ProductPage",
        data() {
            return {
                productCard: {}
            }
        },
        computed: {
            ...mapGetters(['allProducts']),
            product() {
                var result = {},
                    vm = this;
                this.allProducts.map(function (elem) {
                    if (elem.id == vm.$route.query.product) {
                        result = elem;
                    }
                });
                this.productCard = result;
                this.$set(this.productCard, 'count', 1);
                return result;
            }
        },
        methods: {
            ...mapActions(['addToCart']),
            addCardToCart() {
                this.addToCart(this.productCard);
            }
        }
    }
</script>

<style lang="scss">
    .product-page {
        &_img img {
            width: 100%;
            height: auto;
        }
        &_tags {
            text-align: left;
            margin-top: 20px;
            &-one {
                padding: 10px;
                background: #00796B;
                color: #FFFFFF;
                border-radius: 5px;
                font-weight: bold;
                &+.product-page_tags-one {
                    margin-left: 10px;
                }
            }
        }
    }
    .product-page_content {
        text-align: left;
        margin-top: 20px;
    }
</style>