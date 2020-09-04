<template>
    <div class="container">
         <app-header></app-header>
         <div class="row">
             <router-view></router-view>
         </div>
    </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
    components:  {
        AppHeader: Header
    },
    created() {
        this.$store.dispatch('initStocks');
    }
}
</script>

<style>

</style>