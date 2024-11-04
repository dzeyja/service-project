import { HomePageAsynk } from 'pages/HomePage'
import { Suspense } from 'react'
import { Navbar } from 'widgets/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback='lodaing...'>
        <HomePageAsynk />
      </Suspense>
    </div>
  )
}

export default App