<script>
	import { socials } from '../lib/stores';
</script>

<footer class="footer">
	<div class="container">
		<div class="columns">
			<div class="column is-half">
				<figure class="image is-square logo-image">
					<img src="./images/logo.png" />
				</figure>
				<div class="icons">
					{#each socials as social}
						<a href={social.link} class={social.name.toLowerCase()} target="_blank"><i class="fab {social.icon}"></i></a>
					{/each}
				</div>

			</div>
			<div class="column is-half">

			</div>
		</div>
	</div>
</footer>

<style lang="scss">
  @import '../theme/variables';
	.footer {
	  background-color: $navbar-background-color;
	  figure {
		padding-top: 0;
	  }

	  .icons {
		padding-top: 1.2em;
        font-size: 1.4em;

		a {
          color: white;

		  &.twitter {
			&:hover {
			  color: #1DA1F2;
			}
		  }

		  &.discord {
			&:hover {
			  color: #5865F2;
			}
		  }

		  &:not(:last-child) {
			margin-right: 1.2em;
		  }
		}
	  }
	}
</style>