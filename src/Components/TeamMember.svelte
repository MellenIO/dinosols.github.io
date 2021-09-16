<script>
	export let name;
	export let title;
	export let twitter;
	export let image;
</script>

<div class="card">
	<div class="card-image">
		<figure class="image is-square">
			<img src={image} />
		</figure>
	</div>
	<div class="card-content">
		<div class="content">
			<h3 class="title">{name}</h3>
			<p class="subtitle">{title}</p>
			<p>
				<slot></slot>
			</p>
		</div>
	</div>
</div>

<style lang="scss">
	.card {
	  background-color: #1f2424;
	}
</style>