const title = 'Welcome to my new blog';
const likes = 50;
const link = 'http://google.com'

const Home = () => {
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <h2>{title}</h2>
        <h2>Likes {likes}</h2>

        <p>10</p>
        <p>'Hello thimira'</p>
        <p>{[1,2,3,4]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>Google site</a>
        </div>
     );
}
 
export default Home;