export default function getAirlinesFromFlights(flights) {
  const airlineCodeVariants = []
  const airlines = []

  flights.forEach(flight => {
    const ticketAirlineCode = flight?.ticket?.airlineCode || 0
    const returnTicketAirlineCode = flight?.returnTicket?.airlineCode || 0

    if (!airlineCodeVariants.includes(ticketAirlineCode)
      && flight?.ticket?.airlineCaption) {
      airlines.push({
        value: ticketAirlineCode,
        caption: flight.ticket.airlineCaption
      })

      airlineCodeVariants.push(ticketAirlineCode)
    }

    if (!airlineCodeVariants.includes(returnTicketAirlineCode)
      && flight?.returnTicket?.airlineCaption) {
      airlines.push({
        value: returnTicketAirlineCode,
        caption: flight.returnTicket.airlineCaption
      })

      airlineCodeVariants.push(returnTicketAirlineCode)
    }
  })

  return airlines
}