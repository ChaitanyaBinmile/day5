import './App.css'
import Header from './components/Header'
import Left from './components/Left'
import Right from './components/Right'

function App() {


  return (

    <div className='flex flex-col justify-items-start rounded border-2px border-solid border-black bg-white h-screen w-screen overflow-x-hidden'>
      <Header></Header>
      <div className='flex flex-col justify-around items-center lg:flex-row gap-[50px] pt-[200px]'>
        <Left></Left>
        <Right></Right>

      </div>

    </div>

  )
}

export default App
