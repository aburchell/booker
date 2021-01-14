<script>
 import { isFetching, bookShelf } from '../stores.js'
 // import BookTile from '../components/BookTile.svelte';
 import BookTray from '../components/BookTray.svelte';

 export async function preload(page, session) {
    const res = await fetch('/.netlify/functions/fetch-book');
    const data = await res.json();
    bookShelf.set(data.data);
    isFetching.set(false);
}

 }
</script>

<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
		text-align: left;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Year of the word, ya heard.</title>
</svelte:head>

<h1>What've you been reading?</h1>

<BookTray />
