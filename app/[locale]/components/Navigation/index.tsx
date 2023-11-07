import { FC } from 'react'
import s from './navigation.module.scss'
import { navData } from '@/config/navData'
import { ActionLink } from '../../ui'
import { ThemeSwitcher } from '..'

interface NavigationProps {
	links: string[]
	lang: string
}

export const Navigation: FC<NavigationProps> = ({ links, lang }) => {
	const navLinks = navData.map((href, i) => ({ href, title: links[i] }))
	return (
		<nav className={s.nav}>
			<ul className={s.navList}>
				{navLinks.map(({ href, title }) => (
					<ActionLink
						key={title}
						href={typeof href === 'function' ? href(lang) : href}
					>
						{title}
					</ActionLink>
				))}
				<ThemeSwitcher />
			</ul>
		</nav>
	)
}
