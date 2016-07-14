const React = require('react');
const Navbar = require('./Navbar');
const Button = require('./Button');
const Circle = require('./Circle');
const Album = require('./Album');
const List = require('./List');

const Demo = React.createClass({
  displayName: 'Demo',

  getInitialState: function () {
    return {
      page: 'Demo 1',
    };
  },

  _getPage: function () {
    let page;

    switch (this.state.page) {
      case 'Demo 1':
        page = (<Circle />);
        break;
      case 'Demo 2':
        page = (<Album images={['img/1.jpg', 'img/2.jpg']} />);
        break;
      case 'Demo 3':
        page = (<List />);
        break;
      case 'Github':
        break;
    }

    return page;
  },

  _handleButtonClick: function (page) {
    this.setState({
      page: page,
    });
  },

  render: function () {
    const styles = {
      container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F5F5F5',
        boxSizing: 'padding-box',
        height: '100%',
        width: '100%',
      },
    };

    const navbarActions = [];
    navbarActions.push(
      <Button
        key="Github"
        label="Github"
        onClick={this._handleButtonClick.bind(this, 'Github')}
      />
    );
    navbarActions.push(
      <Button
        key="Demo 1"
        label="Demo 1"
        onClick={this._handleButtonClick.bind(this, 'Demo 1')}
      />
    );
    navbarActions.push(
      <Button
        key="Demo 2"
        label="Demo 2"
        onClick={this._handleButtonClick.bind(this, 'Demo 2')}
      />
    );
    navbarActions.push(
      <Button
        key="Demo 3"
        label="Demo 3"
        onClick={this._handleButtonClick.bind(this, 'Demo 3')}
      />
    );

    const page = this._getPage();

    return (
      <div style={styles.container}>
        <Navbar actions={navbarActions} />
        {page}
      </div>
    );
  },
});

module.exports = Demo;