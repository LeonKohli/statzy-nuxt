<script lang="ts">
import type { NuxtLink } from '#build/components';

</script>

<template>
    <div class="rounded-lg mx-20 my-6 p-3 bg-slate-800 text-center font-bold" id="navbar">
        <span class="mx-6"> <NuxtLink to="/"> Statzy </NuxtLink> </span>
        <span class="mx-6"> <NuxtLink to="/fachverfahren"> Fachverfahren </NuxtLink> </span>
        <span class="mx-6"> <NuxtLink to="/login"> Login </NuxtLink> </span>
    </div>
</template>

<style>
    div#navbar 
    {
        color: white;
    }

</style>