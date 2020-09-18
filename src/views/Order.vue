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
                <input id="courier" type="radio" name="delivery" value="courier" v-model="radioDelivery">
                <label for="courier">Курьером</label>
                <input id="pickup" type="radio" name="delivery" value="pickup" v-model="radioDelivery">
                <label for="pickup">Самовывоз</label>
                <div class="delivery-content">
                    <div
                            v-if="radioDelivery == 'courier'"
                            class="delivery-content_address"
                    >
                        <input type="text" placeholder="Введите адрес доставки">
                    </div>
                    <div
                            v-if="radioDelivery == 'pickup'"
                            class="delivery-content_maps"
                    >
                        <yandex-map
                                :settings="settings"
                                :coords="[50.606471, 36.579291]"
                                zoom="17"
                                style="width: 600px; height: 400px;"
                        >
                            <ymap-marker
                                    marker-type="placemark"
                                    markerId="1"
                                    :coords="[50.606471, 36.579291]"
                                    hint-content='Бизнес-центр "Энергомаш"'
                                    :balloon="{header: baloonHeader, body: baloonBody, footer: baloonFooter}"
                                    :icon="{color: 'red', glyph: 'shopping'}"
                                    cluster-name="1"
                            ></ymap-marker>
                        </yandex-map>
                    </div>
                </div>
                <h3>Дата доставки</h3>
                <Datepicker :value="date"></Datepicker>
                <h3>Способ оплаты</h3>
                <input id="card" type="radio" name="payment" value="card" v-model="radioPayment">
                <label for="card">По карте</label>
                <input id="cash" type="radio" name="payment" value="cash" v-model="radioPayment">
                <label for="cash">Наличными</label>
                <div class="delivery-content">
                    <div
                            v-if="radioPayment == 'card'"
                            class="delivery-content_number-card"
                    >
                        <input type="text" placeholder="Введите номер карты">
                    </div>
                </div>
            </div>
        </div>
        <h2>Контактная информация</h2>
        <button class="btn btn_red" v-on:click="sendOrder">Заказать</button>
        <InfoPopup></InfoPopup>
    </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    import { yandexMap, ymapMarker } from 'vue-yandex-maps'
    import InfoPopup from '@/components/InfoPopup'

    export default {
        name: "Order",
        data() {
            return {
                thisOrder: [],
                orderTotalSum: '',
                radioDelivery: 'courier',
                radioPayment: 'card',
                settings: {
                    apiKey: '',
                    lang: 'ru_RU',
                    coordorder: 'latlong',
                    version: '2.1'
                },
                baloonHeader: 'ООО "ONE-TOUCH"',
                baloonBody: 'График работы: пн-пт 10:00 - 19:00',
                baloonFooter: 'Перерыв: с 14:00 до 15:00',
                date: new Date()
            }
        },
        components: {
            Datepicker: Datepicker,
            yandexMap: yandexMap,
            ymapMarker: ymapMarker,
            InfoPopup: InfoPopup,
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
                this.$bvModal.show('bv-modal-example')
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
        text-align: center !important;
    }
    .modal {
        display: flex !important;
        flex-direction: column;
        justify-content: center;
    }
</style>