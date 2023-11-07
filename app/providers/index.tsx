'use client'
import { ThemeProvider as Theme } from 'next-themes'
import { ReactNode, useEffect, useState } from 'react'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

    if(!isClient){
        return <>{children}</>
    }

    return (
        <Theme>
            {children}
        </Theme>
    )
}
