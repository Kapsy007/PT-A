import dynamic from 'next/dynamic'; const PortfolioApp = dynamic(()=>import('../components/PortfolioApp'),{ssr:false}); export default function Home(){return <PortfolioApp/>}
