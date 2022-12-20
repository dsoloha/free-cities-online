<script>
	import Age from './age.svelte'
	import Background from './background.svelte'
	import Ethnicity from './ethnicity.svelte'
	import Eyes from './eyes.svelte'
	import Face from './face.svelte'
	import Hair from './hair.svelte'
	import Height from './height.svelte'
	import Lower from './lower.svelte'
	import Name from './name.svelte'
	import Nationality from './nationality.svelte'
	import Sex from './sex.svelte'
	import Skin from './skin.svelte'
	import Upper from './upper.svelte'
</script>

<div class="card card-body space-y-6">
	<h1 class="text-center">Character creator</h1>

	<Sex />
	<Name />
	<Age />
	<Nationality />
	<Ethnicity />
	<Height />
	<Skin />
	<Hair />
	<Eyes />
	<Face />
	<Upper />
	<Lower />
	<Background />

	<div class="place-content-center flex w-full">
		<a href="/dashboard" class="btn btn-filled-primary">Continue</a>
	</div>
</div>
