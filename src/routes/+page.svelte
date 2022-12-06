<script>
	import { GradientHeading } from '@skeletonlabs/skeleton'
</script>

<svelte:head>
	<title>Free Cities Online</title>
	<meta name="description" content="Free Cities Online" />
</svelte:head>

<div class="container mx-auto p-8 space-y-8">
	<header class="px-4 py-10 md:py-20">
		<div
			class="container max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center"
		>
			<div class="space-y-4">
				<GradientHeading
					tag="h1"
					direction="bg-gradient-to-br"
					from="from-primary-500"
					to="to-accent-500"
				>
					Free Cities Online
				</GradientHeading>
				<p class="md:!text-lg">Create the city of your dreams.</p>
				<nav class="flex space-x-4">
					<a href="/create/player" class="btn btn-filled-primary">
						<span>Get Started</span>
						<span>&rarr;</span>
					</a>
				</nav>
			</div>
		</div>
	</header>
</div>
