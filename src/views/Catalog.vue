<template>
    <div>
        <select v-model="filter">
            <option value="bags">Сумки</option>
            <option value="glasses">Очки</option>
            <option value="gloves">Перчатки</option>
            <option value="purses">Кошельки</option>
        </select>
        <div class="row">
            <ProductCard v-for="card in filteredCards" v-bind:card="card"></ProductCard>
        </div>
    </div>
</template>

<script>
    import ProductCard from '@/components/ProductCard'

    export default {
        name: 'Catalog',
        data() {
            return {
                bags: [
                    {id: 1, title: 'Продукт 1', description: 'Описание продукта 1', url: '/products/bags/1.jpg', sale: true},
                    {id: 2, title: 'Продукт 2', description: 'Описание продукта 2', url: '/products/bags/2.jpg', sale: false},
                    {id: 3, title: 'Продукт 3', description: 'Описание продукта 3', url: '/products/bags/3.jpg', sale: true},
                    {id: 4, title: 'Продукт 4', description: 'Описание продукта 4', url: '/products/bags/4.jpg', sale: false},
                    {id: 5, title: 'Продукт 5', description: 'Описание продукта 5', url: '/products/bags/5.jpg', sale: true},
                    {id: 6, title: 'Продукт 6', description: 'Описание продукта 6', url: '/products/bags/6.jpg', sale: false},
                    {id: 7, title: 'Продукт 7', description: 'Описание продукта 7', url: '/products/bags/7.jpg', sale: false},
                    {id: 8, title: 'Продукт 8', description: 'Описание продукта 8', url: '/products/bags/8.jpg', sale: false},
                    {id: 9, title: 'Продукт 9', description: 'Описание продукта 9', url: '/products/bags/9.jpg', sale: false},
                    {id: 10, title: 'Продукт 10', description: 'Описание продукта 10', url: '/products/bags/10.jpg', sale: false},
                    {id: 11, title: 'Продукт 11', description: 'Описание продукта 11', url: '/products/bags/11.jpg', sale: false},
                    {id: 12, title: 'Продукт 12', description: 'Описание продукта 12', url: '/products/bags/12.jpg', sale: false},
                    {id: 13, title: 'Продукт 13', description: 'Описание продукта 13', url: '/products/bags/13.jpg', sale: false},
                    {id: 14, title: 'Продукт 14', description: 'Описание продукта 14', url: '/products/bags/14.jpg', sale: false},
                    {id: 15, title: 'Продукт 15', description: 'Описание продукта 15', url: '/products/bags/15.jpg', sale: false},
                    {id: 16, title: 'Продукт 16', description: 'Описание продукта 16', url: '/products/bags/16.jpg', sale: false},
                    {id: 17, title: 'Продукт 17', description: 'Описание продукта 17', url: '/products/bags/17.jpg', sale: false},
                    {id: 18, title: 'Продукт 18', description: 'Описание продукта 18', url: '/products/bags/18.jpg', sale: false},
                    {id: 19, title: 'Продукт 19', description: 'Описание продукта 19', url: '/products/bags/19.jpg', sale: false},
                    {id: 20, title: 'Продукт 20', description: 'Описание продукта 20', url: '/products/bags/20.jpg', sale: false},
                ],
                glasses: [
                    {id: 1, title: 'Продукт 1', description: 'Описание продукта 1', url: '/products/glasses/1.jpg'},
                    {id: 2, title: 'Продукт 2', description: 'Описание продукта 2', url: '/products/glasses/2.jpg'},
                    {id: 3, title: 'Продукт 3', description: 'Описание продукта 3', url: '/products/glasses/3.jpg'},
                    {id: 4, title: 'Продукт 4', description: 'Описание продукта 4', url: '/products/glasses/4.jpg'},
                    {id: 5, title: 'Продукт 5', description: 'Описание продукта 5', url: '/products/glasses/5.jpg'},
                    {id: 6, title: 'Продукт 6', description: 'Описание продукта 6', url: '/products/glasses/6.jpg'},
                    {id: 7, title: 'Продукт 7', description: 'Описание продукта 7', url: '/products/glasses/7.jpg'},
                    {id: 8, title: 'Продукт 8', description: 'Описание продукта 8', url: '/products/glasses/8.jpg'},
                    {id: 9, title: 'Продукт 9', description: 'Описание продукта 9', url: '/products/glasses/9.jpg'},
                    {id: 10, title: 'Продукт 10', description: 'Описание продукта 10', url: '/products/glasses/10.jpg'},
                    {id: 11, title: 'Продукт 11', description: 'Описание продукта 11', url: '/products/glasses/11.jpg'},
                    {id: 12, title: 'Продукт 12', description: 'Описание продукта 12', url: '/products/glasses/12.jpg'},
                    {id: 13, title: 'Продукт 13', description: 'Описание продукта 13', url: '/products/glasses/13.jpg'},
                    {id: 14, title: 'Продукт 14', description: 'Описание продукта 14', url: '/products/glasses/14.jpg'},
                    {id: 15, title: 'Продукт 15', description: 'Описание продукта 15', url: '/products/glasses/15.jpg'},
                ],
                gloves: [
                    {id: 1, title: 'Продукт 1', description: 'Описание продукта 1', url: '/products/gloves/1.jpg'},
                    {id: 2, title: 'Продукт 2', description: 'Описание продукта 2', url: '/products/gloves/2.jpg'},
                    {id: 3, title: 'Продукт 3', description: 'Описание продукта 3', url: '/products/gloves/3.jpg'},
                    {id: 4, title: 'Продукт 4', description: 'Описание продукта 4', url: '/products/gloves/4.jpg'},
                    {id: 5, title: 'Продукт 5', description: 'Описание продукта 5', url: '/products/gloves/5.jpg'},
                    {id: 6, title: 'Продукт 6', description: 'Описание продукта 6', url: '/products/gloves/6.jpg'},
                    {id: 7, title: 'Продукт 7', description: 'Описание продукта 7', url: '/products/gloves/7.jpg'},
                    {id: 8, title: 'Продукт 8', description: 'Описание продукта 8', url: '/products/gloves/8.jpg'},
                    {id: 9, title: 'Продукт 9', description: 'Описание продукта 9', url: '/products/gloves/9.jpg'},
                    {id: 10, title: 'Продукт 10', description: 'Описание продукта 10', url: '/products/gloves/10.jpg'},
                ],
                purses: [
                    {id: 1, title: 'Продукт 1', description: 'Описание продукта 1', url: '/products/purses/1.jpg'},
                    {id: 2, title: 'Продукт 2', description: 'Описание продукта 2', url: '/products/purses/2.jpg'},
                    {id: 3, title: 'Продукт 3', description: 'Описание продукта 3', url: '/products/purses/3.jpg'},
                    {id: 4, title: 'Продукт 4', description: 'Описание продукта 4', url: '/products/purses/4.jpg'},
                    {id: 5, title: 'Продукт 5', description: 'Описание продукта 5', url: '/products/purses/5.jpg'},
                    {id: 6, title: 'Продукт 6', description: 'Описание продукта 6', url: '/products/purses/6.jpg'},
                    {id: 7, title: 'Продукт 7', description: 'Описание продукта 7', url: '/products/purses/7.jpg'},
                    {id: 8, title: 'Продукт 8', description: 'Описание продукта 8', url: '/products/purses/8.jpg'},
                    {id: 9, title: 'Продукт 9', description: 'Описание продукта 9', url: '/products/purses/9.jpg'},
                    {id: 10, title: 'Продукт 10', description: 'Описание продукта 10', url: '/products/purses/10.jpg'},
                    {id: 11, title: 'Продукт 11', description: 'Описание продукта 11', url: '/products/purses/11.jpg'},
                    {id: 12, title: 'Продукт 12', description: 'Описание продукта 12', url: '/products/purses/12.jpg'},
                    {id: 13, title: 'Продукт 13', description: 'Описание продукта 13', url: '/products/purses/13.jpg'},
                    {id: 14, title: 'Продукт 14', description: 'Описание продукта 14', url: '/products/purses/14.jpg'},
                    {id: 15, title: 'Продукт 15', description: 'Описание продукта 15', url: '/products/purses/15.jpg'},
                    {id: 16, title: 'Продукт 16', description: 'Описание продукта 16', url: '/products/purses/16.jpg'},
                    {id: 17, title: 'Продукт 17', description: 'Описание продукта 17', url: '/products/purses/17.jpg'},
                    {id: 18, title: 'Продукт 18', description: 'Описание продукта 18', url: '/products/purses/18.jpg'},
                    {id: 19, title: 'Продукт 19', description: 'Описание продукта 19', url: '/products/purses/19.jpg'},
                    {id: 20, title: 'Продукт 20', description: 'Описание продукта 20', url: '/products/purses/20.jpg'},
                    {id: 21, title: 'Продукт 21', description: 'Описание продукта 21', url: '/products/purses/21.jpg'},
                    {id: 22, title: 'Продукт 22', description: 'Описание продукта 22', url: '/products/purses/22.jpg'},
                    {id: 23, title: 'Продукт 23', description: 'Описание продукта 23', url: '/products/purses/23.jpg'},
                    {id: 24, title: 'Продукт 24', description: 'Описание продукта 24', url: '/products/purses/24.jpg'},
                    {id: 25, title: 'Продукт 25', description: 'Описание продукта 25', url: '/products/purses/25.jpg'},
                ],
                filter: 'bags'
            }
        },
        components: {
            ProductCard: ProductCard
        },
        computed: {
            filteredCards() {
                if (this.filter === 'bags') {
                    return this.bags
                }
                if (this.filter === 'glasses') {
                    return this.glasses
                }
                if (this.filter === 'gloves') {
                    return this.gloves
                }
                if (this.filter === 'purses') {
                    return this.purses
                }
            }
        }
    }

</script>

<style scoped>

</style>