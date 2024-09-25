export default function getStopsFromFlights(flights) {
  const stopsVariants = []
  const stops = []

  flights.forEach(flight => {
    const ticketStops = +flight?.ticket?.stops || 0
    const returnTicketStops = +flight?.returnTicket?.stops || 0

    if (!stopsVariants.includes(ticketStops)) {
      stops.push({
        value: ticketStops,
        caption: ticketStops === 0 ? 'Без пересадок' : `${ticketStops} пересадки`
      })

      stopsVariants.push(ticketStops)
    }

    if (!stopsVariants.includes(returnTicketStops)) {
      stops.push({
        value: returnTicketStops,
        caption: returnTicketStops === 0 ? 'Без пересадок' : `${returnTicketStops} пересадки`
      })

      stopsVariants.push(returnTicketStops)
    }
  })

  return stops
}