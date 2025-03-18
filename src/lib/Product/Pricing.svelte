<script>
  export let pricing;
</script>

<div class="bg-white py-6 sm:py-8">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-4xl text-center">
      <h2 class="text-base/7 font-semibold text-indigo-600">{pricing.label}</h2>
      <p class="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
        {pricing.title}
      </p>
    </div>
    <p class="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
      {pricing.description}
    </p>
    <div class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {#each pricing.data as plan}
        <div class={`flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 ${plan.extraClasses} xl:p-10`}>
          <div>
            <div class="flex items-center justify-between gap-x-4">
              <h3 id={plan.tierId} class="text-lg/8 font-semibold {plan.popular ? 'text-indigo-600' : 'text-gray-900'}">
                {plan.title}
              </h3>
              {#if plan.popular}
                <p class="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs/5 font-semibold text-indigo-600">
                  Most popular
                </p>
              {/if}
            </div>
            <p class="mt-4 text-sm/6 text-gray-600">{plan.description}</p>
            <p class="mt-6 flex items-baseline gap-x-1">
              <span class="text-4xl font-semibold tracking-tight text-gray-900">{plan.price}</span>
            </p>
            <ul role="list" class="mt-8 space-y-3 text-sm/6 text-gray-600">
              {#each plan.features as feature}
                <li class="flex gap-x-3">
                  {#if feature.available}
                    <!-- SVG for available feature -->
                    <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                    </svg>
                  {:else}
                    <!-- SVG for unavailable feature -->
                    <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" clip-rule="evenodd" />
                    </svg>
                  {/if}
                  {feature.text}
                </li>
              {/each}
            </ul>
          </div>
          <a
            href={plan.link}
            target="_blank"
            aria-describedby={plan.tierId}
            class={`mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold ${plan.popular
              ? 'bg-indigo-600 text-white shadow-xs hover:bg-indigo-500'
              : 'text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300'} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
          >
            Buy Now
          </a>
        </div>
      {/each}
    </div>
  </div>
</div>
