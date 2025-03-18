<script>
  export let benefits;
</script>

<div class="bg-gray-50 py-6 sm:py-8">
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-base/7 font-semibold text-rose-600">{benefits.label}</h2>
            <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            {benefits.title}
            </p>
            <p class="mt-2 text-lg/8 text-gray-600">{benefits.description}</p>
      </div>
      <div class="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
        <div class="relative lg:row-span-2">
          <div class="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
            <div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
              <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">{benefits.data[0].title}</p>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">{benefits.data[0].description}</p>
            </div>
            <div class="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
              <div class="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                <img class="size-full object-cover object-top" src="{benefits.data[0].image}" alt="{benefits.data[0].title}" loading="lazy">
              </div>
            </div>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
        </div>
        <div class="relative max-lg:row-start-1">
          <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
            <div class="px-8 pt-8 sm:px-10 sm:pt-10">
              <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">{benefits.data[1].title}</p>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">{benefits.data[1].description}</p>
            </div>
            <div class="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
              <img class="w-full max-lg:max-w-xs" src="{benefits.data[1].image}" alt="{benefits.data[1].title}" loading="lazy">
            </div>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
        </div>
        <div class="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
          <div class="absolute inset-px rounded-lg bg-white"></div>
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
            <div class="px-8 pt-8 sm:px-10 sm:pt-10">
              <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">{benefits.data[2].title}</p>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">{benefits.data[2].description}</p>
            </div>
            <div class="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
              <img class="h-[min(152px,40cqw)] object-cover" src="{benefits.data[2].image}" alt="{benefits.data[2].title}" loading="lazy">
            </div>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
        </div>
        <div class="relative lg:row-span-2">
          <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
            <div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
              <p class="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">{benefits.data[3].title}</p>
              <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">{benefits.data[3].description}</p>
            </div>
            <div class="relative min-h-[30rem] w-full grow">
              <div class="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                <img class="size-full object-cover object-top" src="{benefits.data[3].image}" alt="{benefits.data[3].title}" loading="lazy">
              </div>
            </div>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
        </div>
      </div>
    </div>
  </div>
  