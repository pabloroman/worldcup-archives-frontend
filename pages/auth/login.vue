<template>
    <div>
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>
    <AuthLogin/>

</template>
    
<script setup>
    definePageMeta({
        layout: 'auth-layout',
        middleware: ['guest']
    })
</script>
    