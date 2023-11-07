import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'
import s from './page.module.scss'
import { ActionLink } from './ui/ActionLink'
import { Header, LocaleSwitcher, Navigation } from './components'
import { Hero } from './sections/Hero'
import { Footer } from './components/Footer'
import { Projects } from './sections/Projects'

export default async function Home({
	params: { locale },
}: {
	params: { locale: Locale }
}) {
	const { footer, header, hero, projects } = await getDictionary(locale)

	return (
		<main>
			<Header>
				<div className={s.nameWrapper}>
					<ActionLink variant='filled' href='/'>
						{header.fullName.title}
					</ActionLink>
					<LocaleSwitcher />
				</div>
				<Navigation lang={locale} links={header.links} />
			</Header>
			<Hero speech={hero.speech} title={hero.title} />
			<Projects projects={projects} />
			<Footer
				links={footer.links}
				title={footer.title}
				phrase={footer.phrase}
			/>
		</main>
	)
}
