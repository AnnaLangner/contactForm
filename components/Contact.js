var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return(
      React.createElement('div', {className: 'contactItem'},
        React.createElement('img', {
          className: 'contactImage',
          src: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
        }),
        React.createElement('p', {className: 'contactLabel'}, 'Name: ' + this.props.item.firstName),
        React.createElement('p', {className: 'contactLabel'}, 'Surname: ' + this.props.item.lastName),
        React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email}, 'Email: ' + this.props.item.email)
      )
    )
  }
})