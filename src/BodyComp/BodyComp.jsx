import React from 'react'
import BodyCard from './BodyCont/BodyCards/BodyCard/BodyCard'
import BodyMenu from './BodyMenu/BodyMenu'
import cards from '../store'


export const BodyComp = (props) => {
  const [items, SetItems] = React.useState(cards)
  const [button, setButton] = React.useState([])

  const filter = (button) => {
    const filteredData = cards.filter(i => i.category === button)
    SetItems(filteredData)
  }
  let cardsElements =
    props.cards.map(i => <BodyCard className="son" image={i.image} name={i.name} category={i.category} />)
 
    return (
    <div className='content'>
      <div className="container">
        <BodyMenu filter={filter} />

        {/* <div className="parent">
          {cardsElements}
        </div> */}
        <div className="parent">
          <div className='body__card_1 body__card'>
            <a href="#">
              <p className="card__category">
                Design
              </p>
              <div className="card__name">
                SOFA
              </div>
            </a>

          </div><div className='body__card_2 body__card'>
            <a href="#">
              <p className="card__category">
                Branding
              </p>
              <div className="card__name">
                KeyBoard
              </div>
            </a>
          </div>

          <div className='body__card_3 body__card'>
            <a href="#">
              <p className="card__category">
                Illustration
              </p>
              <div className="card__name">
                Work Media
              </div>
            </a>

          </div>

          <div className='body__card_4 body__card'>
            <a href="#">
              <p className="card__category">
                Motion
              </p>
              <div className="card__name">
                DDDone
              </div>
            </a>

          </div>

          <div className='body__card_5 body__card'>
            <a href="#">
              <p className="card__category">
                Design
              </p>
              <div className="card__name">
                Abstract
              </div>
            </a>

          </div>

          <div className='body__card_6 body__card'>
            <a href="#">
              <p className="card__category">
                Branding
              </p>
              <div className="card__name">
                HandP
              </div>
            </a>

          </div>

          <div className='body__card_7 body__card'>
            <a href="#">
              <p className="card__category">
                Motion
              </p>
              <div className="card__name">
                Architect
              </div>
            </a>

          </div>

          <div className='body__card_8 body__card'>
            <a href="#">
              <p className="card__category">
                Design
              </p>
              <div className="card__name">
                CalC
              </div>
            </a>

          </div>

          <div className='body__card_9 body__card'>
            <a href="#">
              <p className="card__category">
                Branding
              </p>
              <div className="card__name">
                Sport
              </div>
            </a>

          </div>
        </div>




      </div>

    </div>

  )
}



export default BodyComp