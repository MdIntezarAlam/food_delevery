import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import './App.css';
import Main from './components/Main/Main';
import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import Banner from './components/Banner/Banner';
import f2 from './assets/f2.jpg'
import Submenu from './components/Submeu/Submenu';
import MenuCart from './components/MenuCrt/MenuCart';
import { MenuItems, Items } from './components/Data';
import Itemcard from './components/Itemcard';
import Debitcard from './components/DebitCard/Debitcard';
import CartItem from './components/CartItem/CartItem';
import { useStateValue } from './components/StateProvider';


const App = () => {
  // main dsih state
  const [ismainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "buger01")
  );

  const [{ cart }, dispatch] = useStateValue()

  useEffect(() => {
    const menuLi = document.querySelectorAll('#menu li')

    function setMenuActive() {
      menuLi.forEach(n => n.classList.remove("active"))
      this.classList.add("active");
    }
    menuLi.forEach(n => n.addEventListener('click', setMenuActive))



    // menucart active toggle
    const menuCards = document.querySelector(".row_container")
      .querySelectorAll(".rowmanucart");
    function setMenucartActive() {
      menuCards.forEach(n => n.classList.remove("active"))
      this.classList.add("active");
    }
    menuCards.forEach((n) => n.addEventListener("click", setMenucartActive))
  }, [ismainData])


  // set main dish item on filter data
  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId))
  }

  return (

    <div className="app">
      {/*  Header components */}
      <Header />
      {/* Main compnents */}
      <main>
        <div className="main_container">
          <div className="banner">
            <Banner name={"Intezar"} discount={"20"} link={"#"} />
            <img src={f2} className="dlevery_img" />
          </div>
          {/* dis container components */}
          <div className="dis_container">
            <div className="menu_cart">
              <Submenu name={"Menu Category"} />
            </div>
            {/* this is menuCart */}
            <div className="row_container">
              {MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                    <MenuCart
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id == 1 ? true : false}
                    />
                  </div>
                ))}
            </div>

            <div className="disitem_container">
              {
                ismainData && ismainData.map((data) => (
                  <Itemcard
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="rightmenu">
          <div className="debitCardcontainer">
            <div className="debitcart">
              <Debitcard />
            </div>
          </div>
          {!cart ? (<div></div>) : (
            <div className="cartcheckoutcontainer">
              <Submenu name={"carts Items"} />
              <div className="cartcontainer">
                <div className="cartitems">
                  {cart && cart.map(data => (
                    <CartItem
                      key={data.id}
                      itemId={data.id}
                      name={data.name}
                      imgSrc={data.imgSrc}
                      price={data.price}
                    />
                  ))}
                </div>
              </div>
              <div className="totlesection">
                <h3>Total</h3>
                <p><span>$</span> 34.3 </p>
              </div>
              <button className='checkout'>Check Out</button>
            </div>
          )}
        </div>
      </main>
      {/* bottom menu */}
      <div className="bottom_menu">
        <ul id='menu'>
          <Main link={'#'} icon={<HomeRounded />} isHome />
          <Main link={'#'} icon={<Chat />} />
          <Main link={'#'} icon={<AccountBalanceWalletRounded />} />
          <Main link={'#'} icon={<Favorite />} />
          <Main link={'#'} icon={<SummarizeRounded />} />
          <Main link={'#'} icon={<Settings />} />
          <div className="indicator"></div>
        </ul>
      </div>
    </div>

  )
}

export default App