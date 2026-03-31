"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

interface Option {
  label: string
  value: string
}

interface SelectProps {
  options: Option[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  buttonClassName?: string
}

export default function Select({
  options,
  value,
  onChange,
  placeholder = "Select",
  buttonClassName,
}: SelectProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const selected = options.find((o) => o.value === value)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <div ref={ref} className="relative w-full text-sm">
      
      <button
        onClick={() => setOpen((o) => !o)}
        className={`w-full h-9 bg-gray-100 px-3 flex items-center justify-between border-r border-gray-300 ${buttonClassName ?? ""}`}
      >
        <span className="text-gray-700 truncate">
          {selected?.label || placeholder}
        </span>

        <ChevronDown
          size={16}
          className={`ml-2 text-gray-600 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 w-full bg-white text-gray-700 shadow-md border border-gray-200 z-50">
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => {
                onChange?.(opt.value)
                setOpen(false)
              }}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}