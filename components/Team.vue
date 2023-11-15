<template>
    <div v-if="pending">
    </div>
    <div v-else>
        <header class="bg-gradient-to-br from-[#0E1E2C] from-20% via-[#000000] via-30% to-[#283B45]">
            <div class="max-w-screen-lg mx-auto py-10 px-6 lg:px-0">
                <div class="text-white opacity-75"><NuxtLink :to="`/tournaments/${team.tournament.id}`">{{ team.tournament.name }}</NuxtLink></div>
                <div class="flex items-center space-x-4 mt-2">
                    <img class="h-8 lg:h-12 rounded" :src="`/countries/${team.country.code}.svg`">
                    <h1 class="text-4xl lg:text-5xl font-bold uppercase text-white shadow-md">{{ team.country.name }}</h1>
                </div>
             </div>
        </header>

        <div class="min-h-screen bg-center bg-white p-6 lg:p-0">
            <div class="max-w-screen-lg mx-auto lg:py-10">

                <div class="grid lg:grid-cols-3 gap-6 lg:gap-8 divide-y divide-gray-300 lg:divide-none">

                    <div class="lg:col-span-2">
                        <h3 class="text-xl uppercase text-slate-400">Games</h3>
                        <GameList :games="team.matches"></GameList>
                    </div>
                    <div class="lg:col-span-1 pt-6 lg:pt-0">
                        <div class="flex flex-col space-y-6 divide-y divide-gray-300">
                            <div>
                                <h3 class="text-xl uppercase text-slate-400">Manager</h3>
                                <ul class="mt-1">
                                    <li class="group relative flex items-start space-x-4 py-1 text-lg" v-for="manager in team.managers">
                                        {{ manager.name }}
                                    </li>
                                </ul>
                            </div>
                            <div class="pt-6">
                                <h3 class="text-xl uppercase text-slate-400">Squad</h3>
                                <div>
                                <ul class="mt-1">
                                    <li class="group relative flex items-center space-x-4 py-1 text-lg" v-for="member in team.players">
                                        <span class="font-bold">{{ member.shirt_number }}</span>
                                        <span>{{ member.player }}</span>
                                        <span class="text-slate-400 text-sm">{{ member.position }}</span>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    const props = defineProps({
        team: {
            type: Object,
            required: true
        }
    });
 
</script>