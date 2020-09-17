<template>
    <div class="pagination">
        <button
            v-on:click="decrementPage"
            class="btn btn_yellow prev">
            Предыдущая
        </button>
        <div class="pagination_numbers">
            <div
                v-for="page in pages"
                v-on:click="pageClick(page)"
                class="pagination_numbers_one"
                v-bind:class="{'selected': page === pageNumber}"
            >{{page}}</div>
        </div>
        <button
            v-on:click="incrementPage"
            class="btn btn_yellow prev">
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