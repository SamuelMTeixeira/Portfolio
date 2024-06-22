import {
  Bricolage_Grotesque as BricolageGrotesque,
  Manrope,
} from 'next/font/google'

export const manrope = Manrope({
  subsets: ['latin'],
  variable: '--manrope-font',
})

export const bricolageGrotesque = BricolageGrotesque({
  subsets: ['latin'],
  variable: '--bricolage-grotesque-font',
})
