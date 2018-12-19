// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  // Break it up.
  let sliced = arr.slice(0, size);
  arr.splice(0, size);
  console.log(sliced,arr);
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)
