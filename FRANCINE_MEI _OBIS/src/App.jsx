import Header from './components/Header'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="container py-3">
      <Header />
      <main>
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default App
