<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;

		min-height: 90vh;

		/* min-width: 75vw; */
		max-width: max(56em, 85vw);
		/* width: 75vw; */
		/* background-color: grey; */
		padding: 2em;
		margin: 5vh auto 5vh 5vw;
		box-sizing: border-box;
	}
</style>

<!-- <Nav {segment}/> -->

<main>
	<slot></slot>
</main>
