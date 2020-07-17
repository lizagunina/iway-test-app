import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({ params, onParamsChange }) => {
  const [newParams, setNewParams] = useState(0)

  const onValueChange = (e) => {
    const { name: type, value } = e.target
    setNewParams({ ...params, [type]: value })
  }

  return (
    <div className="my-2 flex flex-row items-center">
      <label htmlFor="order_status">Статус заказа: </label>
      <select
        className="appearance-none rounded-l border block bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        name="order_status"
        id="order_status"
        value={newParams.order_status}
        onChange={onValueChange}
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
        className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block px-4 py-2 bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
        aria-label="search by name"
        name="names"
        value={newParams.names}
        onChange={onValueChange}
      />

      <input
        placeholder="Email"
        className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block px-4 py-2 bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
        aria-label="search by email"
        name="email"
        value={newParams.email}
        onChange={onValueChange}
      />
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
