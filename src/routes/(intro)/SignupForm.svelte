<script>
	import Button from '$components/Button.svelte'
	import Input from '$components/Input.svelte'
</script>

<form>
	<div class="center">
		<Input name="username" placeholder="Username" />
		<Input name="password" placeholder="Password" type="password" />
		<Button focus={true}>Go -></Button>
	</div>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
