import React from "react";
import { useState, useMemo, useEffect, useRef } from "react";
import "./App.css"
import TicketBook from "./component/TicketBook";
import ApiCallOne from "./component/ApiCallOne";
import ApiTwoComp from "./component/ApiTwoComp";
import ExampleTwo from "./component/ExampleTwo";
import Form from "./component/Form";
import About from "./component/About";
import Home from "./component/Home";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Product from "./component/Product";
import MovieBook from "./component/MovieBook";


function App() {

  const [isLog, setisLog] = useState(true)

  const [names, setnames] = useState(["luffy", "zoro", "sanji"])


  const handlelog = () => {
    setisLog(false)
  }


  const handlemultiply = useMemo((no1, no2) => {
    let a = no1 * no2
    return a
  }, [])

  // const handlemultiply = useCallback((no1, no2) => {
  //   let a = no1 * no2
  //   return a
  // }, [no1, no2])

  return (

    <BrowserRouter>
      <div>
        <h1>Today - { }</h1>
        {/* <TicketBook /> */}

        {/* <ApiCallOne />/ */}

        {/* {isLog ? <ApiCallOne /> : null} */}


        {/* <Form /> */}

        {/* {isLog ? <AppCallOne /> : null} */}
        {/* <button>Logout</button> */}

        {/* <ApiTwoComp /> */}

        {/* <ExampleTwo /> */}


        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link> */}


        {/* <Routes>
          {/* <Home />
            <About />
            <Product /> */}
        {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />


        </Routes> */}

        <MovieBook name="Remo" rating="5" setnames={setnames} />
        {/* <MovieBook name="Mangatha" rating="7" setnames={setnames} /> */}

      </div>
    </BrowserRouter>
  )
}

export default React.memo(App)