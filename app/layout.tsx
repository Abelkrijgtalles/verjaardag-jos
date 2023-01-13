import '../styles/styles.css'
import NavBar from './NavBar'

import { Rubik } from '@next/font/google';
const fontje = Rubik({ subsets: ['latin']})

export default function Layout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode,
  }) {

    return (
        <div className={fontje.className}>
            <NavBar/>
            {children}
        </div>
    )
}