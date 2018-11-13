 import React from 'react';

class AddFishForm extends React.Component {
nameRef = React.createRef();
priceRef = React.createRef();
statusRef = React.createRef();
descRef = React.createRef();
imageRef = React.createRef();
  createFish = event =>{
    // 1.stop the event from submitting
    event.preventDefault();
    const fish = {
      name:  this.nameRef.current.value,
      price:  parseFloat(this.priceRef.current.value),
      status:  this.statusRef.current.value,
      desc:  parseFloat(this.descRef.current.value),
      image:  this.imageRef.current.value,
    };
    this.props.addFish(fish);
    //refesh form
    event.currentTarget.reset();
  };
  render() {
    return (
    <form className="fish-edit" onSubmit= {this.createFish}>
      <input name = "name"   ref={this.nameRef} type = "text" placeholder = "Name" />
      <input name = "price"   ref={this.priceRef} type = "text" placeholder ="Price"/>
      <select name = "status" ref={this.statusRef} >
        <option value="available"> Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea name = "desc" ref={this.descRef}   />
      <input name = "image"  ref={this.imageRef}type = "text" placeholder ="Image"/>
      <button type="submit">+ Add Fish</button>
    </form>
  );
  }
}
export default AddFishForm;
