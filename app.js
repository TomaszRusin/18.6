
var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    componentWillMount: function() {
        return console.log('przed załadowaniem componentu np. zczytanie jakiejś wartości z serwera')
    },

    componentDidMount: function() {
        return console.log('po załadowaniu componentu np. operacja na componencie')
    },

    componentWillReceieveProps: function() {
        return console.log('przed dodaniem nowych właściwości do componentu np. wyczyszczenie starych danych')
    },

    shouldComponentUpdate: function() {
        console.log('ta funkcja sprawdza czy jest potrzeba aktualizować component')
        return Boolean;
    },

    componentWillUpdate: function() {
        return console.log('przed aktualizacją komponentu')
    },

    componentWillUnmount: function() {
        return console.log('przed usunięciem komponentu ')
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {className: 'counter'},
                React.createElement('span', {}, 'Licznik ' + this.state.counter),
                React.createElement('button', {onClick: this.increment}, '+ 1'),
                React.createElement('button', {onClick: this.decrement}, '- 1')
        );
    }
});

var app = React.createElement('div', {}, 
            React.createElement(Counter),
            React.createElement(Counter),
            React.createElement(Counter),
            React.createElement(Counter),
            React.createElement(Counter)
    );
ReactDOM.render(app, document.getElementById('app'));