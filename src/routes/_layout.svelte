<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;

		height: 90vh;

		min-width: 75vw;
		max-width: 56em;
		width: 75vw;
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
