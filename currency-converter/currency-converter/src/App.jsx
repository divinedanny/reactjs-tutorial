import { useState } from 'react'
import './App.css'
import useCurrencyInformation from './hooks/UseCurencyInformation'
import { InputBox } from './component/index.js'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('ngn')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInformation(from)
  const options = Object.keys(currencyInfo)

  const convert = () => {    
      setConvertedAmount(Number(amount * currencyInfo[to]).toFixed(2))
  }
  const swap = () => {
    setTo(from)
    setFrom(to)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  return (
    <div className="w-full h-screen flex flex-wrap
     justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}
     >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 
        rounded-lg p-5 backdrop-blur-sm bg-white/30" >
          <form 
          onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className="w-full mb-1">
              <InputBox 
                label = "from"
                amount={amount}
                // onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                currencyOptions={options}
                selectedCurrency={from}
              />
              </div>
              <div className="relative w-full h-0.5">
                <button className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2
                 border-white rounded-md bg-green-600 text-white px-2 py-0.5"
                 onClick={swap}>
                  SWAP
                </button>
              </div>
            <div className="w-full mb-2">
            <InputBox
              label="to"
              amount={convertedAmount}
              // onAmountChange={(convertedAmount) => setAmount(convertedAmount)}
              onCurrencyChange={(currency) => setTo(currency)}
              currencyOptions={options}
              selectedCurrency={to}
              amountDisabled
            />
            </div>
            <button type="submit" className='w-full bg-green-600 text-white px-4 py-3 rounded-lg'>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
