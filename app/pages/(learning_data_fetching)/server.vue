<script setup>
    const name = 'Quadri'
    const job = 'Job'
    const {data: res} = await useFetch(`/info/${name}/${job}`)
</script>

<template>
    {{ res }}
</template>