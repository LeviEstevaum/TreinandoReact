import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './testeCss.css'
import Dados from './Componentes/Testando'
function App(){
  // const [count, setCount] = useState(0)

  let dadosPessoa = {
    nome: 'Julia',
    img:'https://www.w3schools.com/howto/img_avatar2.png',
    idade: 20,
    cargo: 'Desenvolvedora Full Stack'
  }
  
  return (
    <>
    <body>
    <Dados nome={dadosPessoa.nome} idade={dadosPessoa.idade} cargo={dadosPessoa.cargo} imagem={dadosPessoa.img}></Dados>
    </body>
    </>
  )
}
export default App
