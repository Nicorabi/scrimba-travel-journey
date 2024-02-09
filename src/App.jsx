import './App.css'
import Navbar from './Navbar'
import Card from './Card'
import data from './data'


function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.title}
        img={item.imageUrl}
        location={item.location}
        google={item.googleMapsUrl}
        title={item.title}
        start={item.startDate}
        end={item.endDate}
        description={item.description}
      />
    )
  })

  return (

    < div >
      <Navbar />
      {cards}
    </ div>
  )
}

export default App
