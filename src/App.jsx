
import './App.css'
import SignUp from './components/SignUp'
import AuthProvider from './context/AuthProvider'
import firebase from "/firebase/app"
import Login from './components/Login'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Dashboard from './components/Dashboard'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "signup",
      element: <SignUp />
    },
    {
      path: "dashboard",
      element: <Dashboard />
    }
  ])

  return (
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  )
}

export default App
