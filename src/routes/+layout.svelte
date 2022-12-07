<script>
	import '$lib/css/theme.postcss'
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css'
	import '@skeletonlabs/skeleton/styles/all.css'
	import '$lib/css/app.postcss'
	import '$lib/css/fonts.css'

	import { AppShell, AppBar } from '@skeletonlabs/skeleton'
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<!-- Header -->
	<svelte:fragment slot="header">
		<!-- Insert the App Bar: -->
		<AppBar>
			<svelte:fragment slot="lead">
				<h3>fcOS</h3>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a class="btn btn-sm" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
			</svelte:fragment>
		</AppBar>
		<!-- --- -->
	</svelte:fragment>
	<!-- Sidebar -->
	<svelte:fragment slot="sidebarLeft">
		<!-- Insert the list: -->
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
		<!-- --- -->
	</svelte:fragment>
	<!-- Page Content Slot -->
	<slot />
</AppShell>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
