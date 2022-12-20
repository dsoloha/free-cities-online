
<script lang="ts">
	import { Alert, modalStore } from '@skeletonlabs/skeleton'
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton'
	import Login from './intro/login.svelte'

	function signInModal(): void {
		const c: ModalComponent = { ref: Login }
		const d: ModalSettings = {
			type: 'component',
			title: 'Log in',
			body: 'Sign in with an existing account',
			component: c,
			response: (r: any) => {
				if (r) console.log('response:', r)
			}
		}
		modalStore.trigger(d)
	}
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div>
	<header class="border-b border-black/5 dark:border-white/5 px-4 py-10 md:py-20">
		<div
			class="container max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center"
		>
			<div class="space-y-4">
				<h1>Free Cities Online</h1>
				<p class="md:!text-lg">Tagline here</p>
				<nav class="flex space-x-4">
					<a href="/intro" class="btn btn-filled-primary">
						<span>Get Started</span>
						<span>&rarr;</span>
					</a>
					<button class="btn btn-ghost-surface" id="sign-in" on:click={signInModal}>Sign in</button>
				</nav>
			</div>
		</div>
	</header>

	<div class="container max-w-[1200px] mx-auto px-4 py-10 md:py-20 space-y-20">
		<Alert>
			<svelte:fragment slot="lead">⚠️</svelte:fragment>
			<span
				>Free Cities Online is currently still in pre-alpha and undergoing active development.</span
			>
			<svelte:fragment slot="trail">
				<a
					href="https://github.com/dsoloha/free-cities-online/issues"
					target="_blank"
					rel="noreferrer"
					class="btn btn-filled">View progress</a
				>
			</svelte:fragment>
		</Alert>
	</div>
</div>