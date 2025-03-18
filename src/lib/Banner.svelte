<script>
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';

  export let banner;
  
  // Create a local variable to track visibility
  let showBanner = false;

  // Check local storage when the component mounts.
  onMount(() => {
    const dismissedId = localStorage.getItem('bannerDismissedId');

    // Only show the banner if it is live and hasn't been dismissed before.
    if (banner.live && dismissedId != banner.version) {
      showBanner = true;
    }
  });
  
  function dismissBanner() {
    showBanner = false;
    localStorage.setItem('bannerDismissedId', banner.version);
  }
</script>

{#if showBanner}
  <div transition:slide class="flex items-center gap-x-6 {banner.colorClass} px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
    <p class="text-sm/6 text-white">
      <strong class="font-semibold">
        {@html banner.text} 
        <a href="{banner.link}" class="font-semibold whitespace-nowrap">
          {banner.title}<span aria-hidden="true">&rarr;</span>
        </a>
      </strong>
    </p>
    <div class="flex flex-1 justify-end">
      <button type="button" on:click={dismissBanner} class="-m-3 p-3 focus-visible:outline-offset-[-4px] cursor-pointer">
        <span class="sr-only">Dismiss</span>
        <svg class="size-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
          <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
        </svg>
      </button>
    </div>
  </div>
{/if}
