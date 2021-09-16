import './style.scss';

import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		// put things here that you want to be global, will be accessible from the App component
		title: 'Dinosols',
		subtitle: 'The fiercest NFT gaming experience on the Solana blockchain in 66 million years'
	}
});

export default app;