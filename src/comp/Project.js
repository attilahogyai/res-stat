import React from 'react';
class Porject extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <input
        name="numberOfGuests"
        type="number"
        value={this.state.numberOfGuests}
        onChange={this.handleInputChange} />
      <div>{this.props.note.id} - Note: {this.props.note.text}</div>
    );
  }
}

export default Note;