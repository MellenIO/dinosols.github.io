<script>

	export let title;
</script>

<article class="accordion is-active">
	<div class="accordion-header">
		<p class="title">
			{title}
		</p>

	</div>
	<div class="accordion-content">
		<slot></slot>
	</div>
</article>

<style lang="scss">
  .accordion {
	padding-bottom: 2rem;

	.accordion-header {
	  i {
		padding-left: 1rem;
	  }
	}
  }
  .accordion.is-active {
	.accordion-content {
	  height: auto;
	  display: block;
	}
  }

  .accordion:not(.is-active) {
	.accordion-content {
	  height: 0;
	  display: none;
	}
  }
</style>