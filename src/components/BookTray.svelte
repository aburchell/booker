<script type="text/javascript">
 import BookTile from './BookTile.svelte';
 import { fetchBooks, bookShelf, isFetching } from '../stores.js'
 import { onMount } from 'svelte';

 onMount(() => fetchBooks())
</script>

<style type="text/css" media="screen">
 ul {
     display: block;
 }
</style>

{#if isFetching}
    🌀
{:else}
    <ul class="BookTray">
        {#each $bookShelf as book, i}
            <ul>
                <!-- FUTURE
                    Passing in book here is unnecessary in theory, as I just access $bookShelf from within
                    this BookTile element. Streamline. -->
                <BookTile book={book.data} {i}/>
            </ul>
        {/each}
    </ul>
{/if}
