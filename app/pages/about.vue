<script setup>
    const counter = useCounter()
</script>

<template>
    <div>
        Counter: {{ counter }}
        <button @click="counter++">Increment</button>
        <br>
        <NuxtLink to="/todo">Goto Todos Page</NuxtLink>
    </div>
</template>



<style lang="" scoped>

</style>