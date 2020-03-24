var contacts = [
  {
    id: 1,
    firstName: "Jan",
    lastName: "Nowak",
    email: 'jan.nowak@example.com',
  },
  {
    id: 2,
    firstName: 'Adam',
    lastName: 'Kowalski',
    email:'adam.kowalski@example.com',
  },
  {
    id: 3,
    firstName: 'Janina',
    lastName: 'Król',
    email:'janina.krol@example.com',
  },
  {
    id: 4,
    firstName: 'Maria',
    lastName: 'Kotwica',
    email:'maria.kotwica@example.com',
  },
]

var contactForm = {
  firstName: '',
  lastName: '',
  email:''
};

var App = React.createClass({
  render: function() {
    return (
      <div className={'app'}>
				<h1>Application for adding contacts</h1>
				<ContactForm contact={contactForm}/>
				<Contacts items={contacts}/>				
			</div>
    );
  }
})