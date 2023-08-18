<template>
    <div id="app-layout">
        <GlobalAppHeader/>
        <main>
            <div class="min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white sm:flex sm:justify-center sm:items-center p-6">
                <div class="mx-auto max-w-screen-md relative">
                    <slot/>
                </div>
            </div>
        </main>
        <GlobalAppFooter/>
    </div>
</template>

<script setup>
</script>