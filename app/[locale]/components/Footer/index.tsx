import { FC } from 'react'
import { Container, ExternalLink, Typography } from '../../ui'
import s from './footer.module.scss'

interface FooterProps {
	title: string
	links: { title: string; href: string }[]
	phrase: string
}

export const Footer: FC<FooterProps> = ({ title, links, phrase }) => {
	return (
		<footer id='contacts' className={s.footer}>
			<Container className={s.container}>
				<Typography variant='h2'>{title}</Typography>
				<div className={s.linksWrapper}>
					<ul className={s.links}>
						{links.map(({ title, href }) => (
							<li key={title}>
								<ExternalLink target='blank' href={href}>
									{title}
								</ExternalLink>
							</li>
						))}
					</ul>
					<Typography variant='p'>{phrase}</Typography>
				</div>
			</Container>
		</footer>
	)
}
