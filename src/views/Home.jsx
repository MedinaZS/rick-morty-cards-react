
import Card from '../components/Card'
import PageTitle from '../components/PageTitle'
import { useOutletContext } from 'react-router-dom'
import { APP_ROUTES } from '../utility'
import Pagination from '../components/Pagination'

const Home = () => {

    return (
        <>
            <PageTitle title={'Rick and Morty'} iconHref={APP_ROUTES.ADD_NEW} />
            <Pagination/>
        </>
    )
}

export default Home