<template>
<!--    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>-->

    <b-modal id="bv-modal-example" hide-footer>
        <template v-slot:modal-title>
            <!--Using <code>$bvModal</code> Methods-->
        </template>
        <div class="d-block text-center">
            <h2>Спасибо!</h2>
            <h3>Ваш заказ принят!</h3>
        </div>
        <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Закрыть</b-button>
    </b-modal>
</template>

<script>
    export default {
        name: "InfoPopup"
    }
</script>

<style scoped>

</style>