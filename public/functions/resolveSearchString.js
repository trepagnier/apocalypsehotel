export default input => {
  if (!input || (input.target && !input.target.value)) return false;

  let searchString =
    input.target && input.target.value ? input.target.value : input;

  // @TODO: fix this messy hack. If you pass the full location name rather than
  // a partial location name, it only returns partial results.
  if (searchString.length >= 3) {
    return searchString.substring(0, searchString.length - 2);
  }
  return searchString;
};
