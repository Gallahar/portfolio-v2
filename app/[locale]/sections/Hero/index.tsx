import { Typography } from '../../ui'
import { Container } from '../../ui/Container'
import s from './hero.module.scss'

export const Hero = ({
	title,
	speech,
}: {
	title: string
	speech: { accent: string; rest: string }
}) => {
	return (
		<section className={s.heroSection}>
			<Container>
				<div className={s.speechBlock}>
					<Typography variant='h1'>{title}</Typography>
					<Typography variant='p'>
						<span className={s.accent}>{speech.accent}</span>
						{` `}
						{speech.rest}
					</Typography>
				</div>
			</Container>
		</section>
	)
}
