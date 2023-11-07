import { ReactNode } from 'react'
import s from './header.module.scss'
import { Container } from '../../ui'

export const Header = ({ children }: { children: ReactNode }) => {
	return (
		<header className={s.header}>
			<Container className={s.container}>{children}</Container>
		</header>
	)
}
