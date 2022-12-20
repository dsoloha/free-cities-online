<script>
	import City from './setup/city/city.svelte'
	import Content from './setup/content/content.svelte'
	import Difficulty from './setup/difficulty/difficulty.svelte'
	import Player from './setup/player/player.svelte'
</script>

<div class="container mx-auto p-8 space-y-8">
	<Difficulty />
	<Content />
	<Player />
	<City />
</div>
