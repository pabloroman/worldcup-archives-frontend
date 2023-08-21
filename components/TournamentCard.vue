<template>
    <div>
    <NuxtLink :to="'/tournaments/'+tournament.id">{{ tournament.name }}</NuxtLink>
</div>
</template>

<script>
export default {
    props: ['tournament']
}
</script>