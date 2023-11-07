'use client'

import { useTheme } from 'next-themes'
import s from './theme-switcher.module.scss'
import { motion } from 'framer-motion'
import { IconThemeDark, IconThemeLight } from '@/assets/icons'

export const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme()

	return (
		<button
			className={s.themeSwitcher}
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
		>
			<motion.span
				whileHover={{
					scale: 1.2,
					transition: { duration: 0.2 },
				}}
				whileTap={{ scale: 0.9 }}
			>
				{theme === 'light' ? <IconThemeLight /> : <IconThemeDark />}
			</motion.span>
		</button>
	)
}
