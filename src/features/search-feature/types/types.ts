import {ChangeEvent} from "react";

export type SearchContentType = {
  flights: any
}

export type SearchSettingsType = {
  currentSorting: string
  changeCurrentSorting: (value: string) => void
  airlines: any
  stops: any
  currentStopsFilter: any
  currentAirlinesFilter: any
  changeStopsFilter: (event: ChangeEvent<HTMLInputElement>) => void
  changeAirlinesFilter: (event: ChangeEvent<HTMLInputElement>) => void
}

export type SearchSortingType = {
  currentSorting: string
  changeCurrentSorting: (value: string) => void
}

export type SearchResultsType = {
  flights: any
}

export type SearchSettingsTitleType = {
  text: string
}

export type SearchResultType = {
  price: string | number
  currency: string
  duration: string | number
  ticket: any
  returnTicket: any
}

export type TicketType = {
  duration: string | number,
  stops: string | number,
  airlineCaption: string,
  airlineCode: string | number,

  departureAirportCaption: string,
  departureAirportUid: string | number,
  departureCityCaption: string,
  departureDate: string,

  arrivalAirportCaption: string,
  arrivalAirportUid: string | number,
  arrivalCityCaption: string,
  arrivalDate: string,
}

export type SearchFilteringType = {
  airlines: any
  stops: any
  currentStopsFilter: any
  currentAirlinesFilter: any
  changeStopsFilter: (event: ChangeEvent<HTMLInputElement>) => void
  changeAirlinesFilter: (event: ChangeEvent<HTMLInputElement>) => void
}