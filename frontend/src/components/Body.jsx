import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Layout'
import SignUpAndSignIn from './SignUpAndSignIn'
import Feed from './Feed'
import Profile from './Profile'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:'/',
            element:<Layout/>,
            children:[
                {
                    path:'/',
                    element:<Feed/>
                },
                {
                    path:'/profile',
                    element:<Profile/>
                }
            ]
        },
        {
            path:'/',
            element:<SignUpAndSignIn/>
        }
    ])

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body