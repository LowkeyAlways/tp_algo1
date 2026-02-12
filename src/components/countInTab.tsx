import { useState } from 'react'

function countInTab(tab: number[], x: number): number {
  let compteur = 0
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] === x) {
      compteur++
    }
  }
  return compteur
}

function CountInTab() {
  const [arrayInput, setArrayInput] = useState('4, 2, 4, 7, 4, 9')
  const [xInput, setXInput] = useState('4')
  const [result, setResult] = useState<number | null>(null)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const numbers = arrayInput
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s !== '')
      .map((s) => Number(s))
      .filter((n) => !Number.isNaN(n))

    const x = Number(xInput)
    if (Number.isNaN(x)) {
      setResult(null)
      return
    }

    const count = countInTab(numbers, x)
    setResult(count)
  }

  return (
    <>
      <h1>Compter les occurrences dans un tableau</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Tableau d'entiers (séparés par des virgules) :
            <br />
            <input
              type="text"
              value={arrayInput}
              onChange={(e) => setArrayInput(e.target.value)}
              style={{ width: '100%', maxWidth: 400 }}
            />
          </label>
        </div>

        <div>
          <label>
            Nombre X à rechercher :
            <br />
            <input
              type="number"
              value={xInput}
              onChange={(e) => setXInput(e.target.value)}
            />
          </label>
        </div>

        <button type="submit">
          Calculer
        </button>
      </form>

      <div>
        {result !== null && (
          <p>
            Le nombre apparaît <strong>{result}</strong> fois dans le tableau.
          </p>
        )}
      </div>
    </>
  )
}

export default CountInTab
