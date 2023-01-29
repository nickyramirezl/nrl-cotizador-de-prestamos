function Button({operador, fn}) {
  return (
    <button type='button'
        className='h-10 w-10 pb-1 flex items-center justify-center font-bold text-white text-2xl bg-emerald-500 rounded-full hover:outline-none hover:ring-2 hover:ring-ofset-2 hover:ring-emerald-500'
        onClick={fn} 
        >{operador}</button>
  )
}

export default Button