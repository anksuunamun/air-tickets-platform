export type SearchContentType = {
  flights: any
}

export type SearchSettingsType = {
  currentSorting: string
  changeCurrentSorting: (value: string) => void
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