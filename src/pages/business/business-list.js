import React, { Component } from 'react';
import axios from 'axios';
import TableRow from '../../shareds/TableRow';
import PubSub from 'pubsub-js'

export default class BusinessList extends Component {

  constructor(props) {
    super(props);
    this.state = { business: [] };
  }

  componentWillMount() {
    PubSub.subscribe('hello', (msg, res) => {
      const newListBussines = this.state.business.filter(b => {
        return b._id !== res.deleted
      });

      this.setState({ business: newListBussines });
    });
  }
  componentDidMount() {
    axios.get('http://localhost:4000/business')
      .then(response => {
        this.setState({ business: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  tabRow() {
    return this.state.business.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {

    const { business } = this.state;
    

    return (
      <div>
        <h3 align="center">Business List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Person</th>
              <th>Business</th>
              <th>GST Number</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              business.map((aux, index) => {
                return (<TableRow obj={aux} key={index} />);
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}