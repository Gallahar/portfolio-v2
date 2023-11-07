import { FC } from 'react'
import s from './projects.module.scss'
import { Container } from '../../ui'
import { ProjectCard } from '../../components/ProjectCard'

interface ProjectsProps {
	projects: { heading: string; description: string; date: string }[]
}

export const Projects: FC<ProjectsProps> = ({ projects }) => {
	return (
		<section id='projects' className={s.projectSection}>
			<Container className={s.container}>
				{projects.map((project) => (
					<ProjectCard key={project.heading} {...project} />
				))}
			</Container>
		</section>
	)
}
