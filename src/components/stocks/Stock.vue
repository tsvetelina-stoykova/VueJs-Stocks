<template>
    <div class= "container">
        <div class="row">
            <div class="col-sm">
            <div class="card">
                <div class="card-heading">
                    <h3 class="card-title">
                        {{stock.name}}
                        <small>price: {{stock.price}}</small>
                    </h3>
                </div>
                <div class="card-body">
                    <div class="pull-left">
                        <input
                                type="number"
                                class="form-control"
                                placeholder="Quantity"
                                v-model="quantity"
                                >
                    </div>
                    <div class="pull-right">
                        <button @click="buyStock" class="btn btn-success">Buy</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
     props: ['stock'],
    data(){
       return {
           quantity: 0
       }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            console.log(order);
            this.quantity = 0;
        }
    }
}
</script>