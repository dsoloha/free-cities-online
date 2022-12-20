<script lang="ts">
	import { page } from '$app/stores'
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css'
	import '@skeletonlabs/skeleton/styles/all.css'
	import '$lib/css/app.postcss'

	import { AppShell, AppBar, LightSwitch, Modal, Toast, Drawer } from '@skeletonlabs/skeleton'

	function matchPathWhitelist(pageUrlPath: string): boolean {
		// If homepage route
		if (pageUrlPath === '/') return true
		// If any intro route
		if (pageUrlPath.includes('/intro')) return true
		return false
	}

	// Disable left sidebar on homepage
	$: slotSidebarLeft = matchPathWhitelist($page.url.pathname) ? 'w-0' : 'bg-black/5 lg:w-auto'
</script>

<Modal />
<Toast />
<Drawer />

<AppShell {slotSidebarLeft} slotFooter="bg-black p-4">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/">
					<h3>fcOS</h3>
				</a>
			</svelte:fragment>

			<svelte:fragment slot="trail">
				<LightSwitch />
				<a
					class="btn btn-sm"
					href="https://github.com/dsoloha/free-cities-online"
					target="_blank"
					rel="noreferrer">GitHub</a
				>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<nav class="list-nav">
			<ul>
				<li><a href="/dashboard">overview</a></li>
				<li><a href="/about">about</a></li>
				<li><a href="/facilities">facilities</a></li>
				<li><a href="/locations">locations</a></li>
				<li><a href="/manage">manage</a></li>
				<li><a href="/settings">settings</a></li>
				<li><a href="/social">social</a></li>
				<li><a href="/tools">tools</a></li>
			</ul>
		</nav>
	</svelte:fragment>
	<slot />
</AppShell>
