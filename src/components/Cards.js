import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations</h1>
            <div className='cards__container'>
            <div className='cards__wrapper'>
            <ul className='cards__items'>
                
            <CardItem
            src='images/Screenshot1.jpg'
            text='Pachetul Standard'
            label='Basic'
            path='/services'
            />

            <CardItem
            src='images/Screenshot2.jpg'
            text='Pachet Premium'
            label='Delux'
            path='/services'
            />
            


            </ul>    
            <ul className='cards__items'>
                
            <CardItem
            src='images/b4.jpg'
            text='BEFORE AND AFTER'
            label='Mystery'
            path='/services'
            />

            <CardItem
            src='images/b5.jpg'
            text='BEFORE AND AFTER'
            label='Adventure'
            path='/products'
            />
            <CardItem
            src='images/b6.jpg'
            text='BEFORE AND AFTER BEFORE AND AFTER'
            label='Adrenaline'
            path='/sign-up'
            />

            
            </ul>
            </div>
            </div>
        </div>
    );
}
export default Cards
