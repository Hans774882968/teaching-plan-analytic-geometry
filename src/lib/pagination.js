export function getPaginationItems({
  items = null,
  total = null,
  itemsPerPage,
  currentPage,
}) {
  if (!Array.isArray(items) && total === null) {
    throw new Error('Either items[] or total must be provided!');
  }

  const totalItems = Array.isArray(items) ? items.length : total;
  if (totalItems <= 0) {
    return {
      itemStart: 0,
      itemEnd: 0,
      pageItems: [],
      totalPages: 1,
    };
  }

  const legalItemsPerPage = Math.max(1, itemsPerPage);
  const totalPages = Math.max(1, Math.ceil(totalItems / legalItemsPerPage));
  const legalCurrentPage = Math.max(1, Math.min(currentPage, totalPages));

  // Calculate the start and end index (1-indexed) of the items to display on the current page
  const itemStart = ((legalCurrentPage - 1) * legalItemsPerPage) + 1;
  const itemEnd = Math.min(legalCurrentPage * legalItemsPerPage, totalItems);

  // Get the items to display on the current page
  return {
    itemStart,
    itemEnd,
    pageItems: Array.isArray(items) ? items.slice(itemStart - 1, itemEnd) : [],
    totalPages,
  };
}
