import Profile from './ProfileClass'

const About = () => {
    let about = `Hi, I'm Divya Mishra, I live in Raebareli, Uttar Pradesh. Work with Cognizant Solutions, 
    as web developer. Join me on my way of learning and exploring. Always ready to work with like minded people.`
    return (
      <>
      {/* <div>About</div> */}
      <Profile name = {about}/>
      </>
    );
   }
   
   export default About