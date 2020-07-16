import React from 'react'

const TripsBlock = () => {
  return (
    <div className="border-b">
      <div className="border-l-2 border-transparent">
        <div className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
          <span className="text-grey-darkest font-thin text-xl">
            Massa vitae tortor condimentum lacinia quis vel eros donec
          </span>
          <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center">
            подробнее
          </div>
        </div>
      </div>
    </div>
  )
}

// TripsTable.propTypes = {
//   filterParam: oneOfType([propTypes.string, propTypes.number, propTypes.arrayOf(propTypes.number)])
// }

// TripsTable.defaultProps = {
//   filterParam: ''
// }

export default TripsBlock
