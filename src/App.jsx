import { useEffect, useState } from 'react'
import Header from "./components/Header"
import Button from "./components/Button"
import { formatearDinero, calcularTotalPagar } from './helpers'

function App() {

  const [cantidad, setCantidad] = useState(10000)
  const [meses, setMeses] = useState(6)
  const [total, setTotal] = useState(0)
  const [pago, setPago] = useState(0)

  useEffect(() => {
    setTotal(calcularTotalPagar(cantidad,meses))

    // Calcular el pago mensual
    setPago(total / meses)
  }, [cantidad, meses, total])
  
  const MIN = 0
  const MAX = 20000
  const STEP = 100

  function handleChange(e){
    setCantidad(+e.target.value)
  }

  function handleClickDecremento(e){
    const valor = cantidad - STEP
    if(valor < MIN){
      alert('Cantidad mínima alcanzada')
      return
    }

    setCantidad(valor)
  }
  function handleClickIncremento(e){
    const valor = cantidad + STEP
    if(valor > MAX){
      alert('Cantidad máxima alcanzada')
      return
    }

    setCantidad(valor)
  }

  return (

    <main className="">

      <section className="mt-20 mb-10 max-w-lg mx-auto bg-white drop-shadow-lg py-5 px-10 rounded-md">

        <Header />

        <p className='text-center my-3 text-5xl font-extrabold text-emerald-500 bg-slate-100 py-4 rounded-md'>
          {formatearDinero(cantidad)}
        </p>

        <div className='flex justify-between mt-12 mb-5'>
          <Button operador='-' fn={handleClickDecremento}/>
          <Button operador='+' fn={handleClickIncremento}/>
        </div>

        <input
          type="range"
          className="w-full h-6 bg-gray-200 accent-emerald-500 hover:accent-emerald-600 cursor-pointer mb-10"
          onChange={handleChange}
          min={MIN}
          max={MAX}
          step={STEP}
          value={cantidad}
        />

        <h2 className='text-2xl font-bold text-gray-400 text-center'>
          Elige un <span className='text-sky-500'>plazo</span> para pagar
        </h2>

        <select
          className='my-5 w-full p-2 bg-slate-100 border border-gray-200 rounded-lg text-center text-xl font-bold text-gray-500'
          value={meses}
          onChange={ e => setMeses(+e.target.value) }
        >
          <option value="6">6 Meses</option>
          <option value="12">12 Meses</option>
          <option value="24">24 Meses</option>
        </select>
      </section>

      <section className='max-w-lg mx-auto bg-white drop-shadow-lg py-5 px-10 rounded-md mb-20'>
        <h2 className='text-2xl font-bold text-gray-400 text-center uppercase mb-5'>
          Resumen <span className='text-sky-500'>de pagos </span>
        </h2>

        <p className='text-xl text-gray-500 text-center font-semibold mb-4'><span className='bg-slate-200 px-3 py-1 rounded-md font-bold'>{meses}</span> <span className='text-gray-400'>Meses</span> </p>
        <p className='text-xl text-gray-500 text-center font-semibold mb-4'><span className='bg-slate-200 px-3 py-1 rounded-md font-bold'>{formatearDinero(total)}</span> <span className='text-gray-400'>Total a pagar</span> </p>
        <p className='text-xl text-gray-500 text-center font-semibold mb-4'><span className='bg-slate-200 px-3 py-1 rounded-md font-bold'>{formatearDinero(pago)}</span> <span className='text-gray-400'>Pago mensual</span> </p>
      </section>

      <footer className='mx-auto bg-white py-5 px-10 rounded-md drop-shadow-2xl text-center'>
        <p className='text-gray-400 font-bold'>Nicky Ramírez L</p>
      </footer>

    </main>
    
  )

}

export default App
