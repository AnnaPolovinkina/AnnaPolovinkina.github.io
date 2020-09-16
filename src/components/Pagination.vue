<template>
    <div id="pagination">
        <button v-on:click="decrementPage" class="prev">
            Предыдущая
        </button>
        <div class="page-numbers">
            <div
                    v-for="page in pages"
                    v-on:click="pageClick(page)"
                    class="page-numbers_one"
                    v-bind:class="{'page_selected': page === pageNumber}"
            >{{page}}</div>
        </div>
        <button v-on:click="incrementPage" class="prev">
            Следующая
        </button>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        props: {
            pages: {
                type: Number
            },
            pageNumber: {
                type: Number
            }
        },
        methods: {
            pageClick(page) {
                this.$emit('changePage', page);
                this.$store.dispatch('changePage', page)
            },
            incrementPage() {
                this.$emit('incrementPage');
            },
            decrementPage() {
                this.$emit('decrementPage');
            }
        }
    }
</script>

<style scoped>
    #pagination {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .page-numbers {
        margin: 0 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .page-numbers_one {
        padding: 5px 10px;
        background: #FFFFFF;
        border: 2px solid #ef98aa;
        border-radius: 5px;
    }
    .page-numbers_one:hover, button:hover {
        cursor: pointer;
        background: #CCCCCC;
    }
    .page-numbers_one+.page-numbers_one {
        margin-left: 10px;
    }
    .page_selected {
        background: red;
    }
</style>