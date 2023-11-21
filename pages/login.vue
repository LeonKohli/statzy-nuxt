<template>
    <section>
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

            <!--<a href="#" class="flex items-center mb-6 text-2xl font-semibold text-white">
            <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
                Flowbite    
            </a>-->
            <div class="w-full bg-slate-700 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                        Sign in to your account
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
                            <input type="email" name="email" id="email" class="bg-slate-600 border border-slate-500 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-slate-600 border border-slate5-00 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-slate-600 rounded bg-slate-500 focus:ring-3 focus:ring-primary-300" required>
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="remember" class="text-white">Remember me</label>
                                </div>
                            </div>
                            <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
