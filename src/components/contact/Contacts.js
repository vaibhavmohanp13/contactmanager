import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2"><span className="text-danger">Contact</span> List</h1>
              {contacts.map(contact => (
                <Contact key={contact.id} contacts={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );

    // const { contacts } = this.state;
    // return (
    //   <React.Fragment>
    //     {contacts.map(contact => (
    //       <Contact
    //         key={contact.id}
    //         contacts={contact}
    //         deleteClickHandler={this.deleteContact.bind(this, contact.id)}
    //       />
    //     ))}
    //   </React.Fragment>
    // );
  }
}

export default Contacts;
