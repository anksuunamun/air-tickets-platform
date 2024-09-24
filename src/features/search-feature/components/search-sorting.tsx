'use client'

import SearchSettingsSection from '@/src/features/search-feature/components/search-settings-section'
import SearchSettingsTitle from '@/src/features/search-feature/components/search-settings-title'
import { SearchSortingType } from '@/src/features/search-feature/types/types'
import {ChangeEvent} from "react";

export default function SearchSorting({ currentSorting, changeCurrentSorting }: SearchSortingType) {
  const changeCurrentSortingHandler = (e: ChangeEvent<HTMLInputElement>) => changeCurrentSorting(e.target.value)
  return (
    <SearchSettingsSection>
      <SearchSettingsTitle text="Сортировать" />
      <div className="flex flex-row gap-2 items-center justify-start">
        <input
          type="radio"
          id="price-asc"
          name="currentSorting"
          value="price asc"
          checked={currentSorting === "price asc"}
          onChange={changeCurrentSortingHandler}
        />
        <label htmlFor="price-asc">по возрастанию цены</label>
      </div>

      <div className="flex flex-row gap-2 items-center justify-start">
        <input
          type="radio"
          id="price-desc"
          name="currentSorting"
          value="price desc"
          checked={currentSorting === "price desc"}
          onChange={changeCurrentSortingHandler}
        />
        <label htmlFor="price-desc">по убыванию цены</label>
      </div>

      <div className="flex flex-row gap-2 items-center justify-start">
        <input
          type="radio"
          id="duration-asc"
          name="currentSorting"
          value="duration asc"
          checked={currentSorting === "duration asc"}
          onChange={changeCurrentSortingHandler}
        />
        <label htmlFor="duration-asc">по времени в пути</label>
      </div>
    </SearchSettingsSection>
  )
}