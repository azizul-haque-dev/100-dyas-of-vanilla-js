/* Bubble Sort

Write a bubble sort algorithm in JavaScript.

Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,

Sample Data: [6,4,0, 3,-2,1]
Expected Output : [-2, 0, 1, 3, 4, 6] */
function bubbledSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    console.log(`lop ${i + 1}:`);

    for (let j = 0; j < n - 1 - i; j++) {
      console.log(`  Comparing ${arr[j]} with ${arr[j + 1]}`);

      if (arr[j] > arr[j + 1]) {
        console.log(`  Swapping ${arr[j]} and ${arr[j + 1]}`);

        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        console.log(`  Current array:`, arr);
      } else {
        console.log(`  No swap needed`);
      }
    }

    console.log(`After loop ${i + 1}:`, arr);
    console.log("------------------------");
  }

  console.log("Sorted array:", arr);
  return arr;
}

// Call with an array
bubbledSort([2, 1, 6, 5]);
