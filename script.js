'use strict'

var CounterPlus = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    render: function() {
        return React.createElement('div', {onClick: this.increment},
            React.createElement('span', {}, 'Licznik dodawania ' + this.state.counter)
        );
    }
});

var CounterMinus = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {onClick: this.decrement},
            React.createElement('span', {}, 'Licznik odejmowania ' + this.state.counter)
        );
    }
});

var Counters = React.createClass({
    render: function() {
      return (
        React.createElement('div', {className: 'counters'},
          React.createElement(CounterPlus),
          React.createElement(CounterMinus)
        )
      );
    }
  });

  var app = React.createElement(Counters);
  ReactDOM.render(app, document.getElementById('app'));