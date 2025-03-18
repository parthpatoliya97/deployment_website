<script>
  export let products;
</script>

<div class="bg-white py-6 sm:py-8">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-base/7 font-semibold text-rose-600">{products.label}</h2>
      <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
        {products.title}
      </p>
      <p class="mt-2 text-lg/8 text-gray-600">
        {products.description}
      </p>
    </div>
    <div class="mx-auto mt-16 grid gap-8 max-w-2xl auto-rows-fr sm:mt-20 lg:mx-0 lg:max-w-none grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
      {#each products.data as product}
        <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80 shadow-lg">
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            class="absolute inset-0 -z-10 w-full h-full object-cover"
          >
          <div class="absolute inset-0 -z-10 bg-linear-to-t from-gray-900 via-gray-900/40"></div>
          <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-gray-900/10 ring-inset"></div>

          <!-- Title -->
          <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-2xl font-bold text-gray-300">
            {product.title}
          </div>
          <!-- Description -->
          <h3 class="mt-3 text-base text-white">
            <a href={product.link}>
              <span class="absolute inset-0"></span>
              {product.description}
            </a>
          </h3>
        </article>
      {/each}
    </div>
  </div>
</div>
