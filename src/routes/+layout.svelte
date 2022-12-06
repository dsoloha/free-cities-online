<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css'
	import '@skeletonlabs/skeleton/styles/all.css'
	import '../theme.postcss'
	import '../app.postcss'
	import '$lib/styles/fonts.css'
	import { page } from '$app/stores'
	import { AppShell, AppBar } from '@skeletonlabs/skeleton'
	import { LightSwitch } from '@skeletonlabs/skeleton'
	import { writable, type Writable } from 'svelte/store'

	const storeValue: Writable<number> = writable(1)

	function matchPathWhitelist(pageUrlPath: string): boolean {
		// If homepage route
		if (pageUrlPath === '/') return true
		// If any blog route
		if (pageUrlPath.includes('/intro')) return true
		return false
	}

	// Disable left sidebar on homepage
	$: slotSidebarLeft = matchPathWhitelist($page.url.pathname) ? 'w-0' : 'lg:w-auto'
</script>

<AppShell {slotSidebarLeft} slotFooter="p-4">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<h3>free cities online</h3>
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
				<li><a href="/">home</a></li>
				<li><a href="/manage">manage</a></li>
				<li><a href="/facilities">facilities</a></li>
				<li><a href="/locations">locations</a></li>
				<li><a href="/settings">settings</a></li>
				<li><a href="/social">social</a></li>
				<li><a href="/tools">tools</a></li>
			</ul>
		</nav>
	</svelte:fragment>
	<slot />
</AppShell>
