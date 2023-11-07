import { FC, ReactNode } from 'react'
import s from './typography.module.scss'

interface TypographyProps {
	className?: string
	children?: ReactNode
	variant: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p'
}

export const Typography: FC<TypographyProps> = ({
	children,
	className,
	variant,
}) => {
	const Tag = variant

	return (
		<Tag className={`${s.typography} ${s[variant]} ${className}`}>
			{children}
		</Tag>
	)
}
