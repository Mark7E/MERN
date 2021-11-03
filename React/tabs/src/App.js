import './App.css';
import React, { useState } from 'react';
import Tabs from "./components/Tabs"
import TabView from './components/TabView';
function App() {

  const [tabs, setTabs] = useState([
    { tab: "this is tab 1" },
    { tab: "this is tab 2" },
    { tab: "this is tab 3" },
  ])

  const [newTabs, setNewTabs] = useState([{ tab: "this is tab 1" }])

  const selectTab = (id) => {
    const toBeFilterd = [...tabs]
    const filterdTab = toBeFilterd.filter((tab, i) => id === i ? true : false)
    setNewTabs(filterdTab)
    console.log(filterdTab)

  }

  return (
    <div>

      {
        tabs.map((tab, i) => {
          return (
            <Tabs key={i}
              tab={tab}
              idx={i}
              selectTab={selectTab}
            />)
        })
      }

{
        newTabs.map((tab, i) => {
          return (
            <TabView key={i}
            newTabs={tab}
              idx={i}
            />)
        })
      }

      {/* <TabView
        newTabs={newTabs}
      /> */}

    </div>
  );
}



export default App;
