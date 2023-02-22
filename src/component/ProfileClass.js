import React from 'react'

class Profile extends React.Component {
    constructor(props){
      super(props) ;
      this.state = {
          count : 0
      }
      console.log("constructor")
    }

    componentDidMount=()=>{
        console.log("ComponentDidMount")

        
    }

    componentDidUpdate=()=>{
        console.log("componentDidUpdate")
    }
    componentWillUnmount=()=>{
        console.log("componentWillUnmount")
    }

  render(){
      return (
          <>
          <h1>Profile of About</h1>
            <h3>{this.props.name}</h3>
            <h4>Count : {this.state.count} </h4>
            <button onClick={()=>{this.setState({
                count:1
            })}}> Count </button>
          </>
      )
  }


}

export default Profile