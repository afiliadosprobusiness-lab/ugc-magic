import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'

const Landing = lazy(() => import('./pages/marketing/Landing'))
const Login = lazy(() => import('./pages/auth/Login'))
const Register = lazy(() => import('./pages/auth/Register'))
const BookDemo = lazy(() => import('./pages/marketing/BookDemo'))
const AppLayout = lazy(() => import('./components/app/AppLayout'))
const Overview = lazy(() => import('./pages/app/Overview'))
const AngleEngine = lazy(() => import('./pages/app/AngleEngine'))
const UgcCreator = lazy(() => import('./pages/app/UgcCreator'))
const Library = lazy(() => import('./pages/app/Library'))
const Settings = lazy(() => import('./pages/app/Settings'))

function RouteFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050814] px-6">
      <div className="rounded-[28px] border border-white/10 bg-white/[0.03] px-6 py-4 text-sm font-medium text-white/70 backdrop-blur-xl">
        Loading Vyra...
      </div>
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <svg className="noise-overlay" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      <Router>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/book-demo" element={<BookDemo />} />

            <Route path="/app" element={<AppLayout />}>
              <Route index element={<Navigate to="/app/overview" replace />} />
              <Route path="overview" element={<Overview />} />
              <Route path="angles" element={<AngleEngine />} />
              <Route path="ugc" element={<UgcCreator />} />
              <Route path="library" element={<Library />} />
              <Route path="settings" element={<Settings />} />
              <Route path="requests" element={<Navigate to="/app/angles" replace />} />
              <Route path="assets" element={<Navigate to="/app/library" replace />} />
              <Route path="direction" element={<Navigate to="/app/angles" replace />} />
              <Route path="creators" element={<Navigate to="/app/ugc" replace />} />
              <Route path="plans" element={<Navigate to="/book-demo" replace />} />
              <Route path="*" element={<Navigate to="/app/overview" replace />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Router>
    </LanguageProvider>
  )
}
