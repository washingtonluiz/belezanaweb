import React from 'react'

import { globalStyles } from './assets/styles'

const App = () => {
  globalStyles()

  return (
    <div className="App">
      Boa sorte!{' '}
      <span role="img" aria-label="foguete">
        🚀
      </span>
    </div>
  )
}

export default App
