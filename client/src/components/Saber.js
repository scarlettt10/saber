import React, { Component } from 'react';
import axios from 'axios';
import { Card, Image } from 'semantic-ui-react';

class Saber extends Component {
  state = {people: []}


  componentDidMount() {
    axios.get('https://swapi.co/api/people/')
    .then( res => {
      this.setState({ people: res.data })
    })
    .catch( err => {
    })
  }

  
  render() {
    return(
      <Card.Group>
      { this.state.people.map( people =>
        <Card key={people.id}>
          <Card.Content>
            <h1>{people.name}</h1>
          </Card.Content>
        </Card>
        ) 
      }
    </Card.Group>
    )
  }
}  


export default Saber;