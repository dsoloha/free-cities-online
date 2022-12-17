<script>
	import Card from '$components/Card.svelte'
	import Login from './(intro)/login.svelte'
</script>

<svelte:head>
	<title>Free Cities Online</title>
	<meta name="description" content="Free Cities Online" />
</svelte:head>

<section>
	<Card>
		<h1>Free Cities Online</h1>

		<Login />

		<p>This site is currently under active development. Check back soon!</p>
	</Card>
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
