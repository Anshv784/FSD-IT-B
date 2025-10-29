
import Cart from '../Components/Cart.jsx'
import './App.css'

function App() {

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl text-center px-4">
        <h1 className="text-3xl font-bold mb-6">BOOK STORE</h1>
        <div className="flex flex-wrap justify-center">
         <Cart img="/img1.jpeg" title="Physics" price="487" />
         <Cart img="/img2.jpeg" title="Chemistry" price="278" />
         <Cart img="/img3.jpeg" title="Maths" price="787" />
        </div>
      </div>
    </div>
  )
}

export default App
