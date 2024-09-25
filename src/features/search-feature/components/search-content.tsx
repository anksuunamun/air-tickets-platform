'use client'

import { ChangeEvent, useEffect, useMemo, useState } from 'react'
import { SearchContentType } from '@/src/features/search-feature/types/types'
import SearchResults from '@/src/features/search-feature/components/search-results'
import SearchSettings from '@/src/features/search-feature/components/search-settings'
import sortFlights from '@/src/features/search-feature/utils/sort-flights'
import getAirlinesFromFlights from "@/src/features/search-feature/utils/get-airlines-from-flights";
import getStopsFromFlights from "@/src/features/search-feature/utils/get-stops-from-flights";
import filterFlightsByStops from "@/src/features/search-feature/utils/filter-flights-by-stops";
import {filterFlightsByAirlines} from "@/src/features/search-feature/utils/filter-flights-by-airlines";

export default function SearchContent({ flights }: SearchContentType) {
  const [displayedFlights, setDisplayedFlights] = useState([])

  const [currentSorting, setCurrentSorting] = useState('price asc')

  const changeCurrentSorting = (value: string) => setCurrentSorting(value)

  const airlinesFilterVariants = useMemo(() => getAirlinesFromFlights(flights), [flights])
  const stopsFilterVariants = useMemo(() => getStopsFromFlights(flights), [flights])

  const [currentStopsFilter, setCurrentStopsFilter] = useState([])
  const [currentAirlinesFilter, setCurrentAirlinesFilter] = useState([])
  const [disabledFilterAirlines, setDisabledFilterAirlines] = useState([])

  useEffect(() => {
    /*
    @TODO: Need refactoring. Too many responsibilities on `filterFlightsByStops`.
     */
    const {
      filteredFlights: flightsFilteredByStops,
      suitableAirlines,
      allAirlinesSuitable,
    } = filterFlightsByStops(flights, currentStopsFilter)

    if (allAirlinesSuitable) {
      setDisabledFilterAirlines([])
    } else {
      setDisabledFilterAirlines(() => {
        return airlinesFilterVariants
          .map(airline => airline.value)
          .filter(airline => !suitableAirlines.includes(airline))
      })
    }

    const flightsFilteredByAirlines
      = filterFlightsByAirlines(flightsFilteredByStops, currentAirlinesFilter)

    const sortedFlights = sortFlights(flightsFilteredByAirlines, ...currentSorting.split(" "))

    setDisplayedFlights(sortedFlights)
  }, [
    currentSorting,
    setCurrentSorting,
    currentAirlinesFilter,
    currentStopsFilter,
    setCurrentAirlinesFilter,
    setCurrentStopsFilter,
    flights,
  ])

  const changeStopsFilter = ((event: ChangeEvent<HTMLInputElement>) => {
    // @TODO: Translate comment to eng
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
    // @TODO: Translate comment to eng
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
          disabledFilterAirlines,
        }}
      />

      <SearchResults flights={displayedFlights}/>
    </div>
  )
}