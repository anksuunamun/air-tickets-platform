'use client'

import {TicketType} from '@/src/features/search-feature/types/types'
import flightDurationFromDates from "@/src/features/search-feature/utils/flight-duration-from-dates";
import getTicketTextDate from "@/src/features/search-feature/utils/get-ticket-text-date";

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

  const flightDuration = flightDurationFromDates(departureDate, arrivalDate)

  const [
    departureTime,
    departureTextDayAndWeekday
  ] = getTicketTextDate(departureDate)

  const [
    arrivalTime,
    arrivalTextDayAndWeekday
  ] = getTicketTextDate(arrivalDate)

  return (
    <div>
      <div className="my-2">
        {departureCityCaption}, {departureAirportCaption} <span className="text-blue">({departureAirportUid})</span>
        <span>&rarr;</span>
        {arrivalCityCaption}, {arrivalAirportCaption} <span className="text-blue">({arrivalAirportUid}</span>)
      </div>

      <div className="h-px bg-light-blue"></div>

      <div className="my-2">
        <div className="flex flex-row justify-between items-center px-4">
          <div>
            <span className="font-bold text-base">{departureTime}</span>
            <span> </span>
            <span className="text-blue text-sm">{departureTextDayAndWeekday}</span>
          </div>

          <div>
            <span>&#128340; </span>
            {flightDuration}
          </div>

          <div>
            <span className="text-blue text-sm">{arrivalTextDayAndWeekday}</span>
            <span> </span>
            <span className="font-bold text-base">{arrivalTime}</span>
          </div>
        </div>

        <div className="h-6 flex flex-row gap-2 items-center justify-center px-4">
          <div className="h-px bg-light-blue w-5/12">
          </div>

          {+stops > 0 && <div className="w-2/12 text-center text-yellow">
            {`${stops} пересадки`}
          </div>}

          <div className="h-px bg-light-blue w-5/12">
          </div>
        </div>
      </div>

      <div className="mt-1 mb-2">
        Рейс выполняет: {airlineCaption}
      </div>
    </div>
  )
}