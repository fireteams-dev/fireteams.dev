<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
    import Navigation from '$lib/navigation.svelte';
    import { initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
    import { page } from '$app/stores';

	
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

    initializeStores();

    const drawerStore = getDrawerStore();

    function drawerOpen(): void {
    	drawerStore.open({});
    }

    $: classesSidebar = $page.url.pathname === '/' ? 'w-0' : 'w-0 lg:w-64';
</script>


<Drawer>
    <h2 class="p-4">Navigation</h2>
	<hr />
    <Navigation />
</Drawer>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 {classesSidebar}">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
                <button class="lg:hidden btn btn-sm mr-4" on:click={drawerOpen}>
                    <span>
                        <svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
                            <rect width="100" height="20" />
                            <rect y="30" width="100" height="20" />
                            <rect y="60" width="100" height="20" />
                        </svg>
                    </span>
                </button>
				<strong class="text-xl uppercase">Fireteams.dev</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<!-- <a
					class="btn btn-sm variant-ghost-surface"
					href="https://discord.gg/EXqV7W8MtY"
					target="_blank"
					rel="noreferrer"
				>
					Discord
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://twitter.com/SkeletonUI"
					target="_blank"
					rel="noreferrer"
				>
					Twitter
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/skeletonlabs/skeleton"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a> -->
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
    <svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>

	<!-- Page Route Content -->
	<slot />
</AppShell>
