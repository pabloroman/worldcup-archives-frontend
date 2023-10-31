<template>
    <div v-if="pending">
    </div>
    <div v-else>
        <header style="background-color: #1b61bd;">
            <div class="max-w-screen-lg mx-auto py-10 px-6 lg:px-0">
                <div class="flex space-x-4">
                    <img class="h-12 rounded" :src="`/countries/${team.country.code}.svg`">
                    <h1 class="text-5xl font-bold tracking-tight text-white">{{ team.country.name }}</h1>
                </div>
             </div>
        </header>

        <div class="min-h-screen bg-center bg-white p-6 lg:p-0">
            <div class="max-w-screen-lg mx-auto py-10">

                <div class="grid lg:grid-cols-3 gap-4">

                    <div class="col-span-2">
                        <h3 class="text-2xl">Games</h3>
                        <GameList :games="team.matches"></GameList>
                    </div>

                    <div>
                        <h3 class="text-xl font-bold">Manager</h3>
                        <ul class="mt-4 divide-y divide-gray-100">
                            <li class="group relative flex items-start space-x-4 py-4" v-for="manager in team.managers">
                                {{ manager.name }}
                            </li>
                        </ul>

                        <h3 class="text-xl font-bold">Squad</h3>
                        <ul class="mt-4">
                            <li class="group relative flex items-start space-x-4 py-1" v-for="member in team.players">
                                <span>{{ member.shirt_number }}</span>
                                <span>{{ member.player }}</span>
                                <span>{{ member.position }}</span>
                            </li>
                        </ul>
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
        },
        tournament: {
            type: String,
            required: true
        }
    });
 
</script>