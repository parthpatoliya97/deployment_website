<script>
    export let makeMoney;
</script>

<section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-xl mx-auto text-center">
            <p class="text-sm font-semibold tracking-widest text-blue-600 uppercase">{makeMoney.label}</p>

            <h2 class="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{makeMoney.title}</h2>
        </div>

        <div class="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
            <div class="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
                {#each makeMoney.data as item}
                    <div class="flex items-start">
                        <svg class="flex-shrink-0 text-green-500 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                        </svg>
                        <div class="ml-5">
                            <h3 class="text-xl font-semibold text-black">{item.title}</h3>
                            <p class="mt-3 text-base text-gray-600">{item.description}</p>
                        </div>
                    </div>
                {/each}
            </div>
            <div class="lg:col-span-3">
                <img class="w-full rounded-lg shadow-xl" src="{makeMoney.image}" alt="{makeMoney.label}" loading="lazy" />
            </div>
        </div>
    </div>
</section>
