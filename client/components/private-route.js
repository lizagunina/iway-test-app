import React, { useState, useEffect } from 'react'
// import propTypes, { oneOfType } from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { getTrips } from '../redux/reducers/trips'

import Head from './head'

const PrivateComponent = () => {
  const dispatch = useDispatch()
  const [isInfoShown, changeIsInfoShown] = useState(false)
  const trips = useSelector((s) => s.trips.list)

  useEffect(() => {
    dispatch(getTrips())
  }, [])

  return (
    <>
      <Head title="Trips" />
      <main>
        <div className="container">
          <section className="shadow w-3/5 p-8 mx-auto">
            <h1 className="mb-4 text-md text-bold">Поездки</h1>
            {trips.map((trip, i) => {
              return (
                <div key={trip.booker_number} className="border-b">
                  <div className="border-l-2 border-transparent">
                    <div className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
                      <span className="text-grey-darkest font-thin text-xl">
                        {trip.booker_number}
                      </span>
                      <div
                        className="rounded-full border border-grey w-7 h-7 flex items-center justify-center"
                        role="button"
                        tabIndex={i}
                        onClick={changeIsInfoShown(!isInfoShown)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            changeIsInfoShown(!isInfoShown)
                          }
                        }}
                      >
                        подробнее
                      </div>
                    </div>
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
          </section>
        </div>
      </main>
    </>
  )
}

PrivateComponent.propTypes = {}

export default React.memo(PrivateComponent)
