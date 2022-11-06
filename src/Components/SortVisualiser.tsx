import { useState, useEffect } from 'react';
import ArrayDisplay from './ArrayDisplay';

export default function SortVisualiser() {
	const [array, setArray] = useState(createShuffledArray(10));
	const delay = 10;
	
	useEffect(() => {
		document.querySelector('body')?.addEventListener('click', sortArray);
		return () => {
			document.querySelector('body')?.removeEventListener('click', sortArray);
		};
	}, []);

	function createShuffledArray(length: number): number[] {
		const array = [];
		//adding elements to array
		while (length > 0) {
			array.push(length--);
		}
		//shuffling the array
		for (let i: number = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp: number = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	}

	function sortArray(): void {
		function swap(a: number, b: number): void {
			const vals = [array[a], array[b]];
			setArray((arr: number[]): number[] => {
				return arr.map((item: number): number => {
					if (item === vals[0]) return vals[1];
					else if (item === vals[1]) return vals[0];
					return item;
				});
			});
		}

		function sort(array: number[], i: number, j: number, swapped: boolean) {
			setTimeout(() => {
				console.log('..........................');

				if (array[j] > array[j + 1]) {
					swap(j, j + 1);
					swapped = true;
				}

				if (j + 2 < array.length) sort(array, i, j + 1, swapped);
				else if (j + 2 === array.length && swapped === false) return;
				else if (j + 2 >= array.length) sort(array, i + 1, 0, false);
				else if (i === array.length) return;
			}, 150);
		}

		sort(array, 0, 0, false);

		console.log('sorted');

		// 	for (let i = 0; i < array.length; i++) {
		// 	let swapped = false;
		// 		for (let j = 0; j < array.length - 1; j++) {
		// 			let node1 = array[j];
		// 			let node2 = array[j + 1];
		// 			if (node2 < node1) {
		// 				swap(j, j + 1);
		// 				swapped = true;
		// 			}
		// 		}
		// 		if (!swapped) {

		// 			return;
		// 		}
		// 	}

		// return;
	}

	return (
		<main>
			<header></header>
			<ArrayDisplay array={array} />
		</main>
	);
}
