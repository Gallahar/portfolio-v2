'use client'

import { usePathname } from 'next/navigation'
import s from './locale-switcher.module.scss'
import { i18n } from '@/i18n-config'
import Link from 'next/link'

export const LocaleSwitcher = () => {
	const pathName = usePathname()

	const handleRedirect = (locale: string) => {
		if (!pathName) return '/'

		const segments = pathName.split('/')
		segments[1] = locale
		return segments.join('/')
	}

	return (
		<ul className={s.localeSwitcher}>
			{i18n.locales.map((locale) => (
				<li key={locale}>
					<Link
						data-active={pathName.includes(locale)}
						className={s.locale}
						href={handleRedirect(locale)}
					>
						{locale}
					</Link>
				</li>
			))}
		</ul>
	)
}
