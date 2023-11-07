import { FC } from 'react'
import s from './project-card.module.scss'
import ProjImg from '@/assets/projectImg.webp'
import Image from 'next/image'
import { Typography } from '../../ui'

interface ProjectCardProps {
	heading: string
	description: string
	date: string
	image?: string
}

export const ProjectCard: FC<ProjectCardProps> = ({
	heading,
	date,
	description,
	image,
}) => {
	return (
		<div className={s.card}>
			<Image
				className={s.image}
				alt={`project-img-${heading}`}
				src={image ?? ProjImg}
			/>
			<div className={s.textGroup}>
				<Typography variant='h3'>{heading}</Typography>
				<Typography variant='p'>{description}</Typography>
				<Typography variant='span'>{date}</Typography>
			</div>
		</div>
	)
}
