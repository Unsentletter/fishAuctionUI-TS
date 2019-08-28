import React, { Component } from 'react';
import { Button } from '../../Components/Button';
import axios from 'axios';

export class AddFish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemTitle: '',
      price: '',
      location: '',
      description: '',
      photos: '',
      species: '',
    };
  }

  handleClick = event => {
    const {
      itemTitle,
      price,
      location,
      description,
      photos,
      species,
    } = this.state;
    event.preventDefault();
    axios
      .post(
        'http://localhost:5000/post-item',
        {
          itemName: itemTitle,
          price,
          location,
          description,
          species,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token'),
          },
        },
      )
      .catch(err => {
        console.log('ERR', err);
      });
  };

  handleChange = event => {
    const { value } = event.target;
    switch (event.target.name) {
      case 'itemTitle':
        this.setState({ itemTitle: value });
        break;
      case 'price':
        this.setState({ price: value });
        break;
      case 'location':
        this.setState({ location: value });
        break;
      case 'description':
        this.setState({ description: value });
        break;
      case 'species':
        this.setState({ species: value });
      case 'photos':
        this.setState({ photos: value });
        break;
      default:
        throw new Error('Incorrect data passed');
    }
  };

  render() {
    return (
      <div>
        <form>
          Title:
          <input
            name='itemTitle'
            type='text'
            value={this.state.itemTitle}
            onChange={this.handleChange}
          />
          Price:
          <input
            name='price'
            type='text'
            value={this.state.price}
            onChange={this.handleChange}
          />
          Species:
          <input
            name='species'
            type='text'
            value={this.state.species}
            onChange={this.handleChange}
          />
          Location:
          <input
            name='location'
            type='text'
            value={this.state.location}
            onChange={this.handleChange}
          />
          <div className='input-field'>
            Description:
            <textarea
              name='description'
              type='text'
              value={this.state.description}
              onChange={this.handleChange}
              className='materialize-textarea'
            />
          </div>
          <Button label='Submit' handleClick={this.handleClick}>
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

//
// * item_name
// * price
//
// * location
// * description
// * posting_time
// * photos
// * Species
