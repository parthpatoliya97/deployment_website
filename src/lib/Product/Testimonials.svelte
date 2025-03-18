<script>
    export let testimonials;
</script>

<div class="mx-auto max-w-4xl text-center">
    <h2 class="text-base/7 font-semibold text-indigo-600">{testimonials.label}</h2>
        <p class="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
          {testimonials.title}
        </p>
        <p class="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
            {testimonials.description}
        </p>
  </div>

<section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-6 lg:gap-10 sm:grid-cols-2 md:grid-cols-3">
            {#each testimonials.data as testimonial}
                <div class="flex flex-col bg-white border border-gray-200 rounded-md">
                    <div class="flex flex-col justify-between flex-1 p-8">
                        <div class="flex-1">
                            <blockquote>
                                <p class="text-lg text-gray-800">{testimonial.title}</p>
                            </blockquote>
                        </div>

                        <div class="mt-8">
                            <div class="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                            <div class="flex items-center">
                                <!-- <div class="ml-3"> -->
                                    <p class="text-base text-gray-800 truncate">For <span class="font-semibold">{testimonial.category}</span> by @{testimonial.username}</p>
                                <!-- </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
