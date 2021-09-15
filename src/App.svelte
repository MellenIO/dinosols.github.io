<script>
	import Navbar from './Components/Navbar.svelte';
	import NavbarItem from './Components/Navbar/NavbarItem.svelte';
	import Section from './Components/Section.svelte';
	import Hero from './Components/Hero.svelte';
	import TeamMember from './Components/TeamMember.svelte';
</script>

<Navbar>
	<slot slot="icon">
		<figure class="image is-square logo-image">
			<img src="./images/logo.png" />
		</figure>
	</slot>
	<slot slot="items">
		<NavbarItem link="#">
			Home
		</NavbarItem>
		<NavbarItem link="#about">
			About
		</NavbarItem>
		<NavbarItem link="#dinosols">
			Dinosols
		</NavbarItem>
		<NavbarItem link="#roadmap">
			Roadmap
		</NavbarItem>
		<NavbarItem link="#team">
			Team
		</NavbarItem>
		<NavbarItem link="#dinopen">
			Dino Pen
		</NavbarItem>
	</slot>
</Navbar>

<Hero />

<Section id="about" title="About" classes="is-small">
	Recently in the Dinosol Laboratory, our Scientists made a breakthrough never seen before… they’ve established a process to raise Dinosaurs from the grave and bring them back as new beasts: Dinosols. Our Paleontologists and Head Biologist have collected fossilized mosquitoes in amber, sequenced their genomes, and now plan to patch their missing DNA with visionary ideas to bring unique and rare Dinosols to life. Dinosols will be a new NFT roaring it’s way to the Solana blockchain soon!
</Section>

<Section id="dinosols" title="Our Dinosols" classes="is-small alternate">
	<div class="columns is-multiline is-mobile">
		<div class="column is-one-quarter-tablet is-half-mobile">
			<div class="card">
				<div class="card-image">
					<figure class="image is-square">
						<img src="https://dinosols.github.io/images/raptor_dinos_discord.gif" />
					</figure>
				</div>
			</div>
		</div>
		<div class="column is-one-quarter-tablet is-half-mobile">
			<div class="card">
				<div class="card-image">
					<figure class="image is-square">
						<img src="https://dinosols.github.io/images/trex.png" />
					</figure>
				</div>
			</div>
		</div>
		<div class="column is-one-quarter-tablet is-half-mobile">
			<div class="card">
				<div class="card-image">
					<figure class="image is-square">
						<img src="https://dinosols.github.io/images/C1.jpg" />
					</figure>
				</div>
			</div>
		</div>
		<div class="column is-one-quarter-tablet is-half-mobile">
			<div class="card">
				<div class="card-image">
					<figure class="image is-square">
						<img src="https://dinosols.github.io/images/B1.jpg" />
					</figure>
				</div>
			</div>
		</div>
	</div>
</Section>

<Section id="roadmap" title="Roadmap" classes="is-small">
	<div class="timeline is-centered">
		<div class="timeline-item">
			<div class="timeline-marker"></div>
			<div class="timeline-content">
				<p class="heading">Community Building</p>
				<p>
					Build a community through social media. We’ll utilize Discord and Twitter to spread the findings of our Lead Paleontologists and Head Biologist. We plan to gain a following which will allow the Dinosols to roam free in the Dinosol Kingdom.
				</p>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-marker"></div>
			<div class="timeline-content">
				<p class="heading">Minting</p>
				<p>
					We plan on a successful launch on the Solana Blockchain. If we aren’t successful on the first try, well, let's be honest, the bar is pretty low and these Dinosols are gonna get out one way or another.
				</p>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-marker"></div>
			<div class="timeline-content">
				<p class="heading">Half Sold</p>
				<p>
					When XXX Dinos successfully mint their own Dinosol(s), this will allow additional Dinosols to enter the Dinosol Kingdom.We have dealt with some hungry Dinosols during this project, and trust us, nobody wants to experience angry, hungry Dinosols...they can get real grumpy
				</p>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-marker"></div>
			<div class="timeline-content">
				<p class="heading">Sell Out</p>
				<p>
					After the final Dinosol leaves the Laboratory, such Dinosols will appear on the secondary market for buying and selling. The Dinosol Kingdom can take its rightful place at the top of the Solana NFT food chain. We want Dinos to show off their Dinosols to every Ape they know. The Llamas won't last long with the carnivores roaming the marketplace.
				</p>
			</div>
		</div>

		<div class="timeline-item">
			<div class="timeline-marker"></div>
			<div class="timeline-content">
				<p class="heading">Donation</p>
				<p>
					Upon sellout, the Dinosol Laboratory team will make a charitable donation to an organization chosen by the Dinosol Kingdom.
				</p>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-marker"></div>
			<div class="timeline-content">
				<p class="heading">Contests & Giveaways</p>
				<p>
					Contests and giveaways will begin after the Dinos get tired of running around on the secondary market. Some will be collaborations with other projects so be sure to follow us on Twitter @DinosolsNFT for the latest information.
				</p>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-marker"></div>
			<div class="timeline-content">
				<p class="heading">DAO</p>
				<p>
					Community leadership. Every Dino, small or large, will eventually vote on different Roadmap decisions. The Herd (like this name “Herd”, but if it's something we are going to use we need to start using it externally)will grow stronger as others realize how beneficial our community can be.
				</p>
			</div>
		</div>
	</div>
</Section>

<Section id="team" title="Team" classes="is-medium alternate">
	<div class="columns is-multiline is-mobile">
		<div class="column is-one-third-tablet is-full-mobile">
			<TeamMember name="Poshasaurus Rex" title="Project Lead" twitter="@TwitterDev" image="https://dinosols.github.io/images/posher.jpg">
				Posher is a financial analyst by trade and has 5+ years experience researching and investing in blockchain technologies, cryptocurrencies, and NFTs. As a (relatively) early adopter of the Solana blockchain, his first Solana NFT was a pair of low top CryptoKickers.
			</TeamMember>
		</div>
		<div class="column is-one-third-tablet is-full-mobile">
			<TeamMember name="Trey-ceratops" title="Project Manager" twitter="@TwitterDev" image="https://dinosols.github.io/images/jwb.jpg">
				Trey has 5+ years in the start-up world, wearing many hats in many roles. He started as a backend developer and eventually transitioned to a technical product management role where he led multiple distributed teams over the last four years. During this time, he has shipped various products from scratch that deliver value to the users.
			</TeamMember>
		</div>
		<div class="column is-one-third-tablet is-full-mobile">
			<TeamMember name="Blockiosaurus" title="Lead Developer" twitter="@TwitterDev" image="https://dinosols.github.io/images/Gumbercules.png">
				Blockiosaurus is a software developer by trade and amateur paleontologist by hobby. He's been programming for 17 years, but has loved dinosaurs all his life. In all that time he's touched pretty much every aspect of software development and is excited to revive the first generation of Dinosols for the rapidly growing Dinosol Kingdom.
			</TeamMember>
		</div>
		<div class="column is-one-third-tablet is-full-mobile">
			<TeamMember name="Dino Dubya" title="Social Media" twitter="@TwitterDev" image="https://dinosols.github.io/images/D2.jpg">
				Dino Dubya is acting Communications Director for the Dinosol Kingdom. A risk management professional by trade and an obsessed Dinosaur fan at all other hours of the day. Dino Dubya started researching and trading cryptocurrencies in 2018, and finally dipped his toe into the NFT pool with his first NFT purchase on Solana. Since that glorious day, Dino Dubya has fallen in love with the Solana community and all it has to offer.
			</TeamMember>
		</div>
		<div class="column is-one-third-tablet is-full-mobile">
			<TeamMember name="DinoDarryl" title="Social Media" twitter="@TwitterDev" image="https://dinosols.github.io/images/pfp2.png">
				...
			</TeamMember>
		</div>
		<div class="column is-one-third-tablet is-full-mobile">
			<TeamMember name="Dewsaurrrus" title="Artist" twitter="@TwitterDev" image="https://dinosols.github.io/images/D2.jpg">
				...
			</TeamMember>
		</div>
	</div>
</Section>

<style lang="scss">

</style>