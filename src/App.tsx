import { Route, Routes } from 'react-router'
import { Layout } from './components/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Services from './pages/Services'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
