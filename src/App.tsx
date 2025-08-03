import { useState, useEffect } from 'react'
import './App.css'

// Weight units and their conversion factors to grams
const WEIGHT_UNITS = {
  mg: { name: 'Milligrams', factor: 0.001 },
  g: { name: 'Grams', factor: 1 },
  kg: { name: 'Kilograms', factor: 1000 },
  lb: { name: 'Pounds', factor: 453.59237 },
  oz: { name: 'Ounces', factor: 28.349523125 },
  st: { name: 'Stones', factor: 6350.29318 },
  ton: { name: 'Tons', factor: 1000000 }
} as const

type WeightUnit = keyof typeof WEIGHT_UNITS

function App() {
  const [inputValue, setInputValue] = useState<string>('')
  const [inputUnit, setInputUnit] = useState<WeightUnit>('kg')
  const [outputUnit, setOutputUnit] = useState<WeightUnit>('lb')
  const [convertedValue, setConvertedValue] = useState<string>('')

  // Convert weight from one unit to another
  const convertWeight = (value: number, fromUnit: WeightUnit, toUnit: WeightUnit): number => {
    if (fromUnit === toUnit) return value
    
    // Convert to grams first, then to target unit
    const grams = value * WEIGHT_UNITS[fromUnit].factor
    return grams / WEIGHT_UNITS[toUnit].factor
  }

  // Format the result with appropriate precision
  const formatResult = (value: number): string => {
    if (value === 0) return '0'
    if (Math.abs(value) < 0.000001) return value.toExponential(2)
    if (Math.abs(value) < 0.01) return value.toFixed(6)
    if (Math.abs(value) < 1) return value.toFixed(4)
    if (Math.abs(value) < 100) return value.toFixed(3)
    if (Math.abs(value) < 10000) return value.toFixed(2)
    return value.toFixed(1)
  }

  // Real-time conversion as user types
  useEffect(() => {
    const numValue = parseFloat(inputValue)
    if (!isNaN(numValue) && inputValue !== '') {
      const converted = convertWeight(numValue, inputUnit, outputUnit)
      setConvertedValue(formatResult(converted))
    } else {
      setConvertedValue('')
    }
  }, [inputValue, inputUnit, outputUnit])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // Allow empty string, numbers, decimals, and negative numbers
    if (value === '' || /^-?\d*\.?\d*$/.test(value)) {
      setInputValue(value)
    }
  }

  const swapUnits = () => {
    setInputUnit(outputUnit)
    setOutputUnit(inputUnit)
  }

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>Weight Converter</h1>
          <p>Convert between different weight units instantly</p>
        </header>

        <div className="converter">
          <div className="input-section">
            <div className="input-group">
              <label htmlFor="input-value">Weight</label>
              <input
                id="input-value"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter weight..."
                className="weight-input"
              />
            </div>
            
            <div className="unit-selector">
              <label htmlFor="input-unit">From</label>
              <select
                id="input-unit"
                value={inputUnit}
                onChange={(e) => setInputUnit(e.target.value as WeightUnit)}
                className="unit-select"
              >
                {Object.entries(WEIGHT_UNITS).map(([unit, { name }]) => (
                  <option key={unit} value={unit}>
                    {name} ({unit})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button onClick={swapUnits} className="swap-button" aria-label="Swap units">
            ⇄
          </button>

          <div className="output-section">
            <div className="unit-selector">
              <label htmlFor="output-unit">To</label>
              <select
                id="output-unit"
                value={outputUnit}
                onChange={(e) => setOutputUnit(e.target.value as WeightUnit)}
                className="unit-select"
              >
                {Object.entries(WEIGHT_UNITS).map(([unit, { name }]) => (
                  <option key={unit} value={unit}>
                    {name} ({unit})
                  </option>
                ))}
              </select>
            </div>

            <div className="result-display">
              <label>Result</label>
              <div className="result-value">
                {convertedValue ? (
                  <>
                    <span className="number">{convertedValue}</span>
                    <span className="unit">{outputUnit}</span>
                  </>
                ) : (
                  <span className="placeholder">Enter a value to convert</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {inputValue && convertedValue && (
          <div className="conversion-info">
            <p>
              {inputValue} {inputUnit} = {convertedValue} {outputUnit}
            </p>
          </div>
        )}

        <footer className="footer">
          <p>Supports: {Object.keys(WEIGHT_UNITS).join(', ').toUpperCase()}</p>
        </footer>
      </div>
    </div>
  )
}

export default App
