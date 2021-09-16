<script>
	import Navbar from './Components/Navbar.svelte';
	import NavbarItem from './Components/Navbar/NavbarItem.svelte';
	import Section from './Components/Section.svelte';
	import Hero from './Components/Hero.svelte';
	import TeamMember from './Components/TeamMember.svelte';
	import Footer from './Components/Footer.svelte';
	import ImagePreview from './Components/ImagePreview.svelte';
	import Timeline from './Components/Timeline.svelte';
	import TimelineItem from './Components/Timeline/TimelineItem.svelte';
	import Faq from './Components/Faq.svelte';

	import { dinoTypes, teamMembers, socials } from './lib/stores';

	// props from main.js
	export let title;
	export let subtitle;
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
		{#each socials as social}
		<NavbarItem link={social.link}>
			<i class="fab {social.icon}"></i>
		</NavbarItem>
		{/each}
	</slot>
</Navbar>

<Hero title={title} subtitle={subtitle} />

<Section id="about" title="About" classes="is-small alternate">
	Recently in the Dinosol Laboratory, our Scientists made a breakthrough never seen before… they’ve established a process to raise Dinosaurs from the grave and bring them back as new beasts: Dinosols. Our Paleontologists and Head Biologist have collected fossilized mosquitoes in amber, sequenced their genomes, and now plan to patch their missing DNA with visionary ideas to bring unique and rare Dinosols to life. Dinosols will be a new NFT roaring it’s way to the Solana blockchain soon!
</Section>

<Section id="dinosols" classes="is-small alternate">
	<div class="columns is-multiline is-mobile">
		{#each dinoTypes as dino}
		<div class="column is-one-quarter-tablet is-half-mobile">
			<div class="card">
				<div class="card-image">
					<ImagePreview imageSrc={dino.imageSrc} imageAlt={dino.name} />
				</div>
			</div>
		</div>
		{/each}
	</div>
</Section>

<Section id="roadmap" title="Roadmap" classes="is-small">
	<Timeline>
		<TimelineItem name="Community Building" completed=false>
			Build a community through social media. We’ll utilize Discord and Twitter to spread the findings of our Lead Paleontologists and Head Biologist. We plan to gain a following which will allow the Dinosols to roam free in the Dinosol Kingdom.
		</TimelineItem>
		<TimelineItem name="Minting" completed=false>
			We plan on a successful launch on the Solana Blockchain. If we aren’t successful on the first try, well, let's be honest, the bar is pretty low and these Dinosols are gonna get out one way or another.
		</TimelineItem>
		<TimelineItem name="Half Sold" completed=false>
			When XXX Dinos successfully mint their own Dinosol(s), this will allow additional Dinosols to enter the Dinosol Kingdom.We have dealt with some hungry Dinosols during this project, and trust us, nobody wants to experience angry, hungry Dinosols...they can get real grumpy
		</TimelineItem>
		<TimelineItem name="Sell Out" completed=false>
			After the final Dinosol leaves the Laboratory, such Dinosols will appear on the secondary market for buying and selling. The Dinosol Kingdom can take its rightful place at the top of the Solana NFT food chain. We want Dinos to show off their Dinosols to every Ape they know. The Llamas won't last long with the carnivores roaming the marketplace.
		</TimelineItem>
		<TimelineItem name="Donation" completed=false>
			Upon sellout, the Dinosol Laboratory team will make a charitable donation to an organization chosen by the Dinosol Kingdom.
		</TimelineItem>
		<TimelineItem name="Contest & Giveaways" completed=false>
			Contests and giveaways will begin after the Dinos get tired of running around on the secondary market. Some will be collaborations with other projects so be sure to follow us on Twitter @DinosolsNFT for the latest information.
		</TimelineItem>
		<TimelineItem name="DAO" completed=false>
			Community leadership. Every Dino, small or large, will eventually vote on different Roadmap decisions. The Herd (like this name “Herd”, but if it's something we are going to use we need to start using it externally)will grow stronger as others realize how beneficial our community can be.
		</TimelineItem>
	</Timeline>
</Section>

<Faq />

<Section id="team" title="Team" classes="is-small">
	<div class="columns is-multiline is-mobile">
		{#each teamMembers as teamMember}
		<div class="column is-one-third-tablet is-full-mobile">
			<TeamMember name={teamMember.name} title={teamMember.title} twitter={teamMember.twitter} image={teamMember.image}>
				{teamMember.blurb}
			</TeamMember>
		</div>
		{/each}
	</div>
</Section>

<Footer />

<style lang="scss">

</style>