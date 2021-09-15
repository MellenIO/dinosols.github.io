<script>
    export let id;
    export let title;
    export let classes;
</script>

<section class="section {classes}" id={id}>
	<div class="container">
		{#if title}
		<h2 class="title">{title}</h2>
		{/if}
		<slot></slot>
	</div>
</section>

<style lang="scss">
  @import '../theme/_variables.scss';
  span.title {
    font-size: 1rem;
  }

  section.alternate {
	background-color: $grey-darker;
  }
</style>