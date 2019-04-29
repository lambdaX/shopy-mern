import React from 'react';


export class UINav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      logged: false,
      active:0
    }
  }
  render() {
    let { items, logged, active } = this.state;
    
    return (<header className="header shadow-sm  bg-white">
      <nav className="navbar navbar-light  navbar-expand-md">


        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">

          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/"> Nearby Shops </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={logged ? "/my": "/signin"}> My Prefered Shops </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>);
  }
}