import { useState } from "react";
import { InputBox } from "./components"
import useCurrencyConverter from "./hooks/useCurrencyConverter";

function App() {

  const [fromAmount, setFromAmount] = useState('')
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [fromCurrency , setFromCurrency] = useState("usd")
  const [toCurrency , setToCurrency] = useState("inr")

  const currencyInfo = useCurrencyConverter(fromCurrency)
  const currencyOptions = Object.keys(currencyInfo)

  const handleSwap = ()=>[
    setFromCurrency(toCurrency),
    setToCurrency(fromCurrency),
    setFromAmount(convertedAmount),
    setConvertedAmount(fromAmount)
  ]


  const handleConvert =()=>{
    setConvertedAmount(fromAmount*currencyInfo[toCurrency])
  }

  return (
    <>
      <div className="h-screen w-full bg-slate-800 flex justify-center items-center">
      <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                // conversionLable={fromLabel}
                                currencyoptions= {currencyOptions}
                                amount = {fromAmount}
                                setAmount={setFromAmount}
                                selectCurrency={fromCurrency}
                                setCurrencyChange= {setFromCurrency}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={handleSwap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                // conversionLable={toLabel}
                                currencyoptions= {currencyOptions}
                                amount = {convertedAmount}
                                selectCurrency={toCurrency}
                                setCurrencyChange= {setToCurrency}
                                
                            />
                        </div>
                        <button type="submit" onClick={handleConvert} className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {fromCurrency} to {toCurrency}
                            {/* {console.log(fromCurrency)} */}
                        </button>
                    </form>
                </div>
            </div>
      </div>
    </>
  )
}

export default App
