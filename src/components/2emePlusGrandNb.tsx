import { useState } from 'react'

function secondLargest(tab: number[]): number | null {
  if (tab.length < 2) return null

  let max = -Infinity
  let second = -Infinity

  for (let i = 0; i < tab.length; i++) {
    const x = tab[i]
    if (x > max) {
      second = max
      max = x
    } else if (x < max && x > second) {
      second = x
    }
  }

  return second === -Infinity ? null : second
}

function DeuxiemePlusGrandNb() {
  const [arrayInput, setArrayInput] = useState('10, 5, 8, 20, 15')
  const [result, setResult] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const numbers = arrayInput
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s !== '')
      .map((s) => Number(s))
      .filter((n) => !Number.isNaN(n))

    if (numbers.length < 2) {
      setError('Le tableau doit contenir au moins deux nombres.')
      setResult(null)
      return
    }

    const second = secondLargest(numbers)
    if (second === null) {
      setError(
        'Impossible de trouver un deuxième plus grand (tous les éléments sont identiques ?).'
      )
      setResult(null)
    } else {
      setError(null)
      setResult(second)
    }
  }

  return (
    <>
      <h1>Deuxième plus grand nombre</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Tableau d&apos;entiers (séparés par des virgules) :
          <br />
          <input
            type="text"
            value={arrayInput}
            onChange={(e) => setArrayInput(e.target.value)}
            style={{ width: '100%', maxWidth: 400 }}
          />
        </label>
        <button type="submit" style={{ marginLeft: '0.5rem' }}>
          Chercher
        </button>
      </form>

      {error && (
        <p style={{ color: 'red', marginTop: '0.5rem' }}>
          {error}
        </p>
      )}

      {result !== null && !error && (
        <p style={{ marginTop: '0.5rem' }}>
          Le deuxième plus grand nombre est : <strong>{result}</strong>
        </p>
      )}
    </>
  )
}

export default DeuxiemePlusGrandNb
