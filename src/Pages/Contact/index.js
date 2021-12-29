import React from 'react'

import './contact.css'

import PageStructure from '../../Components/PageStructure'
import ContactMap from '../../Components/Map'

export default function Contact () {
    
    return (
      <PageStructure>
      <div className='contactContainer'>
        <div className='contactMap'>

          <h2 className='titleContact'>Horários de <span>atendimento</span></h2>
            <p>Agenda uma consulta pelo telefone (99)9999-9999</p>

          <ul className='doctorsList'>
              <li>
                <img className='imgDoctor' src='https://images.pexels.com/photos/4270088/pexels-photo-4270088.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'/>
                <p>Dr. Ana</p>
                <p> Segundas, quartas e sextas das 9h às 16h</p>
              </li>
              <li>
                <img className='imgDoctor' src='https://images.pexels.com/photos/3845737/pexels-photo-3845737.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'/>
                <p>Dr. Bruno</p>
                <p> Segundas, terças e quintas das 9h às 13h</p>
              </li>
              <li>
                <img className='imgDoctor' src='https://images.pexels.com/photos/5355855/pexels-photo-5355855.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
                <p>Dr. Camila</p>
                <p> Terças e sextas das 7h às 15h</p>
              </li>
          </ul>
        </div>

        <div className='contactContainer'>
          <h2 className='titleContact'>Onde estamos <span>localizados</span>?</h2>
            <div className='map'>
            <ContactMap />
            </div>
        </div>
      </div>
      </PageStructure>
    )
}