import { Header } from './components/Header/Header'
import { TaskForm } from './components/TaskForm/TaskForm'
import './global.css'
import styles from './App.module.css'

function App() {

  return (
    <>
      <Header />
      <div className={styles.wraper}>
        <TaskForm />
      </div>
    </>
  )
}

export default App
