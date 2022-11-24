<script>
	import Button from '$components/Button.svelte';
	import Input from '$components/Input.svelte';
</script>

<form>
	<Input name="username" placeholder="Username" />
	<Input name="password" placeholder="Password" type="password" />
	<Button>Sign up</Button>
</form>

<style>
	@media only screen and (max-width: 600px) {
		form {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
</style>
