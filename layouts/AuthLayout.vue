<template>
    <div id="auth-layout">
        <main>
            <div class="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <div class="w-full max-w-sm space-y-10">
                    <slot/>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
useHead({
    htmlAttrs: {
        class: 'h-full bg-white'
    },
    bodyAttrs: {
        class: 'h-full'
    }
})
</script>