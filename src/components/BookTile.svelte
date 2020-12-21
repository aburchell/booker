<script type="text/javascript">
  export let book;

  let pagesRead = book.pagesRead;
  $: progressPercent = Math.floor(pagesRead / book.totalPages * 100);
  $: progressPercentStr = progressPercent + '%';
  $: console.log(progressPercentStr);
</script>


<style type="text/css" media="screen">
 .book-tile-flex {
     display: grid;
     grid-template-columns: 1fr 3fr  1fr;
     grid-template-rows: 2fr, 1fr;

     grid-template-areas:
         " id  blurb  rating "
         " id  progress  rating ";

     padding-bottom: 1em;
     border-bottom: 2px solid GoldenRod;
 }

.booktitle {
    grid-area: id;
    color: DimGrey;
    background-color: DarkSeaGreen;
    padding: 1em;
    border-radius: 0 2em 0 0;
 }

.booktitle > h2 {
    font-size: 3em;
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
        <input class="pages-box" type=number bind:value={pagesRead} min=0 max={book.totalPages} />
    </div>
</div>
