import { useEffect, useState } from 'react'
import Card from './Card'
import { useOutletContext } from 'react-router-dom';

const Pagination = () => {

    const [list, setList] = useOutletContext();
    const [showList, setShowList] = useState(null);

    const [cardsPerPage, setCardsPerPage] = useState(4)
    const [actualPage, setActualPage] = useState(1)
    const [totalRecords, setTotalRecords] = useState(0)

    useEffect(() => {
        if (list) {
            // console.log(list)
            setTotalRecords(list.length)
        }
    }, [list])

    // Change the list to show
    useEffect(() => {

        if (list) {
            const start = 0 + (actualPage - 1) * 4
            const end = 4 + (actualPage - 1) * 4
            // console.log(start, end)
            const newShowList = list.slice(start, end)
            setShowList(newShowList)
        }

    }, [list, actualPage])

    const eliminarRegistro = (index) => {
        const newList = [...list]
        newList.splice(index, 1)
        setList(newList);
    }


    return (
        <>
            <div className='text-center mb-3'>
                <div className="btn-group" role="group" >

                    {totalRecords && Array(Math.ceil(totalRecords / cardsPerPage))
                        .fill(0)
                        .map((item, index) => (
                            <button onClick={() => setActualPage(index + 1)} key={index + 1} type="button" className={"btn btn-outline-primary " + (actualPage == (index + 1) ? 'active' : '')}>{index + 1}</button>
                        ))}
                </div>
            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5 ">
                {showList && showList.map((item, index) => (
                    <Card key={index} index={index} item={item} eliminarRegistro={() => eliminarRegistro(index)} />
                ))}
            </div>

        </>
    )
}

export default Pagination