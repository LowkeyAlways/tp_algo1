import { useState } from 'react'

function isPalindrome(word: string): boolean {
  const cleaned = word.toLowerCase().replace(/\s+/g, '')
  const reversed = cleaned.split('').reverse().join('')
  return cleaned === reversed && cleaned.length > 0
}

function Palindrome() {
  const [word, setWord] = useState('')

  const result =
    word.length === 0
      ? ''
      : isPalindrome(word)
      ? 'palindrome'
      : 'pas palindrome'

  return (
    <>
      <h1>Vérifier un palindrome</h1>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Entrez un mot (ex : radar)"
      />
      {result && (
        <p>
          Le mot <strong>{word}</strong> est : <strong>{result}</strong>
        </p>
      )}
    </>
  )
}

export default Palindrome