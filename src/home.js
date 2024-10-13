import { useState } from "react";
import BlogList from "./Bloglist";

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

    /* Outputting list using useState*/
    const [blogs, setBlog] = useState([
        {id:1, title:'Java beginner', body:'website...', author:'mario'},
        {id:2, title:'Angular beginner', body:'website...', author:'yoshi'},
        {id:3, title:'Spring tutorial', body:'website...', author:'mario'}
    ])

    const handleDelete = (id) => {
       const newBlogs = blogs.filter(blog =>  blog.id !== id);
       setBlog(newBlogs);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <h2>{title}</h2>
        <h2>Likes {likes} </h2>
        <button onClick={clickToLike}>Like</button>
        <button onClick={() => clickToDislike('mario')}>Dislike</button>
        <button onClick={(e) => clickToSubscribe('mario', e)}>Subscribe</button>

        <div style={{marginTop: '80px'}}></div>
        <BlogList blogs={blogs} title={'All Blogs!'} handleDelete={handleDelete}/>
        {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario' )} title={'Mario Blogs!'}/> */}
        

        <div style={{marginTop: '80px'}}></div>
        <p>{name} is {age} years old</p>
        <button onClick={handleClick}>HandleClick</button>

        <div style={{marginTop: '80'}}></div>
        <p>10</p>
        <p>'Hello thimira'</p>
        <p>{[1,2,3,4]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>Google site</a>
        </div>
     );
}
 
export default Home;