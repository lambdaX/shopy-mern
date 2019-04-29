import React from 'react';

export class UIAction extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    e.preventDefault();
    let { onClick } = this.props;
    onClick = onClick || (()=>{});
    onClick(e);
  }

  render() {
    let { type, align, symbol, text } = this.props;
    
    let style = "btn btn-primary btn-sm btn-" + type;
    style += " " + (align === "right" ? "float-right" : "");

    return <a href="javascript:void(0);" className={style} onClick={this.handleClick}>{symbol}<div className="d-none d-md-inline-block">{text}</div></a>
  }
}