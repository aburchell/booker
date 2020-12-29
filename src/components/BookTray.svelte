<script type="text/javascript">
    import BookTile from './BookTile.svelte';
    import {bookShelf} from '../stores.js'
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
            <BookTile {book} bookID={i}/>
        </ul>
    {/each}
</ul>
