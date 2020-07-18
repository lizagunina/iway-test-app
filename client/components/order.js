import React, { useState } from 'react'
import classnames from 'classnames'

const Order = ({ trip }) => {
  const [isInfoShown, changeIsInfoShown] = useState(false)

  return (
    <div className={classnames('orders-block', { 'orders-block_active': isInfoShown })}>
      <div>
        <div className="orders-block__header">
          <p>
            <b>Заказ {trip.booker_number}</b> {trip.date}
          </p>
          <p>Статус заказа: {trip.status}</p>
        </div>

        <div className="info">
          <div className="title">Пассажиры ({trip.passengers_number})</div>
          <div className="info-block">
            <div className="info-block__item">
              <b>Имя</b>
            </div>
            <div className="info-block__item">
              <b>Контакты</b>
            </div>
          </div>
          {trip.passengers.map((passenger) => {
            return (
              <div key={passenger.client_id} className="info-block">
                <div className="info-block__item">{passenger.name}</div>
                <div className="info-block__item">
                  <p>{passenger.phone}</p>
                  <p>{passenger.email}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="info">
          <div className="title">Маршрут</div>
          <div className="info-block">
            <div className="info-block__item">
              <b>Адрес и время подачи</b>
              <div>{trip.location_address}</div>
              <div>{trip.date_arrival}</div>
            </div>
            <div className="info-block__item">
              <b>Адрес назначения</b>
              <div>{trip.destination_address}</div>
            </div>
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
          <div className="info">
            <div className="title">Информация о водителе и автомобиле</div>
            <div className="info-block">
              <div className="info-block__item">
                <b>Автомобиль</b>
                <div>Класс: {trip.car_data?.car_class}</div>
                <div>Модель: {trip.driver_data?.driver_car}</div>
              </div>
              <div className="info-block__item">
                <b>Водитель</b>
                <div>{trip.driver_data?.driver_name}</div>
                <div>{trip.driver_data?.driver_phone}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Order.propTypes = {}

export default Order
