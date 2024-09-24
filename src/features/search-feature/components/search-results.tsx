'use client'

import { nanoid } from 'nanoid'
import { SearchResultsType } from '@/src/features/search-feature/types/types'
import SearchResult from "@/src/features/search-feature/components/search-result";

export default function SearchResults({ flights }: SearchResultsType) {
  return (
    <div className="basis-3/4">
      {flights.map((flight) => <SearchResult {...flight} key={nanoid()}/>)}
    </div>
  )
}