'use server'

import { getFlights as apiGetFlights } from '@/src/features/search-feature/api/searchApiService'
import SearchContent from '@/src/features/search-feature/components/search-content'
import cutFlightsExtraData from '@/src/features/search-feature/utils/cut-flights-extra-data'

const getFlights = async () => {
  try {
    return (await apiGetFlights()) ?? []
  } catch (e) {
    console.error(e)
  }
}

export default async function Search() {
  const flights = await getFlights()

  const flightsWithoutExtraData = cutFlightsExtraData(flights)

  return (
    <div>
      <SearchContent flights={flightsWithoutExtraData} />
    </div>
  )
}