import React from 'react';
import { history } from '../helpers';
import { LikedShop, NewShop, UINav } from '../components';
import { connect } from 'react-redux';

 class Signin extends React.Component {
  componentDidMount() {

    const { value: formValues } = this.props.dispatch({
      "type": 'ALERT',
      "payload": {
        title: 'Multiple inputs',
        html:
          '<input id="swal-input1" class="swal2-input">' +
          '<input id="swal-input2" class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
          
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value
          ]
        }
      }
    })

  }
render() { return <></> }
}

const connectedSignin = connect(()=>{return {}})(Signin);
export { connectedSignin as Signin };