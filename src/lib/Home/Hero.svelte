<script>
  export let hero;
</script>

<div class="bg-white">
  <main>
    <div class="relative isolate">
      <!-- Background SVG reduced to 32rem in height -->
      <svg
        class="absolute inset-x-0 top-0 -z-10 h-[32rem] w-full stroke-gray-200 [mask-image:radial-gradient(16rem_16rem_at_center,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern id="pattern-hero" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
          <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
        </svg>
        <rect width="100%" height="100%" stroke-width="0" fill="url(#pattern-hero)" />
      </svg>

      <!-- Second background element scaled down -->
      <div class="absolute top-0 right-0 left-1/2 -z-10 -ml-12 transform-gpu overflow-hidden blur-3xl lg:ml-12 xl:ml-24" aria-hidden="true">
        <div
          class="aspect-[801/1036] w-[25rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"
        ></div>
      </div>

      <!-- Main content container with reduced vertical padding -->
      <div class="overflow-hidden">
        <div class="mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-32 lg:px-8">
          <div class="mx-auto max-w-2xl gap-x-10 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <!-- Text content -->
            <div class="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                {hero.title}
              </h1>
              <p class="mt-4 text-lg font-medium text-pretty text-gray-500 sm:max-w-md sm:text-xl lg:max-w-none">
                {hero.description}
              </p>
              <div class="mt-8 flex items-center gap-x-6">
                <a href="/" class="rounded-md bg-rose-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-rose-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600">
                  Get started
                </a>
                <a href="/" class="text-sm/6 font-semibold text-gray-900">
                  Live demo <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <!-- Images area (columns scaled down) -->
            <div class="mt-10 flex justify-end gap-6 sm:-mt-24 sm:justify-start sm:pl-10 lg:mt-0 lg:pl-0">
              <div class="ml-auto w-36 flex-none space-y-6 pt-16 sm:ml-0 sm:pt-40 lg:order-last lg:pt-20 xl:order-none xl:pt-40">
                <div class="relative">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=264&q=80"
                    alt=""
                    class="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    loading="lazy"
                  >
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset"></div>
                </div>
              </div>
              <div class="mr-auto w-36 flex-none space-y-6 sm:mr-0 sm:pt-28 lg:pt-20">
                <div class="relative">
                  <img
                    src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=264&q=80"
                    alt=""
                    class="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    loading="lazy"
                  >
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset"></div>
                </div>
                <div class="relative">
                  <img
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=198&h=264&q=80"
                    alt=""
                    class="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    loading="lazy"
                  >
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset"></div>
                </div>
              </div>
              <div class="w-36 flex-none space-y-6 pt-16 sm:pt-0">
                <div class="relative">
                  <img
                    src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=200&h=264&q=80"
                    alt=""
                    class="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    loading="lazy"
                  >
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset"></div>
                </div>
                <div class="relative">
                  <img
                    src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=264&q=80"
                    alt=""
                    class="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    loading="lazy"
                  >
                  <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
