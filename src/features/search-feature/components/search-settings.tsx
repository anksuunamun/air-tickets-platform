'use client'

import SearchSorting from '@/src/features/search-feature/components/search-sorting'
import { SearchSettingsType } from '@/src/features/search-feature/types/types'

export default function SearchSettings(
  { flights, currentSorting, changeCurrentSorting}: SearchSettingsType
) {
  return (
    <div className="basis-1/4">
      <SearchSorting {...{ currentSorting, changeCurrentSorting }} />
    </div>
  )
}