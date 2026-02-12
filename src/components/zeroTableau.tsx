import { useState } from 'react'
import '../styles/zeroTableau.css'

function createZeroMatrix(n: number, m: number): number[][] {
  const matrix: number[][] = []
  for (let i = 0; i < n; i++) {
    const row: number[] = []
    for (let j = 0; j < m; j++) {
      row.push(0)
    }
    matrix.push(row)
  }
  return matrix
}

function ZeroTableau() {
  const [nInput, setNInput] = useState('3')
  const [mInput, setMInput] = useState('4')
  const [matrix, setMatrix] = useState<number[][]>([])
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const n = Number(nInput)
    const m = Number(mInput)

    if (
      Number.isNaN(n) ||
      Number.isNaN(m) ||
      !Number.isInteger(n) ||
      !Number.isInteger(m) ||
      n <= 0 ||
      m <= 0
    ) {
      setError('n et m doivent être des entiers positifs.')
      setMatrix([])
      return
    }

    setError(null)
    setMatrix(createZeroMatrix(n, m))
  }

  return (
    <>
      <h1>Tableau de zéros n × m</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            n (lignes) :
            <br />
            <input
              type="number"
              value={nInput}
              onChange={(e) => setNInput(e.target.value)}
              min={1}
            />
          </label>
        </div>
        <div>
          <label>
            m (colonnes) :
            <br />
            <input
              type="number"
              value={mInput}
              onChange={(e) => setMInput(e.target.value)}
              min={1}
            />
          </label>
        </div>
        <button type="submit">
          Créer le tableau
        </button>
      </form>

      {error && (
        <p className='error'>
          {error}
        </p>
      )}

      {matrix.length > 0 && (
        <div style={{ marginTop: '1rem' }}>
          {matrix.map((row, i) => (
            <div key={i}>
              {row.join(' ')}
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default ZeroTableau
