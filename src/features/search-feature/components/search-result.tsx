'use client'

import { SearchResultType } from '@/src/features/search-feature/types/types'
import Ticket from "@/src/features/search-feature/components/ticket";

export default function SearchResult(
  {
    price,
    currency,
    duration,
    ticket,
    returnTicket,
  }: SearchResultType) {
  return (
    <div className="mb-8">
      <div className="h-12 px-3 py-1 bg-blue text-white flex flex-row justify-between items-center">
        <div className="text-sm">
          {ticket.airlineCaption}, {returnTicket.airlineCaption}
        </div>
        <div className="text-end">
          <div className="font-bold text-base">
            {price} {currency}
          </div>
          <div className="text-xs">
            Стоимость для одного взрослого пассажира
          </div>
        </div>
      </div>

      <Ticket {...ticket}/>

      <div className="h-0.5 bg-blue"></div>

      <Ticket {...returnTicket}/>

      <div className="h-10 bg-yellow text-white flex justify-center items-center">
        ВЫБРАТЬ
      </div>
    </div>
  )
}