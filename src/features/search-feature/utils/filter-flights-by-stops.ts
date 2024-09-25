// @TODO: It seems need refactoring.
export default function filterFlightsByStops(flights, stops) {
  if (stops.length === 0) return ({
    filteredFlights: flights,
    suitableAirlines: [],
    allAirlinesSuitable: true,
  })

  const suitableAirlines = []

  const stopsValues = stops.map(stop => stop.value)

  const filteredFlights = flights.filter(flight => {
    const ticketStops = +flight.ticket.stops
    const returnTicketStops = +flight.returnTicket.stops

    if (stopsValues.includes(ticketStops)
      && !suitableAirlines.includes(flight.ticket.airlineCode)) {
      suitableAirlines.push(flight.ticket.airlineCode)
    }

    if (stopsValues.includes(returnTicketStops)
      && !suitableAirlines.includes(flight.returnTicket.airlineCode)) {
      suitableAirlines.push(flight.returnTicket.airlineCode)
    }

    return stopsValues.includes(ticketStops)
      || stopsValues.includes(returnTicketStops)
  })

  return {
    filteredFlights,
    suitableAirlines,
    allAirlinesSuitable: false,
  }
}