import React from 'react'
import profile from '../asset/photo-Divya.jpg'
import linkdnlogo from '../asset/linkedin.png'
import github from '../asset/github.png'
import twitter from '../asset/twitter.png'
import instagram from '../asset/instagram.png'
import mail from '../asset/mail.png'
export default class Profile extends React.Component {
    constructor(props){
      super(props) ;
      this.state = {
          count : 0
      }
     // console.log("constructor")
    }

    openLinkdn = () => {
      window.location.href="https://www.linkedin.com/in/divya-mishra-10"
    }
    openGithub= () => {
        window.location.href="https://github.com/divya10mishra"
    }
    openInsta = () => {
        window.location.href="https://www.instagram.com/crawling.me/"
      }
      openTwitter= () => {
          window.location.href="https://twitter.com/divyamishra_10"
      }
      openMailto= () => {
        window.location.href="mailto:divyamishra075@gmail.com"
    }

    

  render(){
      return <>
        <div className='menu-label' style={{marginLeft:'3%', marginTop:'5%'}}>Contact Us</div>

        <div style={{display:"flex", marginTop:'5%'}}>
            <img src={profile} alt="profile photo" height='300' width='300' style={{borderRadius:'50%'}}/>
            <div style={{display:'flex', flexDirection:'column'}}>
                <div className='menu-label' style={{fontWeight:'500', color:'grey', marginLeft:'2%'}}>
                    {this.props.name}
                </div>
                <div style={{display:'flex',  marginLeft:'2%', marginTop:'2%'}}>            
                    <img src={linkdnlogo} alt="profile photo" height='40' width='40' onClick={this.openLinkdn.bind(this)}/>
                    <img src={github} alt="profile photo" height='50' width='50' onClick={this.openGithub.bind(this)}/>
                    <img src={instagram} alt="profile photo" height='40' width='40' onClick={this.openInsta.bind(this)}/>
                    <img src={twitter} alt="profile photo" height='50' width='50' onClick={this.openTwitter.bind(this)}/>
                    <img src={mail} alt="profile photo" height='50' width='50' onClick={this.openMailto.bind(this)}/>
                </div>
                </div>
            </div>
        
       
        </>
      
  }


}

