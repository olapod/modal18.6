'use strict'

var CounterPlus = React.createClass({

    getDefaultProps: function() {
        console.log('Nadanie domyślnych właściwości licznika')
    },

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

    componentWillMount: function() {
        console.log('Metoda używana przed renderowaniem i nie za bardzo wiem, do czego ją użyć')
    },

    render: function() {
        return React.createElement('div', {onClick: this.increment},
            React.createElement('span', {}, 'Licznik dodawania: ' + this.state.counter)
        );
    },

    componentDidMount: function() {
        console.log('Np. pobieram dane z serwera')
    },

    componentWillReceiveProps: function() {
        console.log('Nadanie dodatkowych właściwości do komponentu')
    },

    shouldComponentUpdate: function(nextProps, nextState) {
        console.log('Sprawdzam stan i właściwości komponentu, czy trzeba przerysować komponent. Jeśli false nie renderuję');
        if (this.state.counter !== nextState.counter) {
            return true;
          }
        
    },

    componentWillUpdate: function() {
        console.log('Nie mam pomysłu do czego użyć tej metody')
    },

    componentDidUpdate: function() {
        console.log('Kolejny raz pobieram dane z serwera')
    },

    componentWillUnmount: function() {
        console.log('Czyszczę DOM')
    },
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
            React.createElement('span', {}, 'Licznik odejmowania: ' + this.state.counter)
        );
    }
});


var CounterPlus2 = React.createClass({
    getInitialState: function() {
        return {
            counter: 100
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    render: function() {
        return React.createElement('div', {onClick: this.increment},
            React.createElement('span', {}, 'Licznik dodawania do 100: ' + this.state.counter)
        );
    }
});

var CounterMinus2 = React.createClass({
    getInitialState: function() {
        return {
            counter: 50
        };
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {onClick: this.decrement},
            React.createElement('span', {}, 'Licznik odejmowania od 50: ' + this.state.counter)
        );
    }
});

var Counters = React.createClass({
    render: function() {
      return (
        React.createElement('div', {className: 'counters'},
          React.createElement(CounterPlus),
          React.createElement(CounterMinus),
          React.createElement(CounterPlus2),
          React.createElement(CounterMinus2)
        )
      );
    }
  });

  var app = React.createElement(Counters);
  ReactDOM.render(app, document.getElementById('app'));