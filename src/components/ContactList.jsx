import React from "react";
import Table from "react-bootstrap/Table";

class ContactList extends React.Component {
  render() {
    const { contacts } = this.props;
    console.log(contacts);
    return (
      <>
        {contacts.length > 0 ? (
          <div>
            <h1 className="text-center">CONTACT LIST</h1>
            <Table striped bordered hover size="sm" className="form-class">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map(({ name, email, phone }, index) => {
                  return (
                    <tr key={index}>
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>{phone}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default ContactList;
