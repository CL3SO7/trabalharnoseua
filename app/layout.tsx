import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Trabalhar nos EUA | Vagas e preparação para brasileiros',description:'Encontre oportunidades de trabalho sazonal H-2A e H-2B nos Estados Unidos. Busque vagas e prepare sua jornada com ferramentas personalizadas.'};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="pt-BR"><body>{children}</body></html>}
