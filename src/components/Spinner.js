import React, { Component } from 'react'
import loading from "./Snake.gif"
// here, we have downloaded a spinner gif from the net to use it while page is loading.

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center"> 
      {/* the class text-center belongs to bootstrap and it centers the element in a line. */}
        <img className="my-4" src={loading}alt="loading" />
      </div>
    )
  }
}

export default loading
