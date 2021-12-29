import { Link } from 'react-router-dom'
import React from 'react'

import './home.css'

import PageStructure from '../../Components/PageStructure'


export default function Home () {
  
  return(
    <PageStructure>
    <div className="homeApresentation">
      <div className='containerApresentation'>
        <h1>Os melhores <span>aparelhos dentários</span>!</h1>
          <p> Confira abaixo todas as especialidades odontológicas que temos à sua disposição!</p>

      <ul className='serviceList'>
        <li>
          <img src='https://cdn.pixabay.com/photo/2020/08/26/16/52/tooth-5520076_1280.png' alt="logo" title="logo"/>
            <p>Pré-avaliação</p>
        </li>

        <li>
          <img src="https://cdn.pixabay.com/photo/2020/08/26/16/52/tooth-5520076_1280.png" alt="logo" title="logo"/>
            <p>Aparelhos Dentários</p>
        </li>

        <li>
          <img src="https://cdn.pixabay.com/photo/2020/08/26/16/52/tooth-5520076_1280.png" alt="logo" title="logo"/>
            <p>Raio-X digital</p>
        </li>

        <li>
          <img src="https://cdn.pixabay.com/photo/2020/08/26/16/52/tooth-5520076_1280.png" alt="logo" title="logo"/>
            <p>Clareamento dental</p>
        </li>
      </ul>
      </div>
      
      <div className='contentContainer'>
      <h2 className='contentTitle'>Por que usar <span>aparelho</span>?</h2>
        <img className='contentImg' src='https://images.pexels.com/photos/3946830/pexels-photo-3946830.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' alt='aparelho'/>
      
      
      <ul className='contentList'>
        <li>
          <h3>Alinhar os dentes</h3>
          <p>Dentes desalinhados causam problemas nos dentes e podem afetar a digestão dos alimentos e a respiração.</p>
        </li>
        <li>
          <h3>Melhorar a dicção e a higiene dentária</h3>
          <p>Muitas pessoas não conseguem nem usar fio dental devido à posição da sua dentição. Contudo, a correção possibilita o cuidado com a saúde bucal de forma bem mais ampla.</p>
        </li>
        <li>
          <h3>Corrigir espaço entre os dentes</h3>
          <p>Uma dentição desalinhada e com espaços significativos incomodam muitas pessoas. Usar aparelho nos dentes é uma das formas mais eficientes para que esses problemas possam ser corrigidos.</p>
        </li>
      </ul>
      </div>

      <div className='contentContainer'>
          <h2 className='titleReviews'> Veja o que nossos <span>clientes</span> estão falando...</h2>

          <ul className='listReviews'>
            <li>
              <img className='imgReviews' src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'/>
              <p>Eliana</p>
              <p>Meus dentes eram espaçados e depois de 1 ano estão no lugar certo.</p>
            </li>
            <li>
              <img className='imgReviews' src='https://images.pexels.com/photos/7674858/pexels-photo-7674858.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
              <p>Carla</p>
              <p>Começei a usar ano passado e já estou notando a diferença.</p>
            </li>
            <li>
              <img className='imgReviews' src='https://images.pexels.com/photos/1524141/pexels-photo-1524141.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'/>
              <p>Jessica</p>
              <p>Usei aparelho por 2 anos e agora posso sorrir novamente.</p>
            </li>
          </ul>

           
      </div>
    </div>
    </PageStructure>
  )
}