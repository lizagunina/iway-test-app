import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'
import { getTrips } from '../redux/reducers/trips'

import Head from './head'
import SearchForm from './search-form'
import './pagination.scss'
import './orders-list.scss'

const OrdersList = () => {
  const dispatch = useDispatch()
  const [isInfoShown, changeIsInfoShown] = useState(false)
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
            <h1 className="text-indigo-500 text-2xl font-semibold leading-tight">Поездки</h1>

            <SearchForm params={params} onParamsChange={setParams} />
            {list.map((trip, i) => {
              return (
                <div key={trip.order_id} className="border-b">
                  <div className="border-l-2 border-transparent">
                    <div className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
                      <span className="text-grey-darkest font-thin text-sm">
                        <b className="text-md">Заказ {trip.booker_number}</b> {trip.date}
                      </span>
                    </div>
                    <button
                      className="rounded-full border border-grey w-7 h-7 flex items-center justify-center"
                      type="button"
                      tabIndex={i}
                      onClick={() => {
                        changeIsInfoShown(!isInfoShown)
                      }}
                    >
                      {!isInfoShown ? 'Подробнее' : 'Скрыть'}
                    </button>

                    {isInfoShown && (
                      <div>
                        <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                          <ul className="pl-4">
                            <li className="pb-2">consectetur adipiscing elit</li>
                            <li className="pb-2">
                              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </li>
                            <li className="pb-2">
                              Viverra orci sagittis eu volutpat odio facilisis mauris
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
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

OrdersList.propTypes = {}

export default OrdersList
