<script>
	let mobileToggled = false;
	function toggleMobileNav() {
	    mobileToggled = !mobileToggled;
	}
</script>

<nav class="navbar is-fixed-top">
	<div class="container">
		<div class="navbar-brand">
			<a class="navbar-item" href="#">
				<slot name="icon"></slot>
			</a>
			<a role="button" class="navbar-burger" on:click={() => toggleMobileNav()} class:is-active={mobileToggled} aria-label="menu" aria-expanded="false">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>
		<div class="navbar-menu" class:is-active={mobileToggled}>
			<div class="navbar-end">
				<slot name="items"></slot>
			</div>
		</div>
	</div>
</nav>

<style lang="scss">
</style>