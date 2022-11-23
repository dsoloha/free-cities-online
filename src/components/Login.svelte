<script lang="ts">
	import Button from './Button.svelte';
	import Input from './Input.svelte';
</script>

<div>
	<Input name="username" placeholder="Username" />
	<Button
		focus={true}
		on:click={() => {
			return;
		}}>Sign in</Button
	>
</div>
