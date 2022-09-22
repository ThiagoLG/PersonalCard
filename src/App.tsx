import { useEffect, useState } from 'react'
import './App.scss'
import Card from './components/Card/Card';
import { UserInfoItem } from './models/user-info-item';

const App = () => {


  /*--- General properties ---*/
  const urlPersonInfos = './data/UserProfileMockup.json';
  /*--------------------------*/




  /*--- States ---*/
  const [userInfos, setUserInfo] = useState<UserInfoItem>();
  /*--------------*/




  /*--- Function ---*/
  const getUserInfos = async () => {
    let userInfosJson = await fetch(urlPersonInfos);
    setUserInfo(await userInfosJson.json());
    console.log(userInfos);
  }
  /*----------------*/




  /*--- Init Actions ---*/
  useEffect(() => {
    console.log(userInfos);
    if(!userInfos) getUserInfos();
  }, [])
  
  /*--------------------*/



  /*--- Render ---*/
  return (
    <div className="PrincipalContainer">

      <main className='CardsContainer'>

        <Card {...userInfos as UserInfoItem} />

      </main>

    </div>
  )
}

export default App
