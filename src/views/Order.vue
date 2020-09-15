<template>
    <div>
        <h1>Характеристики заказа</h1>
        <div>
            <p>Наименование товара</p>
            <span></span>
            <p>Количество товаров</p>
            <span></span>
            <p>Сумма</p>
            <span></span>
        </div>

        <h2>Способ доставки</h2>
        <h2>Дата доставки</h2>
        <h2>Способ оплаты</h2>
        <h2>Контактная информация</h2>
    </div>
</template>

<script>
    export default {
        name: "Order",
        computed: {
            order() {
                return this.$route.params.cardData
            }
        }
    }
</script>

<style scoped>

</style>