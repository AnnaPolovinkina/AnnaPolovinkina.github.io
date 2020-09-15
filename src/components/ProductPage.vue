<template>
    <div id="product-page">
        <div class="row">
            <div class="col-md-12">
                <h1 class="product-page_title">{{product.title}}</h1>
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
                <p class="product-page_description">{{product.description}}</p>
                <p class="product-page_category">Категория: {{product.category}}</p>
                <p class="product-page_price">Цена: {{product.price}}</p>
                <p class="product-page_sale">Скидка: {{product.isSale}}</p>
                <p class="product-page_date">Дата обновления: {{product.created}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "ProductPage",
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
                return result;
            }
        }
    }
</script>

<style scoped>
    .product-page_img img {
        width: 100%;
        height: auto;
    }
    .product-page_tags {
        text-align: left;
    }
    .product-page_tags-one {
        padding: 10px;
        background: #ccc;
        border-radius: 5px;
        font-weight: bold;
    }
    .product-page_tags-one+.product-page_tags-one {
        margin-left: 10px;
    }
</style>