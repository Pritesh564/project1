import Card from './card.jsx';
import Navbar from './navbar.jsx'

const AboutPage = () => {
    return (
        <div>
            <Navbar/>
            <h2>About Us</h2>
            <p>Information about our application...</p>
            <Card
                title="Team Members"
                imageSrc="team-members.jpg"
                description="Abhinav
                Pritesh
                Abhiram"
            />
        </div>
    );
};

export default AboutPage;
