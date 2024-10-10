import { useState } from "react";

const title = 'Welcome to my new blog';
var likes = 50;
const link = 'http://google.com'

const clickToLike = () => {
    console.log('clickToLike');
}

const clickToDislike = (name) => {
    console.log('clickToDislike', name);
}

const clickToSubscribe = (name, e) => {
    console.log('clickToSubscribe'+ name, e.target);
}

const Home = () => {
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('luigi');
        setAge(35);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <h2>{title}</h2>
        <h2>Likes {likes} </h2>
        <button onClick={clickToLike}>Like</button>
        <button onClick={() => clickToDislike('mario')}>Dislike</button>
        <button onClick={(e) => clickToSubscribe('mario', e)}>Subscribe</button>

        <div style={{marginTop: '100px'}}>
            
        </div>

        <p>{name} is {age} years old</p>
        <button onClick={handleClick}>HandleClick</button>
        <div style={{marginTop: '100px'}}>
            
        </div>
        <p>10</p>
        <p>'Hello thimira'</p>
        <p>{[1,2,3,4]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>Google site</a>
        </div>
     );
}
 
export default Home;