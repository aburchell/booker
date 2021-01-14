<script type="text/javascript">
    import BookTile from './BookTile.svelte';
    import {bookShelf} from '../stores.js'

    import { onMount } from "svelte";
    onMount(async () => {
        const res = await fetch('/.netlify/functions/fetch-book');
        const data = await res.json();
        console.log(data)
    })

    console.log($bookShelf)

 // const server = 'undefined' === typeof window ? 'http://localhost:3000' : 'https://yearoftheword.xyz';
 // const fetch = require("node-fetch");
 // function getBooks() {
 //     return fetch('/src/functions/fetch-book.js')
 //     .then(response => {return response.json()})
 // }
 //
 // const gotBooks = getBooks().then((response) => {
 //     console.log('API response', response)
 // }).catch((error) => {
 //     console.log('API error', error)
 // })
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
