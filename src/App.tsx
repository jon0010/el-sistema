import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { LibroPage } from './pages/LibroPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/libro" replace />} />
        <Route path="/libro" element={<LibroPage />} />
        <Route path="*" element={<Navigate to="/libro" replace />} />
      </Route>
    </Routes>
  )
}
