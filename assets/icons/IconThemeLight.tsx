import { FC, SVGProps } from 'react'

export const IconThemeLight: FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			{...props}
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M11.9941 15.5C12.9647 15.5 13.7917 15.1603 14.475 14.4809C15.1583 13.8015 15.5 12.9765 15.5 12.0059C15.5 11.0353 15.1603 10.2083 14.4809 9.525C13.8015 8.84167 12.9765 8.5 12.0059 8.5C11.0353 8.5 10.2083 8.83971 9.525 9.51913C8.84167 10.1985 8.5 11.0235 8.5 11.9941C8.5 12.9647 8.83971 13.7917 9.51913 14.475C10.1985 15.1583 11.0235 15.5 11.9941 15.5ZM12 17C10.6167 17 9.4375 16.5125 8.4625 15.5375C7.4875 14.5625 7 13.3833 7 12C7 10.6167 7.4875 9.4375 8.4625 8.4625C9.4375 7.4875 10.6167 7 12 7C13.3833 7 14.5625 7.4875 15.5375 8.4625C16.5125 9.4375 17 10.6167 17 12C17 13.3833 16.5125 14.5625 15.5375 15.5375C14.5625 16.5125 13.3833 17 12 17ZM1.75 12.75C1.5375 12.75 1.35938 12.6777 1.21563 12.5331C1.07187 12.3885 1 12.2094 1 11.9956C1 11.7819 1.07187 11.6042 1.21563 11.4625C1.35938 11.3208 1.5375 11.25 1.75 11.25H4.25C4.4625 11.25 4.64062 11.3223 4.78437 11.4669C4.92813 11.6115 5 11.7906 5 12.0044C5 12.2181 4.92813 12.3958 4.78437 12.5375C4.64062 12.6792 4.4625 12.75 4.25 12.75H1.75ZM19.75 12.75C19.5375 12.75 19.3594 12.6777 19.2156 12.5331C19.0719 12.3885 19 12.2094 19 11.9956C19 11.7819 19.0719 11.6042 19.2156 11.4625C19.3594 11.3208 19.5375 11.25 19.75 11.25H22.25C22.4625 11.25 22.6406 11.3223 22.7844 11.4669C22.9281 11.6115 23 11.7906 23 12.0044C23 12.2181 22.9281 12.3958 22.7844 12.5375C22.6406 12.6792 22.4625 12.75 22.25 12.75H19.75ZM11.9956 5C11.7819 5 11.6042 4.92813 11.4625 4.78437C11.3208 4.64062 11.25 4.4625 11.25 4.25V1.75C11.25 1.5375 11.3223 1.35938 11.4669 1.21563C11.6115 1.07187 11.7906 1 12.0044 1C12.2181 1 12.3958 1.07187 12.5375 1.21563C12.6792 1.35938 12.75 1.5375 12.75 1.75V4.25C12.75 4.4625 12.6777 4.64062 12.5331 4.78437C12.3885 4.92813 12.2094 5 11.9956 5ZM11.9956 23C11.7819 23 11.6042 22.9281 11.4625 22.7844C11.3208 22.6406 11.25 22.4625 11.25 22.25V19.75C11.25 19.5375 11.3223 19.3594 11.4669 19.2156C11.6115 19.0719 11.7906 19 12.0044 19C12.2181 19 12.3958 19.0719 12.5375 19.2156C12.6792 19.3594 12.75 19.5375 12.75 19.75V22.25C12.75 22.4625 12.6777 22.6406 12.5331 22.7844C12.3885 22.9281 12.2094 23 11.9956 23ZM6 7.05L4.575 5.65C4.425 5.5 4.35309 5.31997 4.35928 5.10992C4.36544 4.89986 4.43649 4.72069 4.57243 4.57242C4.72069 4.42414 4.89986 4.35 5.10993 4.35C5.31998 4.35 5.5 4.425 5.65 4.575L7.05 6C7.18333 6.15 7.25 6.325 7.25 6.525C7.25 6.725 7.18333 6.89583 7.05 7.0375C6.91667 7.17917 6.74583 7.25 6.5375 7.25C6.32917 7.25 6.15 7.18333 6 7.05ZM18.35 19.425L16.95 18C16.8167 17.85 16.75 17.6719 16.75 17.4656C16.75 17.2594 16.8208 17.0875 16.9625 16.95C17.1042 16.8 17.275 16.725 17.475 16.725C17.675 16.725 17.85 16.8 18 16.95L19.425 18.35C19.575 18.5 19.6469 18.68 19.6407 18.8901C19.6346 19.1001 19.5635 19.2793 19.4276 19.4276C19.2793 19.5759 19.1001 19.65 18.8901 19.65C18.68 19.65 18.5 19.575 18.35 19.425ZM16.95 7.05C16.8 6.9 16.725 6.725 16.725 6.525C16.725 6.325 16.8 6.15 16.95 6L18.35 4.575C18.5 4.425 18.68 4.35309 18.8901 4.35927C19.1001 4.36544 19.2793 4.43649 19.4276 4.57242C19.5759 4.72069 19.65 4.89986 19.65 5.10992C19.65 5.31997 19.575 5.5 19.425 5.65L18 7.05C17.8667 7.18333 17.697 7.25 17.4909 7.25C17.2848 7.25 17.1045 7.18333 16.95 7.05ZM4.57243 19.4276C4.42414 19.2793 4.35 19.1001 4.35 18.8901C4.35 18.68 4.425 18.5 4.575 18.35L6 16.95C6.14667 16.8 6.32083 16.725 6.5225 16.725C6.72417 16.725 6.89674 16.8 7.04023 16.95C7.19674 17.1 7.275 17.275 7.275 17.475C7.275 17.675 7.2 17.85 7.05 18L5.65 19.425C5.5 19.575 5.31998 19.6469 5.10993 19.6407C4.89986 19.6346 4.72069 19.5635 4.57243 19.4276Z'
				fill='#393939'
			/>
		</svg>
	)
}