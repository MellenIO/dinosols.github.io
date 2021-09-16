<script>
	export let toggled = false;
	function toggleFaqItem() {
	    toggled = !toggled;
	}

	export let title;
</script>

<article class="accordion" class:is-active={toggled}>
	<div class="accordion-header" on:click={() => toggleFaqItem()}>
		<p class="title">
			{title}
			<i class="fas" class:fa-chevron-up={toggled} class:fa-chevron-down={!toggled}></i>
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
	  cursor: pointer;
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