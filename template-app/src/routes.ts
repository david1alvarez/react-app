// pages
import { Home } from './pages/Home'
import { Page1 } from './pages/Page1'
import { Page2 } from './pages/Page2'

// other
import { FC } from 'react'

// interface
interface Route {
  key: string
  title: string
  path: string
  enabled: boolean
  component: FC<Record<string, unknown>>
}

export const routes: Array<Route> = [
  {
    key: 'home-route',
    title: 'Home Page',
    path: '/',
    enabled: true,
    component: Home,
  },
  {
    key: 'page-1-route',
    title: 'Page 1',
    path: '/page1',
    enabled: true,
    component: Page1,
  },
  {
    key: 'page-2-route',
    title: 'Page 2',
    path: '/page2',
    enabled: true,
    component: Page2,
  },
]
