<script>
	import '$lib/css/theme.postcss'
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css'
	import '@skeletonlabs/skeleton/styles/all.css'
	import '$lib/css/app.postcss'
	import '$lib/css/fonts.css'

	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton'
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<h3>fcOS</h3>
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
