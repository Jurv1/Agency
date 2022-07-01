import React from 'react'

export const BodyMenu = (props) => {
  
  return (
    <div>
      <div className="body__menu">
        <ul className="body__list">
          <li className="body__item">
            <button type='button' onClick={() => props.filter('Show All')}>
              Show All
            </button>

          </li>
          <li className="body__item">
            <button type='button' onClick={() => props.filter('Design')}>
              Design
            </button>

          </li>
          <li className="body__item">
            <button type='button' onClick={() => props.filter('Branding')}>
              Branding
            </button>

          </li>
          <li className="body__item">
            <button type='button' onClick={() => props.filter('Illustration')}>
              Illustration
            </button>

          </li>
          <li className="body__item">
            <button type='button' onClick={() => props.filter('Motion')}>
              Motion
            </button>
          </li>
        </ul>
      </div>


      <div className="small__screen">
      <select className='panel' name="" id="">
        <option className='opinion' selected value="Show All">
        Show All
        </option>
        <option className='opinion' value="Design">
        Design
        </option>
        <option className='opinion' value="Branding">
        Branding
        </option>
        <option className='opinion' value="Illustration">
        Illustration
        </option>
        <option className='opinion' value="Motion">
        Motion
        </option>
      </select>
      </div>

    </div>
  )
}



export default BodyMenu