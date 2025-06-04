'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function ToggleButton() {
  const [value, setValue] = useState<boolean>(false)

  const toggle = () => {
    setValue((prev) => !prev)
    console.log('Returned value:', !value)
  }

  return (
    <Button
      variant={value ? 'default' : 'outline'}
      onClick={toggle}
      className="w-32"
    >
      {value ? 'True' : 'False'}
    </Button>
  )
}
