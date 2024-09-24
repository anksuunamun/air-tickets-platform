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

export type SearchSettingsTitleType = {
  text: string
}