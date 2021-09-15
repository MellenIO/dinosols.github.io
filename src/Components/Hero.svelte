<script>

</script>

<section class="hero is-fullheight">
	<div class="cover">
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 viewBox="0 0 100 100" width="100%" height="100%" preserveAspectRatio="none" xml:space="preserve">
<style type="text/css">
	.st0{fill:#56246A;}
    .st1{fill:#73C9B8;}
</style>
			<polygon id="XMLID_1_" class="st0" points="50,100 100,80 100,100 "/>
			<polygon id="XMLID_3_" class="st1" points="50,0 0,20 0,0 "/>
</svg>

	</div>
	<div class="big-dino">
		<img src="./images/big-dino.png"/>
	</div>
	<div class="hero-body">
		<div class="container">
			<div class="columns is-vcentered is-reverse-mobile">
				<div class="column is-half-desktop">
					<h1 class="title">Dinosols NFT</h1>
					<p class="subtitle">(We are currently trying to come up with a tagline)</p>
				</div>
			</div>
		</div>
	</div>
	<div class="hero-foot">
		<div class="has-text-centered">

		</div>
	</div>
</section>

<style lang="scss">
  @import '../theme/_variables.scss';
  .hero {
	background-color: $purple;
	position: relative;
	.big-dino {
	  position: absolute;
	  bottom: 0;
	  right: 0;
	  //width: 50vw;
	  z-index: 1;
	}
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 2;
    }

	.hero-body {
	  z-index: 3;
	}
  }
</style>