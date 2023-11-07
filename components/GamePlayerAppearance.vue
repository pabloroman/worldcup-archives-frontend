<template>
    <div class="flex justify-between">
    <div class="space-x-2 lg:text-lg">
        <span class="font-bold">{{ player.number }}</span><span>{{ player.player }}</span><span class="text-sm text-slate-400" >{{ player.position }}</span>
    </div>
    <div v-for="booking in bookings.filter(booking => booking.home_team == home_team && player.player == booking.name)" class="flex items-center">
        <template v-if="booking.second_yellow_card">
            <div class="inline-block w-2 h-3 bg-yellow-400 rounded-sm"></div>&nbsp;<div class="inline-block w-2 h-3 bg-yellow-400 rounded-sm"></div>&nbsp;<span class="text-sm">{{ booking.minute }}</span>
        </template>
        <template v-else-if="booking.yellow_card">
            <div class="inline-block w-2 h-3 bg-yellow-400 rounded-sm"></div>&nbsp;<span class="text-sm">{{ booking.minute }}</span>
        </template>
        <template v-else-if="booking.red_card">
            <div class="inline-block w-2 h-3 bg-red-600 rounded-sm"></div>&nbsp;<span class="text-sm">{{ booking.minute }}</span>
        </template>
    </div>
    </div>
</template>

<script setup>

    const props = defineProps({
        player: {
            type: Object,
            required: true
        },
        home_team: {
            type: Boolean,
            required: true,
        },
        bookings: {
            type: Object,
            required: true
        },
    });
 
</script>