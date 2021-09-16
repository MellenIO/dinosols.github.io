<script>
	import Section from './Section.svelte';
	import FaqItem from './Faq/FaqItem.svelte';
	import { faq } from '../lib/stores';
</script>

<Section id="faq" title="FAQ" classes="is-small alternate">
	{#each faq as item}
		<FaqItem title={item.title} toggled={item.toggled || false}>
			{@html item.content}
		</FaqItem>
	{/each}
</Section>