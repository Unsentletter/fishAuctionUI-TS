import React, { Component } from 'react';

import './index.scss';

const speciesList = [
  'Anabantoids',
  'Arowana',
  'Australian Natives',
  'Catfish',
  'Characins',
  'Cichlids',
  'Cyprinids',
  'Flowerhorn',
  'Goldfish',
  'Invertebrates',
  'Killifish',
  'Koi',
  'Livebearers',
  'Loaches',
  'Rainbows',
  'Snails',
  'Stringrays',
  'Others',
];

export class SideMenu extends Component {
  render() {
    return (
      <div className='side-menu'>
        <div>
          {speciesList.map((species, index) => {
            return <div key={index}>{species}</div>;
          })}
        </div>
      </div>
    );
  }
}
