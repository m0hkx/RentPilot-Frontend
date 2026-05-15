import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useState, useRef, useEffect } from 'react'

export default function ExtendableSearch() {
    const [isExpanded, setIsExpanded] = useState(false)
    const [query, setQuery] = useState('')
    const containerRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    // Collapse when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsExpanded(false)
                setQuery('')
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    // Auto-focus input when expanded
    useEffect(() => {
        if (isExpanded && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isExpanded])

    function handleKeyDown(e: React.KeyboardEvent) {
        if (e.key === 'Escape') {
            setIsExpanded(false)
            setQuery('')
        }
    }

    return (
        <div
            ref={containerRef}
            className={`flex items-center h-14 bg-white rounded-full transition-all duration-300 ease-in-out cursor-pointer overflow-hidden ${
                isExpanded ? 'w-64 px-4' : 'w-14 justify-center'
            }`}
            onClick={() => !isExpanded && setIsExpanded(true)}
        >
            <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search..."
                className={`bg-transparent outline-none text-sm transition-all duration-300 ${
                    isExpanded ? 'opacity-100 w-full mr-2' : 'opacity-0 w-0 p-0'
                }`}
            />
            <MagnifyingGlassIcon className="w-7 h-7 shrink-0" />
        </div>
    )
}
