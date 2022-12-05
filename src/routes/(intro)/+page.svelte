<script>
	import { GradientHeading } from '@skeletonlabs/skeleton'
	import Section from '$components/Section.svelte'
	import SignupForm from './SignupForm.svelte'
	import Spacer from '$components/Spacer.svelte'
</script>

<svelte:head>
	<title>Free Cities Online</title>
	<meta name="description" content="Free Cities Online" />
</svelte:head>

<section>
	<Section>
		<GradientHeading
			tag="h1"
			direction="bg-gradient-to-r"
			from="from-primary-500"
			to="to-accent-500">Free Cities Online</GradientHeading
		>

		<SignupForm />

		<Spacer />

		<p>This site is currently under active development. Check back soon!</p>
	</Section>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	p {
		text-align: center;
	}
</style>
