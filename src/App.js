import React, {useState} from 'react'
import './App.module.sass'
import c from './App.module.sass'
import { Button } from './components/UI/Button/Button'
import { Modal } from './components/UI/Modal/Modal'

function App() {
  
  const [settings, setSettings] = useState(false)
  console.log(settings)
  
  return (
    <header className={c.App}>
      <h1 className={c.HeaderTitle}>pomodoro</h1>
      <div className={c.Switcher}/>
      <div className={c.Clock}/>
      
      {
        settings
          ? <Modal/>
          : null
      }
      <Button
        setSettings={setSettings}
        settings={settings}
      />
    </header>
  )
}

export default App
