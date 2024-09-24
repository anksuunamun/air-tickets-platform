export default function sortFlights(
  flights = [],
  sortAttr = 'price',
  sortDir = 'asc'
) {
  return sortDir === 'asc'
    ? flights.toSorted((f1, f2) => f1[sortAttr] - f2[sortAttr])
    : flights.toSorted((f1, f2) => f2[sortAttr] - f1[sortAttr])
}