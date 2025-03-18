<script>
    export let howItWorks;
</script>

<section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-base/7 font-semibold text-rose-600">{howItWorks.label}</h2>
            <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            {howItWorks.title}
            </p>
            <p class="mt-2 text-lg/8 text-gray-600">{howItWorks.description}</p>
        </div>

        <div class="relative mt-12 lg:mt-20">
            <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                <img class="w-full" src="/images/curved-dotted-line.svg" alt="" loading="lazy" />
            </div>

            <div class="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                {#each howItWorks.data as step}
                    <div>
                        <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                            <span class="text-xl font-semibold text-gray-700"> {step.id} </span>
                        </div>
                        <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">{step.title}</h3>
                        <p class="mt-4 text-base text-gray-600">{step.description}</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
