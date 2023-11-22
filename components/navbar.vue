<script lang="ts">
import type { NuxtLink } from '#build/components';

</script>

<template>
    <div class="p-3 mx-4 my-2 font-bold text-center rounded-lg bg-slate-800" id="navbar">
        <img src="/Statzy-Logo.png" class="w-40 h-auto place-content-center" v-if="!isLoginPage"/>
        <span class="mx-6"> <NuxtLink to="/"> Statzy </NuxtLink> </span>
        <span class="mx-6"> <NuxtLink to="/fachverfahren"> Fachverfahren </NuxtLink> </span>
        <span class="mx-6"> <NuxtLink to="/login"> Login </NuxtLink> </span>
    </div>
</template>

<style>
    div#navbar {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }

</style>