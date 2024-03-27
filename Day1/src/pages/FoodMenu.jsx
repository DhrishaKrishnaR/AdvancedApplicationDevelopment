import React from 'react';
import '../assets/css/FoodMenu.css'; // Assuming you have a CSS file named FoodMenu.css
import ElevateAppBar from './NavBar';
import { Link } from 'react-router-dom';

function FoodMenu() {
  return (
    <div id="content">
        <ElevateAppBar/>
        <hr/>
        <h1>For Childern:</h1><hr/>
      <div className="container3">
        <div className="flipper">
          <div className="front">
            <img src="https://static.toiimg.com/thumb/63316820.cms?width=1200&height=900" alt="img" />
            <p className="caption">Vegetarian</p>
          </div>
          <div className="back">
            <a href="#">
              <h1>Vegetarian</h1>
            </a>
            <p className="description"><b>Appetizers:</b>Veggie samosas with ketchup,
    Paneer tikka skewers<br/>
    <b>Main Course:</b>Veggie noodles, Paneer butter masala with naan bread <br/>
    <b>Snacks:</b>Pani puri, Potato chips or french fries<br/>
    <b>Desserts:</b>Chocolate barfi,Fruit popsicles<br/>
    <b>Beverages:</b>Fresh fruit juice

    <br/>    <Link to="/book">
            <button type="submitf">Book Now</button>
        </Link>  </p></div>
        </div>
      </div>

      <div className="container3">
        <div className="flipper">
          <div className="front">
            <img src="https://www.indianfoodsite.com/resources/indian-food/indian-non-vegetarian-food5-35.jpeg" alt="img" />
            <p className="caption">Non-Vegetarian</p>
          </div>
          <div className="back">
            <a href="#">
              <h1>Non - Vegetarian</h1>
            </a>
            <p className="description"><b>Appetizers:</b>Chicken nuggets with ketchup,
            Chicken momos with spicy sauce<br/>
    <b>Main Course:</b>Chicken noodles, Chicken curry with naan bread or rice<br/>
    <b>Snacks:</b>Chicken popcorn, Chicken spring rolls<br/>
    <b>Desserts:</b>Rasgulla,Kaju katli,Fruit popsicles<br/>
    <b>Beverages:</b>Fresh fruit juice         
    <br/>    <Link to="/book">
            <button type="submitf">Book Now</button>
        </Link>   </p> </div>
      </div>
      </div>
      <br/><hr/>
      <h1>For Adults:</h1><hr/>
      <div className="container3">
        <div className="flipper">
          <div className="front">
            <img src="https://static.toiimg.com/thumb/63316820.cms?width=1200&height=900" alt="img" />
            <p className="caption">Vegetarian</p>
          </div>
          <div className="back">
            <a href="#">
              <h1>Vegetarian</h1>
            </a>
            <p className="description"><b>Appetizers:</b>Vegetable Soup,
            Cheese garlic bread<br/>
    <b>Main Course:</b>Mixed vegetable curry with puri,Tandoori roti with paneer tikka masala<br/>
    <b>Snacks:</b>Veggie sticks,Potato wedges with sour cream dip<br/>
    <b>Desserts:</b>Fruit custard,Rice kheer with almonds and raisins<br/>
    <b>Beverages:</b>Fruit punch with soda,Alcohol(As per requested)      
    <br/>    <Link to="/book">
            <button type="submitf">Book Now</button>
        </Link>  </p> </div>
        </div>
      </div>

      <div className="container3">
        <div className="flipper">
          <div className="front">
            <img src="https://www.indianfoodsite.com/resources/indian-food/indian-non-vegetarian-food5-35.jpeg" alt="img" />
            <p className="caption">Non - Vegetarian</p>
          </div>
          <div className="back">
            <a href="#">
              <h1>Non - Vegetarian</h1>
            </a>
            <p className="description"><b>Appetizers:</b>Chicken tikka skewers, prawn cutlets
            Cheese garlic bread<br/>
    <b>Main Course:</b>Butter chicken or chicken curry with naan bread or rice,Mutton biryani with raita<br/>
    <b>Snacks:</b>Chicken spring rolls, Chicken seekh kebabs<br/>
    <b>Desserts:</b>Fruit custard,Rice kheer with almonds and raisins<br/>
    <b>Beverages:</b>Fruit punch with soda,Alcohol(As per requested)      
          <br/>    <Link to="/book">
            <button type="submitf">Book Now</button>
        </Link>  
       </p> </div>
        </div>
      </div>
    </div>
  );
}

export default FoodMenu;
