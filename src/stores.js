import { writable } from 'svelte/store';


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
//     return {
//         subscribe,
//         addBook: (book) => update(books => books.push(arr)),
//         mergeShelves: (shelf) => update(books => books.concat(shelf))

//     }
// }
export const bookShelf = writable([
    {
		title: "Foundation",
		author: "Isaac Asimov",
		summary: "The galactic empire is crumbling. Will 'scientific' models of the future help humanity rebuild?",
		pagesRead: 35,
		totalPages: 285,
	 },
	{
		title: "The Recursive Universe",
		author: "William Poundstone",
		summary: "Big things emerge from the complex interaction of simple components. What can we learn by elucidating examples?",
		pagesRead: 150,
		totalPages: 252,
	 },
]);
