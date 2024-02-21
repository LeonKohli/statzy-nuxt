<template>
    <section>
        <div class="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="flex justify-center mt-4">
                <img src="/Statzy-Logo.png" class="w-32 md:w-48" alt="Statzy Logo" />
            </div>
            <div class="w-full max-w-md p-8 bg-slate-800 rounded-xl shadow-lg md:mt-0 xl:p-10 dark:bg-gray-700">
                <div class="space-y-6">
                    <h1 class="text-3xl font-bold leading-tight text-white md:text-4xl">Haben Sie Ihr Passwort vergessen?</h1>
                    <p class="text-white">Melden Sie sich beim Administrator.</p>
                    <p class="text-white">Nummer: BLA-BLA-BLA</p>
                    <div class="mt-4 flex justify-center">
                        <router-link to="/login" tag="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Zurück zum Login
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
