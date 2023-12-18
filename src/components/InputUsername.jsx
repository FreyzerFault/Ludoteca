import { useEffect, useState } from 'react'

export default function InputUsername() {
  const [username, setUsername] = useState('')

  useEffect(() => {
    if (username.trimStart() !== username || username.trimEnd() !== username)
      setUsername(username.trimStart().trimEnd())
  }, [username])

  return (
    <form
      className='username-form'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <input
        className='username-input'
        name='bgg-username'
        type='text'
        placeholder='Introduce tu usuario de BGG'
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      ></input>
      <button
        type='submit'
        className='username-submit-btn'
        disabled={username.length === 0}
      >
        Ver Ludoteca
      </button>
    </form>
  )
}
