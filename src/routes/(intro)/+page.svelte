<script>
	import SignupForm from './SignupForm.svelte';
</script>

<svelte:head>
	<title>Home | Free Cities Online</title>
	<meta name="description" content="Free Cities Online" />
</svelte:head>

<section>
	<h1>Free Cities Online</h1>

	<SignupForm />

	<p>This site is currently under active development. Check back soon!</p>
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
