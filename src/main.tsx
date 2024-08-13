import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Contact from './pages/contact'
import Root from './routes/root'
import NotFound from './pages/not-found'
import Edit from './pages/contact/edit'
import Test from './pages/test'
import { loader as contactLoader } from './pages/contact/loader'
import { loader as rootLoader } from './routes/loader'
import { action as rootAction } from './routes/action'
import { action as contactEditAction } from './pages/contact/edit/action'

// css
import './index.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: 'contacts/:contactId/edit',
        element: <Edit />,
        loader: contactLoader,
        action: contactEditAction,
      },
    ]
  },
  {
    path: '/test',
    element: <Test />,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
