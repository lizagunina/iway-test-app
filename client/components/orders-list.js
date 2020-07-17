import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'
import { getTrips } from '../redux/reducers/trips'

import Head from './head'
import SearchForm from './search-form'
import Order from './order'

const OrdersList = () => {
  const dispatch = useDispatch()
  const [params, setParams] = useState({})

  const list = useSelector((s) => s.trips.list)
  const pageCount = useSelector((s) => s.trips.pageCount)

  const onPageClick = (e) => {
    setParams({ ...params, page: e.selected })
  }

  useEffect(() => {
    dispatch(getTrips(params))
  }, [params])

  return (
    <>
      <Head title="Trips" />
      <main>
        <div className="container mx-auto">
          <div className="orders">
            <h1 className="orders__header">Поездки</h1>

            <SearchForm params={params} onParamsChange={setParams} />
            {list.map((trip) => {
              return <Order key={trip.order_id} trip={trip} />
            })}
            {pageCount > 1 && (
              <ReactPaginate
                previousLabel="<"
                nextLabel=">"
                breakLabel="..."
                breakClassName="break-me"
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={onPageClick}
                containerClassName="pagination"
                subContainerClassName="pages pagination"
                activeClassName="active"
              />
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default OrdersList
