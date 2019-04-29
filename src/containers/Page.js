import React from 'react';
import { LikedShop, NewShop, UINav } from '../components';
import { connect } from 'react-redux';

class Page extends React.Component {
  componentDidMount() {
    
    this.props.dispatch( 
       {'type':"ALERT",'payload':{"type":"info","title":"Smart Shop removed."}}
    );
  }
  render () {
    let {name, nav, shops, user} = this.props;
    console.log(user,2);
    shops = (
        <div className="row">
          <LikedShop name="Sweet Shop" image="https://via.placeholder.com/150.png"/>
          <NewShop  name="Band Shop" image="https://via.placeholder.com/150.png/faa/000"/>
          <NewShop  name="Band Shop" website="https://Bandshop.com"/>
          <NewShop  name="Band Shop"/>
          <LikedShop name="Sweet Shop" image="https://via.placeholder.com/150.png"/>
          <NewShop  name="Band Shop" image="https://via.placeholder.com/150.png/faa/000"/>
          <NewShop   name="Band Shop"/>
          <NewShop  name="Band Shop"/>
        </div>);
    return (
      <main>
        <UINav />
        <h1>{ user }</h1>
        <div className="row">
          { shops }
        </div>
      </main>
    );
  }
}
function mapStateToProps(state) {
    const { user } = state;
    console.log(user,1);
    return {
        user
    };
}

const connectedPage = connect(mapStateToProps)(Page);
export { connectedPage as Page };