import React from 'react'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import OneWayBinding from './jsxSample/OneWayBinding'
import UserDetail from './propsSample/UserDetail'

function App() {

  return <>
  <UserDetail name="Ece" email="ece@mail.com" age={20} address="Süleyman Seba caddesi No:79 Beşiktaş" country="Türkiye"  />

  <UserDetail name="Çağatay" email="cagatay@mail.com" age={22} address="Moda mahallesi Kadıköy" country="Türkiye"  />
  </>

}


export default App