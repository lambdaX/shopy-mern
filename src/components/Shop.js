import React from 'react';
import { UIAction } from './UIAction';
import { history } from '../helpers';

class Shop extends React.Component {
  render() {
    let {actions, name, city, website, image } = this.props;
    let website_readable = website && website.replace(/^(.*?\:\/\/)/g,'');
    return (
      <div className="col-md-3">
          <figure className="card card-shop">
          <div className="img-wrap"> 
            <img src={ image } />
          </div>
          <figcaption className="info-wrap">
            <h5>{ name }</h5>
            <div className="float-right" >{ city }</div>
            <a href={website} target="_blank"><small>{ website_readable }</small></a>
            { actions }
          </figcaption>

        </figure>
      </div>);
  }
};


export class NewShop extends React.Component {
  render() {
    let actions = (
      <div className="action-wrap">
        <UIAction type="success" text="LIKE" symbol="👍" onClick={()=>{console.log(this)}}/>
        <UIAction type="danger" text="DISLIKE" symbol="👎" align="right" />
      </div>);

    return <Shop actions={actions} {...this.props}/>
  }
}

export class LikedShop extends React.Component {
  render() {
    let actions = (
      <div className="action-wrap">
        <UIAction type="danger" text="REMOVE" symbol="🗑️" align="right" />
      </div>);

    return <Shop actions={actions} {...this.props}/>
  }
}