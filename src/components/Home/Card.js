import React from 'react';
import './Card.css';
import CardItem from './CardItem';
import Menu from './Menu';

function Cards() {


  return (
    <>
    <Menu/>
    <div className='cards' id='proj'>
      <h1>MENU</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/food.png'
              text='Simple Green Salad'
              des='Roasted Almonds · Creamy Avocaodo · Zippy lemon · Vinegarletta'
            />
            <CardItem 
              src='images/food1.jpg'
              text='Black Chicken Soup'
              des='Black Chicken . Honey Dates . Mushrooms . Goji'
            />
            <CardItem
              src='images/food2.jpg'
              text='Novit Delight'
              des='Crisp Tofu · Cabbage noodles '
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/food3.jpg'
              text='Traid Trick'
              des='Zucchinin · Ricotta · Ravioli · XML · Java'
            />
            <CardItem
              src='images/food4.jpg'
              text='Salmon in Oven'
              des='Smoked Salmon Pallete · Greens'
            />
            <CardItem
              src='images/food5.jpg'
              text='Siziling Chicken'
              des='Bangladeshi Chicken · Garnished'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/food6.jpg'
              text='The Caveman'
              des='Prime Chicken Patty · Cheese · Tomato · Cool Mayo'
            />
            <CardItem
              src='images/food7.jpg'
              text='The Stack'
              des='Freashy Baked Brioche Bun · Potato Patty · Cheese'
            />
            <CardItem
              src='images/food8.jpg'
              text='Sides'
              des='Freshly Baked Bun . Naan . Roti'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/food9.jpg'
              text='Pho'
              des='Rice Noodles · Beans Sprouts · Star Anise '
            />
            <CardItem
              src='images/food10.jpg'
              text='Black Chicken Soup'
              des='Black Chicken . Honey Dates . Mushrooms . Goji'
            />
            <CardItem
              src='images/food11.jpg'
              text='Indian Chicken Curry'
              des='Chicken · Fresh Cream · Curry . Roti'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/food12.jpg'
              text='Desert Sweets'
              des='Coffee · Donuts · Cake '
            />
            <CardItem
              src='images/food13.jpg'
              text='Dhaba Style Chicken Curry'
              des='Chicken · Fresh Cream · Curry . Roti'
            />
            <CardItem
              src='images/food14.jpg'
              text='Roquette'
              des='Potato Patty . Golden Fillete'
            />
          </ul>
        </div>
      </div>
    </div>

    </>
  );
}

export default Cards;