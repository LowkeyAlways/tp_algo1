import { useState } from 'react'

function sumDigits(n: number): number {
  let sum = 0
  let value = Math.floor(Math.abs(n))

  while (value > 0) {
    sum += value % 10
    value = Math.floor(value / 10)
  }

  return sum
}

function SommeChiffresNb() {
  const [input, setInput] = useState('4729')
  const [result, setResult] = useState<number | null>(null)
  const [decomposition, setDecomposition] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const n = Number(input)
    if (
      Number.isNaN(n) ||
      !Number.isInteger(n) ||
      n < 0
    ) {
      setError('Veuillez entrer un entier positif.')
      setResult(null)
      setDecomposition('')
      return
    }

    setError(null)

    const digits = input.split('').map((c) => Number(c))
    const sum = digits.reduce((acc, d) => acc + d, 0)
    setResult(sum)
    setDecomposition(digits.join(' + '))
  }

  return (
    <>
      <h1>Somme des chiffres d'un nombre</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Entier positif :
          <br />
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            min={0}
          />
        </label>
        <button type="submit">
          Calculer
        </button>
      </form>

      {error && (
        <p>
          {error}
        </p>
      )}

      {result !== null && !error && (
        <p>
          {input} = {decomposition} = <strong>{result}</strong>
        </p>
      )}
    </>
  )
}

export default SommeChiffresNb
