import React,{Component} from 'react';
import '../css/main.css';
import Search from '../images/magnifying-glass.png';
import Dave from '../images/profile1.jpeg';
import ChatHeads from './ChatHeads';

function Main() {
    const ChatHeadsDisplay = () => {
        return(
            names.map((e, index)=>{
                return <ChatHeads name={e} image={images[index]}/>
            })
        );
    }

    const names = ['Dave Limutin', 'Addie Caberte', 'Sheryl Iglesias', 'Rowen Senpaii'];
    const images = [Dave, Dave, Dave, Dave];
    return (
        <div className='main-parent'>
            <section id="section-1">
                <div className='main-chat'>Chats</div>
                <div className='main-search'>
                    <img src={Search} alt='search bar'/>
                    <span>search</span>
                </div>
                <div className='main-chatheads'>
                    <ChatHeadsDisplay/>
                </div>
            </section>
            <section id="section-2">right</section>
        </div>
    );
}

export default Main;