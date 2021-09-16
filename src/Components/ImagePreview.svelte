<script>
	export let imageSrc;
	export let imageAlt;

	let modalVisible = false;
	function toggleModal() {
	    modalVisible = !modalVisible
	}
</script>

<figure class="image is-square" on:click={() => toggleModal()}>
	<img src={imageSrc} alt={imageAlt} />
</figure>

<div class="modal" class:is-active={modalVisible}>
	<div class="modal-background" on:click={() => toggleModal()}></div>
	<div class="modal-content">
		<p class="image is-square">
			<img src={imageSrc} alt={imageAlt} />
		</p>
	</div>
	<button class="modal-close is-large" aria-label="Close Modal" on:click={() => toggleModal()}></button>
</div>

<style lang="scss">
	figure.image {
	  cursor: pointer;
	}
</style>