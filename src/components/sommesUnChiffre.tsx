import { useState } from 'react'

function reduceToSingleDigit(n: number): { steps: string[]; final: number } {
  const steps: string[] = []
  let current = n

  while (current >= 10) { 
    const digits = String(current)
      .split('')
      .map((c) => Number(c))
    const sum = digits.reduce((acc, d) => acc + d, 0)
    steps.push(`${digits.join(' + ')} = ${sum}`)
    current = sum
  }

  return { steps, final: current }
}

function SommeUnChiffre() {
  const [input, setInput] = useState('4729')
  const [steps, setSteps] = useState<string[]>([])
  const [finalResult, setFinalResult] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const n = Number(input)
    if (Number.isNaN(n) || !Number.isInteger(n) || n < 0) {
      setError('Veuillez entrer un entier positif.')
      setSteps([])
      setFinalResult(null)
      return
    }

    setError(null)

    const { steps: s, final } = reduceToSingleDigit(n)
    setSteps(s)
    setFinalResult(final)
  }

  return (
    <>
      <h1>Somme des chiffres jusqu&apos;à un seul chiffre</h1>
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

      {!error && steps.length > 0 && (
        <div>
          {steps.map((s, idx) => (
            <div key={idx}>{s}</div>
          ))}
          {finalResult !== null && (
            <p>
              Résultat final : <strong>{finalResult}</strong>
            </p>
          )}
        </div>
      )}
    </>
  )
}

export default SommeUnChiffre
