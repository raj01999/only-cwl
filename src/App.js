import React, { useState, Fragment, useEffect } from 'react'
import './App.css';
import PlayerByTag from "./components/PlayerByTag"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { playerByTag, clanByTag, clanWarlogByTag, clanCurrentWarByTag, clanLeagueWars } from "./components/static/data"

import Heroes from './components/Heroes'
import Labels from './components/Labels'
import Spells from "./components/Spells"
import Achievements from "./components/Achievements"
import Troops from "./components/Troops"
import PlayerHouse from './components/PlayerHouse'
import ClanByTag from './components/ClanByTag';

import Districts from './components/Districts';
import MemberList from './components/MemberList';
import ClanWarlogByTag from './components/ClanWarlogByTag';
import ClanCurrentWarByTag from './components/ClanCurrentWarByTag';
import ClanLeagueWars from './components/ClanLeagueWars';
import Error from "./components/Error"

const App = () => {
  const [playerBT, setPlayerBT] = useState({});
  const [clanBT, setClanBT] = useState({});
  const [warlogBT, setWarlogBT] = useState([]);
  const [currentWarBT, setCurrentWarBT] = useState({});
  const [leagueWarsBT, setLeagueWarBT] = useState({});

  useEffect(() => {
    fetch(process.env.REACT_APP_API + "clanByTag?tag=" + "2L9QV2JP0").then(jsonData => {
      return jsonData.json();
    }).then(apiData => {
      setClanBT(apiData.data);
    }).catch(error => {
      console.log(error);
    });
  }, [])

  useEffect(() => {
    fetch(process.env.REACT_APP_API + "clanWarlogByTag?tag=" + "2L9QV2JP0").then(jsonData => {
      return jsonData.json();
    }).then(apiData => {
      setWarlogBT(apiData.data?.items);
    }).catch(error => {
      console.log(error);
    });
  }, [])

  useEffect(() => {
    fetch(process.env.REACT_APP_API + "clanCurrentWarByTag?tag=" + "2L9QV2JP0").then(jsonData => {
      return jsonData.json();
    }).then(apiData => {
      setCurrentWarBT(apiData.data);
    }).catch(error => {
      console.log(error);
    });
  }, [])

  useEffect(() => {
    fetch(process.env.REACT_APP_API + "clanLeagueWars?tag=" + "2L9QV2JP0").then(jsonData => {
      return jsonData.json();
    }).then(apiData => {
      setLeagueWarBT(apiData.data);
    }).catch(error => {
      console.log(error);
    });
  }, [])


  return (
    <BrowserRouter>
      <div className='playerByTag'>
        <div className='playerByTag-first' >
          <Routes>
            <Route path='/member' element={<PlayerByTag data={playerBT} setPlayerBT={setPlayerBT} />} />
            <Route path='/clanCurrentWarByTag' element={<ClanCurrentWarByTag data={currentWarBT} />} />
            <Route path='/clanLeagueWars' element={<ClanLeagueWars data={leagueWarsBT} />} />
            <Route path='/' element={<ClanByTag data={clanBT} />} />

            <Route path='/clanWarlogByTag' element={<ClanWarlogByTag newData={warlogBT} />} />

            {Object.keys(playerBT).map((ele1, idx) => {
              if (ele1 === 'troops') {
                const newData = playerBT[ele1]
                return <Route path='/troops' key={idx} element={<Troops newData={newData} />} />;
              } else if (ele1 === 'achievements') {
                const newData = playerBT[ele1]
                return <Route path='/achievements' key={idx} element={<Achievements newData={newData} />} />;
              } else if (ele1 === 'spells') {
                const newData = playerBT[ele1]
                return <Route path='/spells' key={idx} element={<Spells newData={newData} />} />;
              } else if (ele1 === 'labels') {
                const newData = playerBT[ele1]
                return <Route path='/labels' key={idx} element={<Labels newData={newData} />} />;
              } else if (ele1 === 'heroes') {
                const newData = playerBT[ele1]
                return <Route path='/heroes' key={idx} element={<Heroes newData={newData} />} />;
              } else if (ele1 === 'playerHouse') {
                const newData = playerBT[ele1].elements
                return <Route path='/playerHouse' key={idx} element={<PlayerHouse newData={newData} />} />;
              } else {
                return <Fragment key={idx} />
              }
            })}

            {Object.keys(clanBT).map((ele1, idx) => {
              if (ele1 === 'clanCapital') {
                const newData = clanBT[ele1]
                return <Route path='/districts' key={idx} element={<Districts newData={newData?.districts} />} />;
              } else if (ele1 === 'memberList') {
                const newData = clanBT[ele1]
                return <Route path='/memberList' key={idx} element={<MemberList newData={newData} />} />;
              } else if (ele1 === 'labels') {
                const newData = clanBT[ele1]
                return <Route path='/clanLabels' key={idx} element={<Labels newData={newData} />} />;
              } else {
                return <Fragment key={idx} />
              }
            })}

            <Route path='*' element={<Error />} />
          </Routes>
        </div>
      </div>

    </BrowserRouter>
  )
}

export default App