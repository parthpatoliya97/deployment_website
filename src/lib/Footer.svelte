<script>
  export let footer, year, appName;
</script>

<footer class="bg-gray-900">
  <div class="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
      <div class="space-y-8">
        <img class="h-9" src={footer.logo} alt={footer.alt} loading="lazy">
        <p class="text-sm text-gray-300">{footer.description}</p>
        <div class="flex gap-x-6">
          {#each footer.socialLinks as social}
            <a href={social.link} class="text-gray-400 hover:text-gray-300">
              <span class="sr-only">{social.label}</span>
              {@html social.icon}
            </a>
          {/each}
        </div>
      </div>
      <div class="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0 sm:grid-cols-2 lg:grid-cols-{footer.menuItems.length}">
        {#each footer.menuItems as menuItem}
          <div>
            <h3 class="text-sm font-semibold text-white">{menuItem.title}</h3>
            <ul role="list" class="mt-6 space-y-4">
              {#each menuItem.submenu as link}
                <li>
                  <a href={link.link} class="text-sm text-gray-400 hover:text-white">{link.title}</a>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>
    <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
      <p class="text-sm text-gray-400">&copy; {year + ' ' + appName}. {@html footer.copyright}</p>
    </div>
  </div>
</footer>
