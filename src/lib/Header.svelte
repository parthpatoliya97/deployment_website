<script>
	import { fly } from 'svelte/transition';
	import { onDestroy } from 'svelte'; // Add this import

	export let header;

	// Desktop dropdown open state, keyed by menu title
	let openMenus = {};

	// Timeouts to delay closing of menus (keyed by menu title)
	let closeTimeouts = {};

	// Mobile menu state
	let mobileMenuOpen = false;

	// Mobile dropdown open state
	let mobileOpenMenus = {};

	// Open the desktop menu (clear any pending close timeout)
	function openMenu(title) {
		if (closeTimeouts[title]) {
			clearTimeout(closeTimeouts[title]);
		}
		openMenus = { ...openMenus, [title]: true };
	}

	// Close the desktop menu after a short delay
	function closeMenu(title) {
		closeTimeouts[title] = setTimeout(() => {
			openMenus = { ...openMenus, [title]: false };
		}, 100);
	}

	// Mobile toggle function
	function toggleMobileMenu(title) {
		mobileOpenMenus = { ...mobileOpenMenus, [title]: !mobileOpenMenus[title] };
	}

	// Clear any pending timeouts on component unmount
	onDestroy(() => {
		Object.values(closeTimeouts).forEach((timeout) => clearTimeout(timeout));
	});
</script>

<header class="bg-white">
	<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
		<!-- Logo -->
		<div class="flex lg:flex-1">
			<a href="/" class="-m-1.5 p-1.5">
				<img class="h-10 w-auto" src={header.logo} alt={header.logoAlt} loading="lazy" />
			</a>
		</div>

		<!-- Mobile Hamburger Button -->
		<div class="flex lg:hidden">
			<button
				type="button"
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
				on:click={() => (mobileMenuOpen = true)}
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>

		<!-- Desktop Menu -->
		<div class="hidden lg:flex lg:gap-x-12">
			{#each header.menuItems as item}
				{#if item.submenu}
					<div
						class="relative"
						role="presentation"
						on:mouseenter={() => openMenu(item.title)}
						on:mouseleave={() => closeMenu(item.title)}
					>
						<button
							type="button"
							class="flex items-center gap-x-1 text-sm font-semibold text-gray-900"
							aria-expanded={openMenus[item.title] ? 'true' : 'false'}
						>
							{item.title}
							<svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
								<path
									fill-rule="evenodd"
									d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
									clip-rule="evenodd"
								/>
							</svg>
						</button>
						{#if openMenus[item.title]}
							<div
								class="absolute top-full -left-8 z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5"
								in:fly={{ y: 4, opacity: 0, duration: 200 }}
								out:fly={{ y: 4, opacity: 0, duration: 150 }}
							>
								{#each item.submenu as subItem}
									<a
										href={subItem.link}
										class="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
									>
										{subItem.title}
									</a>
								{/each}
							</div>
						{/if}
					</div>
				{:else}
					<a href={item.link} class="text-sm font-semibold text-gray-900">{item.title}</a>
				{/if}
			{/each}
		</div>

		<!-- Login Link -->
		<div class="hidden lg:flex lg:flex-1 lg:justify-end">
			<a href={header.cta.link} class="text-sm font-semibold text-gray-900">
				{header.cta.title} <span aria-hidden="true">&rarr;</span>
			</a>
		</div>
	</nav>

	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<div class="lg:hidden" role="dialog" aria-modal="true">
			<!-- Mobile backdrop -->
			<div
				class="fixed inset-0 z-10"
				role="button"
				tabindex="0"
				on:click={() => (mobileMenuOpen = false)}
				on:keydown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						mobileMenuOpen = false;
					}
				}}
			></div>
			<div
				class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				<div class="flex items-center justify-between">
					<a href="/" class="-m-1.5 p-1.5">
						<span class="sr-only">{appName}</span>
						<img class="h-8 w-auto" src={header.logo} alt={header.logoAlt} loading="lazy" />
					</a>
					<button
						type="button"
						class="-m-2.5 rounded-md p-2.5 text-gray-700"
						on:click={() => (mobileMenuOpen = false)}
					>
						<span class="sr-only">Close menu</span>
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6">
							{#each header.menuItems as item}
								{#if item.submenu}
									<div class="-mx-3">
										<button
											type="button"
											class="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base font-semibold text-gray-900 hover:bg-gray-50"
											on:click={() => toggleMobileMenu(item.title)}
											aria-controls={'disclosure-' + item.title}
											aria-expanded={mobileOpenMenus[item.title] ? 'true' : 'false'}
										>
											{item.title}
											<svg
												class="h-5 w-5 flex-none"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fill-rule="evenodd"
													d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
													clip-rule="evenodd"
												/>
											</svg>
										</button>
										{#if mobileOpenMenus[item.title]}
											<div class="mt-2 space-y-2">
												{#each item.submenu as subItem}
													<a
														href={subItem.link}
														class="block rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-gray-900 hover:bg-gray-50"
													>
														{subItem.title}
													</a>
												{/each}
											</div>
										{/if}
									</div>
								{:else}
									<a
										href={item.link}
										class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
									>
										{item.title}
									</a>
								{/if}
							{/each}
						</div>
						<div class="py-6">
							<a
								href={header.cta.link}
								class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
							>
								{header.cta.title}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</header>
