export default function cutFlightsExtraData(flights) {
  return flights.map(({ flight }) => {
    const ticket = flight.legs[0]
    const returnTicket = flight.legs[1]

    return {
      price: flight.price.total.amount,
      currency: flight.price.total.currency,
      ticket: shapeFlightTicket(ticket),
      returnTicket: shapeFlightTicket(returnTicket),
      duration: +ticket.duration + +returnTicket.duration
    }
  })
}

const shapeFlightTicket = ({ duration, segments }) => {
  const departureSegmentIndex = 0
  const arrivalSegment = segments.length > 1 ? segments.length - 1 : 0

  return {
    duration,
    stops: segments.length,
    airlineCaption: segments[departureSegmentIndex].airline.caption,
    airlineCode: segments[departureSegmentIndex].airline.airlineCode,

    departureAirportCaption: segments[departureSegmentIndex].departureAirport.caption,
    departureAirportUid: segments[departureSegmentIndex].departureAirport.uid,
    departureCityCaption: segments[departureSegmentIndex]?.departureCity?.caption || 'Город отправления',
    departureDate: segments[departureSegmentIndex].departureDate,

    arrivalAirportCaption: segments[arrivalSegment].arrivalAirport.caption,
    arrivalAirportUid: segments[arrivalSegment].arrivalAirport.uid,
    arrivalCityCaption: segments[arrivalSegment]?.arrivalCity?.caption || 'Город прибытия',
    arrivalDate: segments[arrivalSegment].arrivalDate,
  }
}