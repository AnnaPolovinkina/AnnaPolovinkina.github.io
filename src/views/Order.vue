<template>
    <div>
        <h1>Оформление заказа</h1>
        <div class="row">
            <div class="col-md-6">
                <h3>Характеристики заказа</h3>
                <div class="order-item" v-for="position in thisOrder">
                    <div class="order-item_img">
                        <img v-bind:src="position.img_full">
                    </div>
                    <div class="order-img_content">
                        <p>Наименование товара</p>
                        <span>{{position.title}}</span>
                        <p>Количество товаров</p>
                        <span>{{position.count}}</span>
                    </div>
                </div>

                <div class="order_total-sum">
                    <p>Сумма</p>
                    <span>{{orderTotalSum}}</span>
                </div>
            </div>

            <div class="col-md-6">
                <h3>Способ доставки</h3>
                <input id="courier" type="radio" name="delivery">
                <label for="courier">Курьером</label>
                <input id="pickup" type="radio" name="delivery">
                <label for="pickup">Самовывоз</label>
                <h3>Дата доставки</h3>
                <Datepicker></Datepicker>
                <h3>Способ оплаты</h3>
                <input id="card" type="radio" name="payment">
                <label for="card">По карте</label>
                <input id="cash" type="radio" name="payment">
                <label for="cash">Наличными</label>
            </div>
        </div>


        <h2>Контактная информация</h2>
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
                orderTotalSum: ''
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

        }
    }
</script>

<style scoped>
    .order-item {
        background: #FFFFFF;
        border: 2px solid #ef98aa;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        overflow: hidden;
    }
    .order-item+.order-item {
        margin-top: 15px;
    }
    img {
        width: 100px;
        height: auto;
    }
</style>