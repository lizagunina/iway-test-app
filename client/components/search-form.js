import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({ params, onParamsChange }) => {
  const [newParams, setNewParams] = useState(0)

  const onValueChange = (e) => {
    const { name: type, value } = e.target
    setNewParams({ ...params, [type]: value })
  }

  return (
    <div className="search-block">
      <div className="search-fields">
        <label htmlFor="order_status">Статус заказа: </label>
        <select
          name="order_status"
          id="order_status"
          value={newParams.order_status}
          onChange={onValueChange}
          placeholder="статус заказа"
        >
          <option value="0">-</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <input
          placeholder="Имя"
          name="names"
          aria-label="search by name"
          value={newParams.names}
          onChange={onValueChange}
        />

        <input
          placeholder="Email"
          aria-label="search by email"
          name="email"
          value={newParams.email}
          onChange={onValueChange}
        />
      </div>
      <div>
        <button
          className="button"
          type="button"
          onClick={() => {
            onParamsChange({ ...params, ...newParams })
          }}
        >
          Применить
        </button>
      </div>
    </div>
  )
}

SearchForm.propTypes = {
  params: PropTypes.shape({
    page: PropTypes.number,
    names: PropTypes.string,
    email: PropTypes.string,
    order_status: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])
  }),
  onParamsChange: PropTypes.func
}

SearchForm.defaultProps = {
  params: {},
  onParamsChange: () => {}
}

export default SearchForm
