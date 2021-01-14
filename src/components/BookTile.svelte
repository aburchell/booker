<script type="text/javascript">
    import { bookShelf } from '../stores.js'
    export let book;
    export let i;

 // $: book = $bookShelf[i]["data"];
    $: pagesRead = book[pagesRead];
    $: progressPercent = Math.floor(
        book[pagesRead] / book[totalPages] * 100);
    $: progressPercentStr = progressPercent + '%';
    $: bookFinished = book[pagesRead] >= book[totalPages];
    $: console.log(bookFinished);
</script>


<style type="text/css" media="screen">
 .book-tile-flex {
     /* background-color: grey; */

     display: grid;
     grid-template-columns: 2fr 3fr  1fr;
     /* grid-template-rows: 2fr, 1fr; */

     grid-template-areas:
         " id  blurb  rating ";
         /* " id  blurb  rating "; */

     margin-bottom: 1em;
    color: #ffffff;
 }

.booktitle {
    grid-area: id;
    padding: 1em;
    border-radius: 0 2em 0 0;
    overflow: hidden;

    position: relative;
    bottom: 0; left:0;

    display: flex;
 }

 .booktitle .container {
     align-self: flex-end;
 }

.booktitle > h2 {
    font-size: 2em;
 }

.booktitle > h3 {
    font-size: 1em;
 }

.booksummary {
    grid-area: blurb;
    padding: 1em;
    text-align: center;
 }

 .blendable {
     mix-blend-mode: difference;
 }
 /* .progressbar {
    grid-area: progress;
    display: none;
    padding: 0.5em;

    } */

 .total-bar {
     background-color: LightGrey;
     width: 100%;
     /* height: 55%; */

     text-align: center;
     border-radius: 1em;
 }

 .completed-bar {
     text-align: center;
     height: 100%;
     background-color: GoldenRod;
     overflow: hidden;
     max-width: 100%;
     /* border-radius: 30px; */
 }

 .outer-bar {
     position: relative;

     /* left:0;top:0; */

     /* Make rounded corners, like a progress bar... */
     /* border-radius: 5em 0 0 5em; */
     height: 10em;
 }

 .pages-box {
     margin-left: 3%;
}

@media only screen and (max-width: 800px) {
    .book-tile-flex {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr, 2fr, 1fr;

        grid-template-areas:
            " id  "
            " blurb "
            " rating ";
    }

    .booktitle {
        grid-area: id;
        /* padding: 1em; */
        overflow: hidden;
    }
    .booktitle > .container {
        display: flex;
        flex-direction: row-reverse;
        position: relative;
    }

    .booktitle > h2 {
        font-size: 2em;
    }

    .booktitle > h3 {
        font-size: 1em;
        /* position: relative; */
        /* bottom: 2em; left: 20px; */
    }


    .booksummary {
        grid-area: blurb;
        /* padding: 1em; */
        text-align: center;
    }
 }
</style>


<div class="relative-container" style="position: relative;">
    <div class="completed-bar outer-bar" style="position: absolute; width: {progressPercentStr}"> </div>
    <div class="book-tile-flex outer-bar">
        <div class="booktitle blendable">
            <div class="container">
                <h3>{book.author}</h3>
                <h2>{book.title}</h2>
            </div>
        </div>
        <div class="booksummary blendable">
            {book.summary}
        </div>
        <!-- <div class="progressbar">
             <div class="total-bar"> <div class="completed-bar" style="width: {progressPercentStr}"> </div> </div> -->
    {#if bookFinished}
        <div>&#9989;</div>
    {:else}
        <input class="pages-box" type=number bind:value={book[pagesRead]}
                    min=0 max={book[totalPages]} />
    {/if}
    </div>
</div>
