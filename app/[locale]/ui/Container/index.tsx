import { ComponentPropsWithoutRef, FC } from 'react'
import s from './container.module.scss'

export const Container: FC<ComponentPropsWithoutRef<'div'>> = ({
	className,
	children,
	...rest
}) => {
	return (
		<div className={`${s.container} ${className}`} {...rest}>
			{children}
		</div>
	)
}
