

import Card from './card.jsx';
import Navbar from './navbar.jsx'


const HomePage = () => {
    return (
        <div>
            
            <Navbar/>
            <h2>Welcome to Our Website!</h2>
            <Card
                title="Featured Item"
                imageSrc="featured-item.jpg"
                description="This is our featured item. Check it out!"
            />
            <Card
                title="Featured Item"
                imageSrc="featured-item.jpg"
                description="This is our featured item. Check it out!"
            />
        </div>
    );
};

export default HomePage;
