import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <h1>Home</h1>
            <Link to={'/Joao'}>Ver a pagina do João</Link>
        </>
    )
}

export default Home