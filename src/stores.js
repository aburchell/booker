import { writable } from 'svelte/store';

export const isFetching = writable(true);
export const bookShelf = writable({});

// export const fetchBooks = async () => {
//     const res = await fetch('/.netlify/functions/fetch-book');
//     const data = await res.json();
//     bookShelf.set(data.data);
//     isFetching.set(false);
// }



// onMount(async () => {
//     const res = await fetch('/.netlify/functions/fetch-book');
//     const data = await res.json();
//     console.log(data)
//     $bookShelf = data.data;
// })

// function createBookShelf() {
//     const { subscribe, set, update } = writable([
//     {
// 		title: "Foundation",
// 		author: "Isaac Asimov",
// 		summary: "The galactic empire is crumbling. Will 'scientific' models of the future help humanity rebuild?",
// 		pagesRead: 35,
// 		totalPages: 285,
// 	 },
// 	{
// 		title: "The Recursive Universe",
// 		author: "William Poundstone",
// 		summary: "Big things emerge from the complex interaction of simple components. What can we learn by elucidating examples?",
// 		pagesRead: 150,
// 		totalPages: 252,
// 	 },
// ]);
//         subscribe,
//         addBook: (book) => update(books => books.push(arr)),
//         mergeShelves: (shelf) => update(books => books.concat(shelf))

//     }
// }
// export let bookShelf = writable([
//     {
// 		title: "Foundation",
// 		author: "Isaac Asimov",
// 		summary: "The galactic empire is crumbling. Will 'scientific' models of the future help humanity rebuild?",
// 		pagesRead: 35,
// 		totalPages: 285,
// 	 },
// 	{
// 		title: "The Recursive Universe",
// 		author: "William Poundstone",
// 		summary: "Big things emerge from the complex interaction of simple components. What can we learn by elucidating examples?",
// 		pagesRead: 150,
// 		totalPages: 252,
// 	 },
// ]);
//
