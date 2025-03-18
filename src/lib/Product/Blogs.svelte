<script>
  export let blogs;
</script>

<div class="bg-white py-6 sm:py-8">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-base/7 font-semibold text-rose-600">{blogs.label}</h2>
      <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
        {blogs.title}
      </p>
      <p class="mt-2 text-lg/8 text-gray-600">
        {blogs.description}
      </p>
    </div>
    <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {#each blogs.data as blog}
        <article class="flex flex-col items-start justify-between">
          <div class="relative w-full">
            <img
              src={blog.image}
              alt={blog.alt}
              class="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2 shadow"
              loading="lazy"
            >
            <div class="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset"></div>
          </div>
          <div class="max-w-xl">
            <div class="mt-8 flex items-center gap-x-4 text-xs">
              <time datetime={blog.date} class="text-gray-500">{blog.dateDisplay}</time>
              <span class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                {blog.category}
              </span>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                <a href={blog.link}>
                  <span class="absolute inset-0"></span>
                  {blog.title}
                </a>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600">{blog.excerpt}</p>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              <img
                src={blog.author.image}
                alt={blog.author.name}
                class="size-10 rounded-full bg-gray-100"
                loading="lazy"
              >
              <div class="text-sm/6">
                <p class="font-semibold text-gray-900">
                  <a href={blog.author.link}>
                    <span class="absolute inset-0"></span>
                    {blog.author.name}
                  </a>
                </p>
                <p class="text-gray-600">{blog.author.role}</p>
              </div>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</div>
