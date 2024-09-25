'use client'

import SearchSorting from '@/src/features/search-feature/components/search-sorting'
import { SearchSettingsType } from '@/src/features/search-feature/types/types'
import SearchFiltering from "@/src/features/search-feature/components/search-filtering";

export default function SearchSettings(
  {
    flights,
    currentSorting,
    changeCurrentSorting,
    airlines,
    stops,
    currentAirlinesFilter,
    currentStopsFilter,
    changeStopsFilter,
    changeAirlinesFilter,
  }: SearchSettingsType
) {
  return (
    <div className="basis-1/4">
      <SearchSorting {...{ currentSorting, changeCurrentSorting }} />

      <SearchFiltering {...{
        airlines,
        stops,
        currentStopsFilter,
        currentAirlinesFilter,
        changeStopsFilter,
        changeAirlinesFilter,
      }} />
    </div>
  )
}