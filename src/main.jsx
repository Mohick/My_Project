import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import DataCarSedans from './Main_Page/car/ItemsCar/sendans/handleSendans/dataCarSedans.jsx'
import DataCarTopogaphic from './Main_Page/car/ItemsCar/topogarphic/handleTopogaphic/dataCarTopographic.jsx'
import DataCoupe from './Main_Page/car/ItemsCar/coupe/DataCoupe/dataCoupe.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataCarSedans>
        <DataCarTopogaphic>
          <DataCoupe>
            <App />
          </DataCoupe>
        </DataCarTopogaphic>
      </DataCarSedans>
    </BrowserRouter>
  </React.StrictMode>,
)
