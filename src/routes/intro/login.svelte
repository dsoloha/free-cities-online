<script lang="ts">
	export let parent: any

	import { modalStore } from '@skeletonlabs/skeleton'

	const formData = {
		username: '',
		password: ''
	}

	function onFormSubmit(): void {
		$modalStore[0].response(formData)
		modalStore.close()
	}

	const cBase: string = 'space-y-4'
	const cForm: string = 'border border-surface-500 p-4 space-y-4 rounded-container-token'
</script>

<div class={cBase}>
	<form class="modal-form {cForm}">
		<label>
			<input type="text" bind:value={formData.username} placeholder="username" />
		</label>
		<label>
			<input type="password" bind:value={formData.password} placeholder="password" />
		</label>
	</form>
	<!-- prettier-ignore -->
	<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
        <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Go &rarr;</button>
    </footer>
</div>
