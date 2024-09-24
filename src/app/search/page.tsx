'use server'

import { getFlights as apiGetFlights } from '@/src/features/search-feature/api/searchApiService'
import SearchContent from '@/src/features/search-feature/components/search-content'

const getFlights = async () => {
  try {
    return (await apiGetFlights()) ?? []
  } catch (e) {
    console.error(e)
  }
}

export default async function Search() {
  const flights = await getFlights()
  return (
    <div>
      Search page
      <SearchContent flights={flights}/>
    </div>
  )
}