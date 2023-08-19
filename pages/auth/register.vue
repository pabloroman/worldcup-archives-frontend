<template>
    <div>
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create account</h2>
    </div>
    <AuthRegister/>

</template>
    
<script setup>
    definePageMeta({
        layout: 'auth-layout',
        middleware: ['guest']
    })
</script>
    