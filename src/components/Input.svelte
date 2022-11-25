<script lang="ts">
	export let type = 'text'
	export let name: string
	export let placeholder = ''
	export let width = 100
</script>

<input {type} {name} {placeholder} {width} />

<style>
	input {
		background-color: var(--light-focus);
		border-radius: 0.5em;
		border: 1px solid var(--light-border);
		color: var(--light-text);
		padding: 1em;
		outline: none;
	}

	input:focus {
		border: 1px solid var(--dark-focus);
	}

	@media (prefers-color-scheme: dark) {
		input {
			background-color: var(--dark-focus);
			border-color: var(--dark-border);
			color: var(--dark-text);
		}

		input:focus {
			border: 1px solid var(--light-focus);
		}
	}
</style>
