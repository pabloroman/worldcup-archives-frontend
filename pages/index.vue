<template>

<div class="px-4 text-center sm:px-6 lg:px-8">
  <div class="py-12 border-b-4 border-neutral-100">
    <h1 class="text-4xl font-bold tracking-tight text-gray-900">The history of FIFA World Cup</h1>
  </div>

  <div v-if="!pending" class="mt-6">
    <table class="table-auto border-separate border-spacing-6 border-spacing-x-4 text-left">
      <thead>
        <tr>
          <th>Host country</th>
          <th>Winner</th>
          <th>Qualified teams</th>
          <th>Golden Ball (best player)</th>
          <th>Golden Boot (top scorer)</th>
          <th>Golden Glove (best keeper)</th>
          <th>Best Young Player</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="tournament in tournaments.data" class="py-2">
        <td class="align-top">
        <NuxtLink :to="'/tournaments/'+tournament.id">
          <div class="flex">{{ tournament.host_country }} {{ tournament.year }}&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3 opacity-40">
  <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
  <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
</svg></div>
        </NuxtLink>
        </td>
        <td class="align-top whitespace-nowrap">
          <NuxtLink :to="'/tournaments/'+tournament.id+'/teams/'+tournament.winner.code">
            <div class="font-bold flex space-x-2">
            <img class="h-6" :src="`countries/${tournament.winner.code}.svg`">
            <span>{{ tournament.winner.name }}</span>
          </div>
          </NuxtLink>
        </td>
        <td class="align-top">
          {{ tournament.count_teams }}
        </td>
        <td class="align-top">
          <TournamentAward :awards="tournament.awards" name="golden ball"></TournamentAward>
        </td>
        <td class="align-top">
          <TournamentAward :awards="tournament.awards" name="golden boot"></TournamentAward>
        </td>
        <td class="align-top">
          <TournamentAward :awards="tournament.awards" name="golden glove"></TournamentAward>
        </td>
        <td class="align-top">
          <TournamentAward :awards="tournament.awards" name="best young player"></TournamentAward>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</div>

</template>

<script setup>
  definePageMeta({
    layout: 'empty-layout',
  })

  const { API_BASE_URL } = useRuntimeConfig().public;
  
  const { data: tournaments, pending } = await useLazyFetch(
    API_BASE_URL + '/api/tournaments/male', {
      method: 'GET',
  });
</script>
