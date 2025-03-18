<script>
  export let services;
</script>

<div class="bg-white py-6 sm:py-8">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h2 class="text-base/7 font-semibold text-rose-600">{services.label}</h2>
      <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
        {services.title}
      </p>
      <p class="mt-6 text-lg/8 text-gray-600">
        {services.description}
      </p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
        {#each services.data as service}
          <div class={"flex flex-col rounded-xl p-8 shadow " + service.bgColor}>
            <dt class="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
              {@html service.icon}
              {service.title}
            </dt>
            <dd class="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
              <p class="flex-auto">{service.description}</p>
              <p class="mt-6">
                <a href="{service.link}" class="text-sm/6 font-semibold text-rose-600">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </dd>
          </div>
        {/each}
      </dl>
    </div>
  </div>
</div>
