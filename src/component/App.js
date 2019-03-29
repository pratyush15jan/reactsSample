import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TripsCount from './trips/tripCount';
import TripsList from './trips/listtrip';
import Headernav from './trips/header/header';
import UploadData from './trips/upload';
import AddTrip from './trips/addtrip';
export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         allTrips:[
         {   id:1,
             place:"Dehradun",
             date:"2017-01-01",
             type:"Trek"
         },
         {
            id:2,  
            place:"Delhi",
            date:"2017-01-15",
            type:"Club"
        },
        {
            id:3, 
            place:"Dehradun",
            date:"2017-03-22",
            type:"Tropic"
        },
        {
            id:4,
            place:"Dehradun",
            date:"2017-03-24",
            type:"Trek"
        }


         ]

        }

    }
    countDays(filter){
        const {allTrips} = this.state;
        return allTrips.filter(trip=>filter ? trip.type===filter:trip).length;
    }
    render () {
        return (
            <div className="app">                
                <Router>
                    <div className="route-container">
                    <Headernav />
                        <Switch>
                        <Route path="/addtrip" exact={true} component={AddTrip} />
                            <Route exact path="/" render={(props) => (
                                <TripsCount  
                                {...props}
                                showDefault={this.countDays()}
                                trek={this.countDays('Trek')}
                                tropic={this.countDays('Tropic')}
                                club={this.countDays('Club')}
                                />
                            )}>
                            </Route>
                            <Route exact path="/list" render={(props) => (
                                <TripsList  
                                {...props}
                                showDefault={this.state.allTrips}
                               

                                />
                            )}>
                            </Route>
                            <Route path="/upload" exact={true} component={UploadData} />
                            <Route exact path="/list/:filter" render={(props) => (
                                <TripsList  
                                {...props}
                                showDefault={this.state.allTrips}

                                />
                            )}>
                            </Route>
                            
                        </Switch>
                    </div>                    
                </Router>                
            </div>
        )
    }
}
export default App;