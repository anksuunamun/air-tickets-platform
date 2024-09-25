'use client'

import { SearchSettingsTitleType } from '@/src/features/search-feature/types/types'

export default function SearchSettingsTitle({ text = '' }: SearchSettingsTitleType) {
  return (
    <div className="font-bold mb-4">
      {text}
    </div>
  )
}