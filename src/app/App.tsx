import { userActions } from 'entities/User'
import { HomePageAsynk } from 'pages/HomePage'
import { Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navbar } from 'widgets/Navbar'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.initUserAuto())    
  }, [])

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