/** @jsx React.DOM */
var React = require('react');
var Catalog = require('../components/app-catalog.js');
var Cart = require('../components/app-cart.js');

var APP =
  React.createClass({
    handeClick:function(){
    	AppActions.addItem('This is the item');
    },

    render:function(){
      //return <h1 onClick={this.handeClick}>MY FLUX APP</h1>
      return (
      	<div>
      	<h1>Lets Shop</h1>
      	<Catalog />
      	<h1> Cart</h1>
      	<Cart/>
      	</div>
      	)
    }
  });
module.exports = APP;