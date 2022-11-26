<script>
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
		<h1>Free Cities Online</h1>

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
