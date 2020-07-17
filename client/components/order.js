import React, { useState } from 'react'
import classnames from 'classnames'

const Order = ({ trip }) => {
  const [isInfoShown, changeIsInfoShown] = useState(false)

  return (
    <div className={classnames('orders-block', { 'orders-block_active': isInfoShown })}>
      <div>
        <div className="orders-block__header">
          <p>
            <b className="text-md">Заказ {trip.booker_number}</b> {trip.date}
          </p>
          <p>Статус заказа: {trip.status}</p>
        </div>

        <div className="passenger">
          <div className="title">Пассажиры ({trip.passengers_number})</div>
          <div className="passenger-block">
            <div className="passenger-block__item">
              <b className="passenger-block__title">Имя</b>
            </div>
            <div className="passenger-block__item">
              <b className="passenger-block__title">Телефон</b>
            </div>
            <div className="passenger-block__item">
              <b className="passenger-block__title">Email</b>
            </div>
          </div>
          {trip.passengers.map((passenger) => {
            return (
              <div key={passenger.client_id} className="passenger-block">
                <div className="passenger-block__item">{passenger.name}</div>
                <div className="passenger-block__item">{passenger.phone}</div>
                <div className="passenger-block__item">{passenger.email}</div>
              </div>
            )
          })}
        </div>
        <hr />
        <div>
          <div className="title">Маршрут</div>
          <div className="route">
            <div className="route__item">
              <b className="route__subtitle">Адрес и время подачи</b>
              <div className="route__text">{trip.location_address}</div>
              <div className="route__text">{trip.date_arrival}</div>
            </div>
            <div className="route__item">
              <b className="route__subtitle">Адрес назначения</b>
              <div className="route__text">{trip.destination_address}</div>
            </div>
            <div className="route__item" />
          </div>
        </div>

        <button
          className="orders-block__show-info"
          type="button"
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
                <li className="pb-2">Viverra orci sagittis eu volutpat odio facilisis mauris</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Order.propTypes = {}

export default Order
