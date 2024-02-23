<template>
  <div class="flex justify-center">
    <div class="bg-statzy-dark text-statzy-white rounded-lg mx-auto p-4">
      <TitleComponent :title="'Server'" />
      <div class="grid grid-cols-2 gap-4">
        <div class="flex items-center">
          <p class="font-bold">Name</p>
          <input class="input text-black" placeholder="Name" />
        </div>
        <div class="flex items-center">
          <p class="font-bold">Hochverfügbar</p>
          <input class="inputCheck" type="checkbox" />
        </div>
        <div class="flex items-center">
          <p class="font-bold">Umgebung</p>
          <select class="input"></select>
        </div>
        <div class="flex items-center">
          <p class="font-bold">Verfügbarkeit</p>
          <input class="input" placeholder="Verfügbarkeit" />
        </div>
        <div class="flex items-center">
          <p class="font-bold">Netzwerk</p>
          <select class="input"></select>
        </div>
        <div class="flex items-center">
          <p class="font-bold">Vertraulichkeit</p>
          <input class="input" placeholder="Vertraulichkeit" />
        </div>
        <div class="flex items-center">
          <p class="font-bold">CPU</p>
          <select class="input"></select>
        </div>
        <div class="flex items-center">
          <p class="font-bold">Integrität</p>
          <input class="input" placeholder="Integrität" />
        </div>
        <div class="flex items-center">
          <p class="font-bold">Arbeitsspeicher</p>
          <select class="input"></select>
        </div>
        <div class="flex items-center">
          <p class="font-bold">Verwendungszweck</p>
          <select class="input"></select>
        </div>
        <div class="flex items-center">
          <p class="font-bold">Betriebssystem</p>
          <select class="input"></select>
        </div>
        <div class="flex items-center">
          <p class="font-bold">Anmerkungen</p>
          <input class="input" placeholder="Anmerkungen" />
        </div>
        <div class="flex items-center">
          <p class="font-bold">HD-Typ</p>
          <select class="input"></select>
        </div>
        <div class="flex items-center">
          <p class="font-bold">Bereitstellungszeitpunkt</p>
          <input class="inputDate" type="date" />
        </div>
        <div class="flex items-center">
          <p class="font-bold">HD-Kapazität</p>
          <input class="input" placeholder="Kapazität" />
        </div>
        <div class="flex items-center">
          <p class="font-bold">voraussichtl. Lieferzeit</p>
          <input class="input" placeholder="Lieferzeit" />
        </div>
        <div class="flex items-center">
          <p class="font-bold">Erreichbarkeit</p>
          <select class="input"></select>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  /*style*/
</style>