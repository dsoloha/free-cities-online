<section>
	<slot />
</section>

<style>
	section {
		background-color: var(--light-focus);
		border-radius: var(--border-radius-large);
		border: 1px solid var(--light-border);
		color: var(--light-text);
		padding: 4em;
		width: 80%;
	}

	@media (prefers-color-scheme: dark) {
		section {
			background-color: var(--dark-focus);
			border: 1px solid var(--dark-border);
			color: var(--dark-text);
		}
	}
</style>
