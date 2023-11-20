<script>
    let name = "Fachverfahren";
    let tag = "Tag";
    let id = "ID";

    const numbers = ["1", "2", "3", "4", "5" , "6", "7", "8", "9", "10"];
</script>

<template>
    <h1 class="text-4xl text-center"> Fachverfahren </h1>

    <div v-for="item in numbers" class="border-2 border-slate-700 rounded-lg w-56 text-center bg-slate-800 m-4 p-4">
        <span> {{ item }} </span>
        <span> {{ tag }} </span>
        <span id="id"> {{ id }} </span>
    </div>
</template>

<style>
    span#id 
    {
        display: none;
    }

</style>