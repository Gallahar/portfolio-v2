import Link from 'next/link'
import s from './action-link.module.scss'
import { ComponentPropsWithoutRef, FC } from 'react'

export const ActionLink: FC<
	ComponentPropsWithoutRef<typeof Link> & { variant?: 'default' | 'filled' }
> = ({ className, children, variant = 'default', ...rest }) => {
	return (
		<Link className={`${s.link} ${s[variant]} ${className}`} {...rest}>
			{children}
		</Link>
	)
}
