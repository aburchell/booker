<script type="text/javascript">
    import { bookShelf } from '../stores.js'
    export let book;
    export let bookID;

    $: pagesRead = $bookShelf[bookID][pagesRead]
    $: progressPercent = Math.floor(book.pagesRead / book.totalPages * 100);
    $: progressPercentStr = progressPercent + '%';
    $: bookFinished = book.pagesRead >= book.totalPages
    $: console.log(bookFinished)
</script>


<style type="text/css" media="screen">
 .book-tile-flex {
     display: grid;
     grid-template-columns: 2fr 3fr  1fr;
     grid-template-rows: 2fr, 1fr;

     grid-template-areas:
         " id  blurb  rating "
         " id  progress  rating ";

     padding-bottom: 0;
     margin-bottom: 1em;
     border-bottom: 2px solid GoldenRod;

     /* This seems suspect... */
     height: 35%;
 }

.booktitle {
    grid-area: id;
    color: DimGrey;
    background-color: DarkSeaGreen;
    padding: 1em;
    border-radius: 0 2em 0 0;
    overflow: hidden;
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

 .progressbar {
     grid-area: progress;
     display: flex;
     padding: 0.5em;

 }

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
     border-radius: 30px;
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
        color: DimGrey;
        background-color: DarkSeaGreen;
        padding: 1em;
        border-radius: 0 2em 0 0;
        overflow: hidden;
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

    .progressbar .total-bar .completed-bar .pages-box {
        display: none;
    }
    p {
        padding: 0;
        margin: 0;
        max-height: 100%;
        max-width: 100%;
    }
 }
</style>


<div class="book-tile-flex">
    <div class="booktitle">
        <h3>{book.author}</h3>
        <h2>{book.title}</h2>
    </div>
    <div class="booksummary">
        {book.summary}
    </div>
    <div class="progressbar">
        <div class="total-bar"> <div class="completed-bar" style="width: {progressPercentStr}"> </div> </div>
        {#if bookFinished}
            <div>&#9989;</div>
        {:else}
            <input class="pages-box" type=number bind:value={$bookShelf[bookID].pagesRead}
                          min=0 max={book.totalPages} />
        {/if}
    </div>
</div>
