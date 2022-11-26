<script>
	import Button from '$components/Button.svelte'
	import Input from '$components/Input.svelte'
</script>

<form>
	<div class="center">
		<Input name="email" placeholder="email" type="email" />
		<Input name="password" placeholder="password" type="password" />
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
