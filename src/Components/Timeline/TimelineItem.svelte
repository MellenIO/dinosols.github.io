<script>
	export let name;
	export let completed;
</script>

<div class="timeline-item">
	<div class="timeline-marker"></div>
	<div class="timeline-content">
		<p class="heading">{name}</p>
		<p>
			<slot></slot>
		</p>
	</div>
</div>