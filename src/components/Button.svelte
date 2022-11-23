<script lang="ts">
	export let handler = () => {
		return;
	};
	export let focus = false;
</script>

<button on:click={handler} class:focus>
	<slot />
</button>

<style>
	button {
		background-color: white;
		padding: 1em;
		border: 1px solid var(--light-border);
		border-radius: 0.5em;
		color: var(--light-text);
	}

	button:hover {
		background-color: black;
		border-color: black;
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
			color: var(--dark-text);
			background-color: black;
			border-color: var(--dark-border);
		}

		button:hover {
			background-color: white;
			color: var(--light-text);
			border-color: black;
		}

		button.focus {
			background-color: white;
			color: var(--light-text);
		}

		button.focus:hover {
			background-color: black;
			color: var(--dark-text);
			border-color: white;
		}
	}
</style>
