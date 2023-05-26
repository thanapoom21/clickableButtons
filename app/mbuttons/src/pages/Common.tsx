import React from 'react'
import Header from '../components/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Common({
  activePage,
  showMenuButton,
}: {
  activePage: string
  pageTitle?: string
  showMenuButton: boolean
}) {
  return (
    <div className="sticky top-0 z-10">
      <ToastContainer />
      <Header activePage={activePage} showMenuButton={showMenuButton} />
    </div>
  )
}

export default Common
