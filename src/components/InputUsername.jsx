import { useEffect, useState } from 'react'

export default function InputUsername() {
  const [username, setUsername] = useState('')

  useEffect(() => {
    if (username.trimStart() !== username || username.trimEnd() !== username)
      setUsername(username.trimStart().trimEnd())
  }, [username])

  const handleSubmit = () => {
    window.location.assign(`?username=${username}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <input
        name='username'
        type='text'
        placeholder='Introduce tu usuario'
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      ></input>
      <button type='submit' disabled={username.length === 0}>
        Abrir Ludoteca
      </button>
    </form>
  )
}
