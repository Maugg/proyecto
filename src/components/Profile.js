import React from 'react';
import GridPlanetas from './GridPlanetas';
import ButtonPrimary from './elements/ButtonPrimary';
import LoginForm from './LoginForm';


export default class Profile extends React.Component{


  render(){
    const isLoggedIn = this.props.isLoggedIn;
    if (isLoggedIn) {
      return (
         <div>
           <h2>{this.props.userName}</h2>
           <GridPlanetas/>
           <ButtonPrimary/>
        </div>
      );
    }
    return <LoginForm/>;
  }

}
