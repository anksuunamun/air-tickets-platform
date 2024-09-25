export function filterFlightsByAirlines(flights, airlinesFilter) {
  if (airlinesFilter.length === 0) return flights

  const airlinesFilterCodes = airlinesFilter.map(airline => airline.value)

  return flights.filter(flight => {
    const ticketAirlineCode = flight.ticket.airlineCode
    const returnTicketAirlineCode  = flight.returnTicket.airlineCode

    return airlinesFilterCodes.includes(ticketAirlineCode)
      || airlinesFilterCodes.includes(returnTicketAirlineCode)
  })
}