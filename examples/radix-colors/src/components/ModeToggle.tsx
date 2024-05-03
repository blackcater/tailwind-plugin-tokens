'use client'

import { useTheme } from 'next-themes'
import * as React from 'react'

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <div className="flex flex-row items-center space-x-2">
      <button className="bg-gray-3 text-gray-12 rounded-md px-4 py-2 font-bold" type="button" onClick={() => setTheme('light')}>Light</button>
      <button className="bg-gray-3 text-gray-12 rounded-md px-4 py-2 font-bold" type="button" onClick={() => setTheme('dark')}>Dark</button>
      <button className="bg-gray-3 text-gray-12 rounded-md px-4 py-2 font-bold" type="button" onClick={() => setTheme('system')}>System</button>
    </div>
  )
}
