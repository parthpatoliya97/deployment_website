<script>
  export let tech;
</script>

<div class="bg-gray-900 py-6 sm:py-8">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
      <!-- Text section -->
      <div class="mx-auto w-full max-w-xl lg:mx-0">
        <h2 class="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
          {tech.title}
        </h2>
        <p class="mt-6 text-lg/8 text-gray-300">
          {tech.description}
        </p>
      </div>
      <!-- Logos section -->
      <div class="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
        {#each tech.data as logo}
          <img
            class="max-h-12 w-full object-contain object-left"
            src={logo.image}
            alt={logo.alt}
            width=105
            height=48
            loading="lazy"
          />
        {/each}
      </div>
    </div>
  </div>
</div>
