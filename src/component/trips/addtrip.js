import React, { Component } from "react";
import ReactDOM from 'react-dom';
class AddTrip extends Component {
    constructor(props){
        super(props);
         
        this.state = {
            firstname: '',
            dob: '',
            age: '',
            totalAge:'',
          }
            this.handleKeywordsChange = this.handleKeywordsChange.bind(this);
            //this.calculateAge = this.calculateAge.bind(this);   
       }
       

       handleKeywordsChange(e) {
        console.log(1);
    
        this.setState({
          dob: e.target.value
        });
    }

      handleSubmit = (e) => {
        e.preventDefault();
       if(this.state.firstname==''){
           console.log("Error Showing");
       }
       let dob=this.state.dob;
       let today = Date.now();
       var start = new Date(today);
      var end = new Date(dob);
      var days = (start-end) / 1000 / 60 / 60 / 24;
       var totalAge= Math.round(days/365);
       this.setState({
        totalAge: totalAge
      });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
      }
    render(){
        return (
            <div className='buttons fadein'>
            <h2>HTML Forms</h2>
            <form name="addTripForm" onSubmit={this.handleSubmit}>
  First name:<br/>
  <input type="text"  name="firstname"/>
  <br/>
  Last name:<br/>
  <input type="date"  onChange={this.handleKeywordsChange.bind(this)}   name="dob" />
  <br/><br/>
    Your Age:<br/>
  <input type="text" value={this.state.totalAge} name="age" />
  <br/><br/>
  <input type="submit" value="Submit" />
</form> 
</div>
          );
}
}
    export default AddTrip;