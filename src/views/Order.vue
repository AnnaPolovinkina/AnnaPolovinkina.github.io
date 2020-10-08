<template>
    <div class="order" v-show="orderTotalCount">
        <h1>Оформление заказа</h1>
        <ValidationObserver v-slot="{ handleSubmit, reset }" ref="form">
            <form @submit.prevent="handleSubmit(onSubmit)">
                <div class="row">
                    <div class="col-md-4">
                        <h2>Контактная информация</h2>
                        <div class="order_contact-info">
                            <ValidationProvider name="name" rules="required|name">
                                <div slot-scope="{ errors }">
                                    <input type="text" placeholder="Имя" v-model="name">
                                    <p class="error">{{ errors[0] }}</p>
                                </div>
                            </ValidationProvider>
                            <ValidationProvider name="phone" rules="required|phone">
                                <div slot-scope="{ errors }">
                                    <div class="phone">
                                        <span class="input-group-addon"><span>+7</span></span>
                                        <input
                                                type="tel"
                                                v-model="phone"
                                                name="phone"
                                                id="phone"
                                                placeholder="(555) 555-5555"
                                                autocomplete="tel"
                                                maxlength="14"
                                                class="form-control"
                                                v-phone
                                                pattern="[(][0-9]{3}[)] [0-9]{3}-[0-9]{4}"
                                        />
                                    </div>

                                    <p class="error">{{ errors[0] }}</p>
                                </div>
                            </ValidationProvider>
                            <ValidationProvider name="email" rules="required|email">
                                <div slot-scope="{ errors }">
                                    <input type="text" placeholder="Электронная почта" v-model="email">
                                    <p class="error">{{ errors[0] }}</p>
                                </div>
                            </ValidationProvider>
                        </div>
                        <h3>Дата доставки</h3>
                        <Datepicker :value="date" :disabled-dates="state.disabledDates"></Datepicker>
                        <h3 class="mt20">Способ доставки</h3>
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
                                        zoom="16"
                                        style="width: 100%; height: 200px;"
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
                        <h3 class="mt20">Способ оплаты</h3>
                        <input id="card" type="radio" name="payment" value="card" v-model="radioPayment">
                        <label for="card">По карте</label>
                        <input id="cash" type="radio" name="payment" value="cash" v-model="radioPayment">
                        <label for="cash">Наличными</label>
                        <div class="delivery-content">
                            <div
                                    v-if="radioPayment == 'card'"
                                    class="delivery-content_number-card"
                            >
                                <!-- <input type="text" placeholder="Введите номер карты">-->
                                <input
                                        type="text"
                                        name="cardNumber"
                                        pattern="[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}"
                                        placeholder="XXXX XXXX XXXX XXXX"
                                        v-number
                                >
                            </div>
                        </div>
                    </div>

                    <div class="col-md-8">
                        <h3>Характеристики заказа</h3>
                        <div class="row order_caption">
                            <h4 class="col-md-4">Товар</h4>
                            <h4 class="col-md-4">Наименование</h4>
                            <h4 class="col-md-4">Количество</h4>
                        </div>
                        <div
                                class="order-item row"
                                v-for="position in thisOrder"
                        >
                            <div class="order-item_img col-md-4">
                                <img v-bind:src="position.img_full">
                            </div>
                            <div class="col-md-4">
                                <span>{{position.title}}</span>
                            </div>
                            <div class="col-md-4">
                                <span>{{position.count}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    Итоговое количество: <span class="total-sum">{{orderTotalCount}}</span>
                </div>
                <div class="cart-total">
                    Итоговая сумма: <span class="total-sum">{{orderTotalSum}}</span>
                </div>
                <button type="submit" class="btn btn_red">Заказать</button>
            </form>
        </ValidationObserver>
        <InfoPopup></InfoPopup>
    </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    import { yandexMap, ymapMarker } from 'vue-yandex-maps'
    import InfoPopup from '@/components/InfoPopup'
    import { ValidationObserver, ValidationProvider } from 'vee-validate';
    import { extend, validate } from 'vee-validate';
    import { required, email } from 'vee-validate/dist/rules';

    extend('required', {
        ...required,
        message: "Это поле обязательно для заполнения"
    });
    extend('name', value => {
        if (value.length < 3) {
            if (!(/^[а-яa-z]+$/i.test(value))) {
                return 'Имя должно состоять только из букв';
            }
            return 'Имя должно быть не менее 3 символов';
        } else {
            if (!(/^[а-яa-z]+$/i.test(value))) {
                return 'Имя должно состоять только из букв';
            }
            return true;
        }

    });
    extend('phone', value => {
        if (value.length != 14) {
            return 'Введите корректный номер телефона';
        } else {
            return true
        }
    });
    extend('email', {
        ...email,
        message: "Введите корректный адрес электронной почты"
    });

    export default {
        name: "Order",
        data() {
            return {
                thisOrder: [],
                orderTotalSum: '',
                orderTotalCount: 0,
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
                date: new Date(),
                name: '',
                phone: '',
                email: '',
                cardNumber: '',
                state: {
                    disabledDates: {
                        customPredictor: function(date) {
                            var todayDay = new Date();
                            todayDay.setDate(todayDay.getDate() - 1);
                            if(date < todayDay){
                                return true
                            }
                        }
                    }
                }
            }
        },
        components: {
            Datepicker: Datepicker,
            yandexMap: yandexMap,
            ymapMarker: ymapMarker,
            InfoPopup: InfoPopup,
            ValidationObserver: ValidationObserver,
            ValidationProvider: ValidationProvider,
        },
        mounted() { //Получение данных о заказе (товары, их количество и сумма)
            if (this.$route.params.cardData || typeof this.$route.params.cardData !== 'undefined') {
                this.$store.dispatch('changeOrder', this.$route.params.cardData);
            }
            this.thisOrder = this.$store.getters.getOrder;

            var allOrder = this.thisOrder,
                totalSum = 0,
                totalCount = 0;
            allOrder.forEach(function (elem, ind) {
                totalSum = totalSum + elem.price;
                totalCount = totalCount + elem.count;
            });
            this.orderTotalSum = Math.floor(totalSum * 100) / 100;
            this.orderTotalCount = totalCount;
        },
        watch: { //Отслеживание данных о заказе (товары, их количество и сумма)
            '$route' (to, from) {
                if (to.params.cardData || typeof to.params.cardData !== 'undefined') {
                    this.$store.dispatch('changeOrder', to.params.cardData);
                }
                this.thisOrder = this.$store.getters.getOrder;
                var allOrder = this.thisOrder,
                    totalSum = 0,
                    totalCount = 0;
                allOrder.forEach(function (elem, ind) {
                    totalSum = totalSum + elem.price;
                    totalCount = totalCount + elem.count;
                });
                this.orderTotalSum = Math.floor(totalSum * 100) / 100;
                this.orderTotalCount = totalCount;
            }
        },
        methods: {
            sendOrder() { //Отправка заказа (обнуление данных, появление всплывающего окна)
                if (this.thisOrder.length) {
                    this.$bvModal.show('bv-modal-example');
                    /*setTimeout(function () {
                        location.replace("/");
                    }, 3000);*/
                }
                this.$store.dispatch('resetOrder')
                this.$store.dispatch('resetCart')
                this.thisOrder = this.$store.getters.getOrder;
                this.orderTotalSum = 0;
                this.orderTotalCount = 0;
            },
            onSubmit () { //Отправка заказа (валидация, очистка полей формы)
                this.$refs.form.validate().then(success => {
                    if (!success) {
                        return;
                    }
                    this.sendOrder();
                    this.name = this.phone = this.email = '';
                    this.$nextTick(() => {
                        this.$refs.form.reset();
                    });
                });
            }
        },
        directives: {
            phone: { //Маска для номера телефона
                bind: function (el) {
                    el.oninput = function(e) {
                        if (!e.isTrusted) {
                            return;
                        }
                        var x = this.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
                        this.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
                        el.dispatchEvent(new Event('input'));
                    }
                }
            },
            number: { //Маска для номера дебетовой карты
                bind: function (el) {
                    el.oninput = function(e) {
                        var cardCode = this.value.replace(/[^\d]/g, '').substring(0, 16);
                        cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : '';
                        this.value = cardCode;
                        el.dispatchEvent(new Event('input'));
                    }

                }
            }
        }
    }
</script>