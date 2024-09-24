'use client'

import {TicketType} from '@/src/features/search-feature/types/types'

export default function Ticket(
  {
    duration,
    stops,
    airlineCaption,
    airlineCode,
    departureAirportCaption,
    departureAirportUid,
    departureCityCaption,
    departureDate,
    arrivalAirportCaption,
    arrivalAirportUid,
    arrivalCityCaption,
    arrivalDate
  }: TicketType) {
  return (
    <div>
      <div>
        {departureCityCaption}, {departureAirportCaption} ({departureAirportUid})
        <span>&rarr;</span>
        {arrivalCityCaption}, {arrivalAirportCaption} ({arrivalAirportUid})
      </div>

      <div className="h-px bg-light-blue"></div>

      <div>

      </div>

      <div>

      </div>

      <div>
        Рейс выполняет: {airlineCaption}
      </div>
    </div>
  )
}