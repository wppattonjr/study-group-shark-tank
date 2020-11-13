import React, { Component } from 'react';

export default class GraveStone extends Component {
  render() {
    const { student } = this.props;
    return (
      <div className='col-3' id={student.id}>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>{student.firstName}</h5>
            <h5 className='card-text'>{student.lastName}</h5>
          </div>
        </div>
      </div>
    );
  }
}
