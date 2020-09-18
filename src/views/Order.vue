<template>
    <div class="order">
        <h1>Оформление заказа</h1>
        <div class="row">
            <div class="col-md-6">
                <h3>Характеристики заказа</h3>
                <div
                        class="order-item"
                        v-for="position in thisOrder"
                >
                    <div class="order-item_img">
                        <img v-bind:src="position.img_full">
                    </div>
                    <div class="order-item_content">
                        <div>
                            <p>Наименование товара</p>
                            <span>{{position.title}}</span>
                        </div>
                        <div>
                            <p>Количество товаров</p>
                            <span>{{position.count}}</span>
                        </div>
                    </div>
                </div>
                <div class="order_total-sum">
                    <p>Сумма</p>
                    <span>{{orderTotalSum}}</span>
                </div>
            </div>

            <div class="col-md-6">
                <h3>Способ доставки</h3>
                <input id="courier" type="radio" name="delivery" v-model="radioDelivery">
                <label for="courier">Курьером</label>
                <input id="pickup" type="radio" name="delivery" v-model="radioDelivery">
                <label for="pickup">Самовывоз</label>
                <div class="delivery-content">
                    <div class="delivery-content_address">
                        <input type="text" placeholder="Введите адрес доставки">
                    </div>
                    <div class="delivery-content_maps">

                    </div>
                </div>
                <h3>Дата доставки</h3>
                <Datepicker></Datepicker>
                <h3>Способ оплаты</h3>
                <input id="card" type="radio" name="payment" v-model="radioPayment">
                <label for="card">По карте</label>
                <input id="cash" type="radio" name="payment" v-model="radioPayment">
                <label for="cash">Наличными</label>
                <div class="delivery-content">
                    <div class="delivery-content_number-card">
                        <input type="text" placeholder="Введите номер карты">
                    </div>
                </div>
            </div>
        </div>
        <h2>Контактная информация</h2>
        <button v-on:click="sendOrder">Заказать</button>
    </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    // import Datepicker from "vuejs-datepicker/src/components/Datepicker";

    export default {
        name: "Order",
        components: {Datepicker},
        data() {
            return {
                thisOrder: [],
                orderTotalSum: '',
                radioDelivery: 'courier',
                radioPayment: 'card'
            }
        },
        component: {
            Datepicker: Datepicker
        },
        mounted() {
            if (this.$route.params.cardData || typeof this.$route.params.cardData !== 'undefined') {
                this.$store.dispatch('changeOrder', this.$route.params.cardData);
            }
            this.thisOrder = this.$store.getters.getOrder;

            var allOrder = this.thisOrder,
                totalSum = 0;
            allOrder.forEach(function (elem, ind) {
                totalSum = totalSum + elem.price;
            });
            this.orderTotalSum = totalSum;
        },
        watch: {
            '$route' (to, from) {
                if (to.params.cardData || typeof to.params.cardData !== 'undefined') {
                    this.$store.dispatch('changeOrder', to.params.cardData);
                }
                this.thisOrder = this.$store.getters.getOrder;
                var allOrder = this.thisOrder,
                    totalSum = 0;
                allOrder.forEach(function (elem, ind) {
                    totalSum = totalSum + elem.price;
                });
                this.orderTotalSum = totalSum;
            }
        },
        methods: {
            sendOrder() {
                this.$store.dispatch('resetOrder')
                this.$store.dispatch('resetCart')
                this.thisOrder = this.$store.getters.getOrder;
                this.orderTotalSum = 0;
            }
        }


    }
</script>

<style>
    .order-item_content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .order-item_img img {
        width: 75px;
        height: auto;
    }
    .vdp-datepicker {
        text-align: center;
    }
</style>