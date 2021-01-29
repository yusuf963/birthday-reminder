import data from './data'
import List from './ListComponent'
import './index.css'
import { useState } from 'react'
const App = () => {
  const [people, updatePeople] = useState(data)
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthday Today</h3>
        <List peopleList={people} />
        <button onClick={() => updatePeople([])}>Clear All</button>
      </section>
    </main>
  )
}
export default App;
