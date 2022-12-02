<script lang="ts">
	import Button from '$components/Button.svelte'
	import Input from '$components/Input.svelte'

	let email: string
	let password: string

	async function signUp() {
		const { data, error } = await supabase.auth.signUp({
			email: 'example@email.com',
			password: 'example-password'
		})
	}
</script>

<form>
	<div class="center">
		<Input name="email" placeholder="email" />
		<Input name="password" placeholder="password" />
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
