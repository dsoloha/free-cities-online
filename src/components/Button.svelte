<script lang="ts">
	export let handler = () => {
		return
	}
	export let focus = false
	export let type: 'button' | 'submit' | 'reset' = 'button'
</script>

<button on:click={handler} class:focus {type}>
	<slot />
</button>

<style>
	button {
		background-color: white;
		border-radius: var(--border-radius-small);
		border: 1px solid var(--light-border);
		color: var(--light-text);
		padding: 1em;
	}

	button:hover {
		background-color: black;
		border-color: black;
		color: var(--dark-text);
	}

	button.focus {
		background-color: black;
		color: var(--dark-text);
	}

	button.focus:hover {
		background-color: white;
		border-color: black;
		color: var(--light-text);
	}

	@media (prefers-color-scheme: dark) {
		button {
			background-color: black;
			border-color: var(--dark-border);
			color: var(--dark-text);
		}

		button:hover {
			background-color: white;
			border-color: black;
			color: var(--light-text);
		}

		button.focus {
			background-color: white;
			color: var(--light-text);
		}

		button.focus:hover {
			background-color: black;
			border-color: white;
			color: var(--dark-text);
		}
	}
</style>
