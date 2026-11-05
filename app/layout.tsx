import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Rota USA | Seu caminho para trabalhar nos EUA',description:'Explore oportunidades sazonais nos Estados Unidos e conheça uma nova forma de planejar sua jornada.'};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="pt-BR"><body>{children}</body></html>}
