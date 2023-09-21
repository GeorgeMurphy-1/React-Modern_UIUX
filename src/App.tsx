import {Footer, Blog, Possibility, WhatisGPT4, Header, Features} from "./containers/main";
import { CTA, Brand, Navbar} from "./components"
import "./App.css"

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
        <Brand />
        <WhatisGPT4 />
        <Features />
        <Possibility />
        <CTA  />
        <Blog />
        <Footer />
    </div>
  )
}

export default App
