<script type="text/javascript">
    import BookTile from './BookTile.svelte';
    import {bookShelf} from '../stores.js'

    import { onMount } from "svelte";
    onMount(async () => {
        const res = await fetch('/.netlify/functions/fetch-book');
        const data = await res.json();
        console.log(data)
        $bookShelf = data['data'];
        console.log($bookShelf)
    })
</script>

<style type="text/css" media="screen">
 ul {
     display: block;
 }
</style>

<ul class="BookTray">
    {#each $bookShelf as book, i}
        <ul>
            <!-- FUTURE
                 Passing in book here is unnecessary in theory, as I just access $bookShelf from within
                 this BookTile element. Streamline. -->
            <BookTile {i}/>
        </ul>
    {/each}
</ul>
