function chunk(array, size) {
  const chunked = [];
  for (let i = 0; i < array.length; i++) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([array[i]]);
    } else {
      last.push(array[i]);
    }
  }

  return chunked;
}

// function chunk(array, size) {
//   const chunked = [];
//   let index = 0;

//   while (index < array.length) {
//     chunked.push(array.slice(index, index + size));
//     index += size;
//   }

//   return chunked;
// }

module.exports = chunk;
