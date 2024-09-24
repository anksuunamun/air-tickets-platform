'use client'

import {useEffect, useState} from 'react'
import { SearchContentType } from '@/src/features/search-feature/types/types'
import SearchResults from '@/src/features/search-feature/components/search-results'
import SearchSettings from '@/src/features/search-feature/components/search-settings'
import sortFlights from '@/src/features/search-feature/utils/sort-flights'

export default function SearchContent({ flights }: SearchContentType) {
  const [displayedFlights, setDisplayedFlights] = useState([])

  const [currentSorting, setCurrentSorting] = useState('price asc')

  useEffect(() => {
    const sortedFlights = sortFlights(flights, ...currentSorting.split(" "))
    setDisplayedFlights(sortedFlights)
  }, [currentSorting, setCurrentSorting])
 
  const changeCurrentSorting = (value: string) => setCurrentSorting(value)

  return (
    <div className="flex flex-row flex-nowrap	justify-between items-start gap-7 pt-8 px-10">
      <SearchSettings {...{  currentSorting, changeCurrentSorting }}/>

      <SearchResults />
    </div>
  )
}