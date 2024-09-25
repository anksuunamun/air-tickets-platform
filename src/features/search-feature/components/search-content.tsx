'use client'

import { ChangeEvent, useEffect, useMemo, useState } from 'react'
import { SearchContentType } from '@/src/features/search-feature/types/types'
import SearchResults from '@/src/features/search-feature/components/search-results'
import SearchSettings from '@/src/features/search-feature/components/search-settings'
import sortFlights from '@/src/features/search-feature/utils/sort-flights'
import getAirlinesFromFlights from "@/src/features/search-feature/utils/get-airlines-from-flights";
import getStopsFromFlights from "@/src/features/search-feature/utils/get-stops-from-flights";

export default function SearchContent({ flights }: SearchContentType) {
  const [displayedFlights, setDisplayedFlights] = useState([])

  const [currentSorting, setCurrentSorting] = useState('price asc')

  useEffect(() => {
    const sortedFlights = sortFlights(flights, ...currentSorting.split(" "))
    setDisplayedFlights(sortedFlights)
  }, [currentSorting, setCurrentSorting])

  const changeCurrentSorting = (value: string) => setCurrentSorting(value)

  const airlinesFilterVariants = useMemo(() => getAirlinesFromFlights(flights), [flights])
  const stopsFilterVariants = useMemo(() => getStopsFromFlights(flights), [flights])

  const [currentStopsFilter, setCurrentStopsFilter] = useState([])
  const [currentAirlinesFilter, setCurrentAirlinesFilter] = useState([])

  const changeStopsFilter = ((event: ChangeEvent<HTMLInputElement>) => {
    // @TODO: Подумать, как лучше передавать значения чекбокса в обработчик.
    const [
      value,
      caption
    ] = event.target.value.split(":::")

    setCurrentStopsFilter((prev) => {
      const prevStopsValues = prev.map(stop => stop.value)

      if (prevStopsValues.includes(+value)) {
        return prev.filter(stop => stop.value !== +value)
      }

      return [...prev, { value: +value, caption }]
    })
  })

  const changeAirlinesFilter = ((event: ChangeEvent<HTMLInputElement>) => {
    // @TODO: Подумать, как лучше передавать значения чекбокса в обработчик.
    const [
      value,
      caption
    ] = event.target.value.split(":::")

    setCurrentAirlinesFilter((prev) => {
      const prevAirlinesValues = prev.map(airline => airline.value)

      if (prevAirlinesValues.includes(value)) {
        return prev.filter(airline => airline.value !== value)
      }

      return [...prev, { value: value, caption }]
    })
  })
  return (
    <div className="flex flex-row flex-nowrap	justify-between items-start gap-7 pt-8 px-20">
      <SearchSettings
        {...{
          currentSorting,
          changeCurrentSorting,
          airlines: airlinesFilterVariants,
          stops:stopsFilterVariants,
          currentStopsFilter,
          currentAirlinesFilter,
          changeStopsFilter,
          changeAirlinesFilter,
        }}
      />

      <SearchResults flights={displayedFlights}/>
    </div>
  )
}