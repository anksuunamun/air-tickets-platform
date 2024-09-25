'use client'

import { SearchFilteringType } from '@/src/features/search-feature/types/types'
import SearchSettingsTitle from '@/src/features/search-feature/components/search-settings-title'
import SearchSettingsSection from '@/src/features/search-feature/components/search-settings-section'

export default function SearchFiltering(
  {
    airlines,
    stops,
    currentStopsFilter,
    currentAirlinesFilter,
    changeStopsFilter,
    changeAirlinesFilter,
  }: SearchFilteringType) {
  return (
    <div>
      <div className="my-4">
        <SearchSettingsTitle text="Фильтровать" />
        <SearchSettingsSection>
          {
            stops
              .map(stop => {
                return (
                  <div key={`${stop.value}-stops-checkbox`}>
                    <input
                      type="checkbox"
                      value={`${stop.value}:::${stop.caption}`}
                      checked={
                      currentStopsFilter
                        .map(stop => stop.value)
                        .includes(stop.value)
                    }
                      name={`${stop.value}-stops-checkbox`}
                      id={`${stop.value}-stops-checkbox`}
                      onChange={changeStopsFilter}
                    />
                    <label htmlFor={`${stop.value}-stops-checkbox`}>
                      {` - ${stop.caption}`}
                    </label>
                  </div>
                )
              })
          }
        </SearchSettingsSection>
      </div>

      <div>

      </div>

      <div className="my-4">
        <SearchSettingsTitle text="Авиакомпании" />
        <SearchSettingsSection>
          {
            airlines
              .map(airline => {
                return (
                  <div key={`${airline.value}-airline-checkbox`}>
                    <input
                      type="checkbox"
                      value={`${airline.value}:::${airline.caption}`}
                      checked={
                        currentAirlinesFilter
                          .map(airline => airline.value)
                          .includes(airline.value)
                      }
                      name={`${airline.value}-airline-checkbox`}
                      id={`${airline.value}-airline-checkbox`}
                      onChange={changeAirlinesFilter}
                    />
                    <label htmlFor={`${airline.value}-airline-checkbox`}>
                      {` - ${airline.caption}`}
                    </label>
                  </div>
                )
              })
          }
        </SearchSettingsSection>
      </div>
    </div>
  )
}