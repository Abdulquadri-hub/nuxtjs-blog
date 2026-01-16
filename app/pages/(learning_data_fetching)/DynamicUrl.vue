<script setup>
const productId = useRoute().params.id
const { data: product } = await useFetch(`https://fakestoreapi.com/products/${productId}`)


</script>

<template>

    <div class="card-body">
            <div class="card-title">{{ product.title }}</div>
            <div class="card-image"><img src="" alt="card image"></div>
            <div class="decription">{{ product.description }}</div>
            <div class="card-category">{{ product.catgeory }}</div>
    </div>

</template>



<style scoped>
.card {
    border: 1px solid red;
    background: #fff;
    border-radius: 5px;
    padding: 8px 12px;
    font-family: Verdana;
    box-shadow: 1px 3px #fff;
}
</style>