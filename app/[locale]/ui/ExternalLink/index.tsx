import { ComponentPropsWithoutRef, FC } from 'react'
import s from './external-link.module.scss'

export const ExternalLink: FC<ComponentPropsWithoutRef<'a'>> = ({
	className,
	children,
	...rest
}) => {
	return <a className={`${s.externalLink} ${className}`}>{children}</a>
}
