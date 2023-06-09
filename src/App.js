import React from 'react'
import {Switch, Route , Link} from  'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import {Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails} from './components'
import './App.css'
// import 'antd/dist/antd.css';


const App = () => {
  return (
    <div className="app">
        {/* thiss is navbar component */}
        <div className='navbar'>
            <Navbar/>
        </div>

        {/* main part of the app */}
        <div className='main'> 
          <Layout>
            <div className='routes'>
              <Switch>

                <Route exact path = "/">
                  <Homepage />
                </Route>

                <Route exact path = "/exchanges">
                  <Exchanges/>
                </Route>
                
                <Route exact path = "/cryptocurrencies">
                  <Cryptocurrencies />
                </Route>


                <Route exact path = "/crypto/:coinId">
                  <CryptoDetails />
                </Route>

                <Route exact path = "/news">
                  <News />
                </Route>

              </Switch>
            </div>
          </Layout>

        

          <div className='footer'> 
            <Typography.Title level={5} style = {{color: 'white', textAlign: 'center' }}>
              CryptoNium <br/>
              {/* All rights reserved<br/> */}
              <p className='rohan'>Made With &#10084;&#65039; by Rohan </p>

            </Typography.Title>

            <Space>
              <Link to="/">Home</Link>
              <Link to="/cryptocurrencies">Cryptocurrencies</Link>
              {/* <Link to="/news">News</Link> */}
            </Space>
          </div>
        </div>
    </div>
  )
}

export default App