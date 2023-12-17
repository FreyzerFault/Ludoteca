import './styles/App.css'

import { useState } from 'react'
import { useCollection } from './hooks/useCollection'
import { ColType, postPlay } from './services/bgg/bgg'

// Componentes React
import { SearchBar } from './components/SearchBar'
import { BoardGameCard } from './components/BoardGameCard'
import { BoardGameCollection } from './components/BoardGameCollection'
import LudotecaIcon from './components/icons/LudotecaIcon'
import InputUsername from './components/InputUsername'

const globalMock = false
const pathUsername = window.location.pathname.slice(1)

function App() {
  const [mock, setMock] = useState(globalMock)

  const [userName, setUserName] = useState(pathUsername)

  const { collection } = useCollection({
    mock,
    showExpansions: true,
    userName,
    colFilter: ColType.Owned,
    detailed: true,
  })

  return (
    <main>
      {/* // Activa los Datos de Prueba, esconder en prod */}
      {/* <section onClick={() => setMock(!mock)} className='mock-activator'>
        <span>Datos de prueba</span>
        <input
          type='checkbox'
          checked={mock}
          value={mock}
          onChange={(e) => setMock(e.target.checked)}
        />
      </section> */}

      <header>
        <LudotecaIcon className={'logo'} />
        <h1 className='title'>LUDOTECA</h1>
      </header>

      {userName.length === 0 && <InputUsername />}
      {userName.length > 0 && (
        <>
          <SearchBar
            maxResults={40}
            ComponentCardTemplateForResult={BoardGameCard}
            mock={mock}
            myCollection={collection}
            userName={userName}
          />

          <BoardGameCollection
            collection={collection}
            userName={userName}
          ></BoardGameCollection>

          {false && (
            <section>
              <button
                onClick={() =>
                  // authenticate({ username: 'Freyzer', password: 'Freyzer0.' })
                  postPlay()
                }
              >
                TEST POST Request
              </button>
            </section>
          )}
        </>
      )}
    </main>
  )
}

export default App
