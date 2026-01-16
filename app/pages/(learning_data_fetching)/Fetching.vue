<script setup>
const { data: posts } = await 
useFetch('/posts', {
    baseURL: 'https://jsonplaceholder.typicode.com',
    method: 'post',
    body: {
        title: 'hey',
        body: 'hello',
        userID: 100
    }

})

</script>

<template>
    <div class="card-body">
    {{ posts }}
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