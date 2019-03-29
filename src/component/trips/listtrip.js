import React from 'react'; 
import { Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Trip } from './trip';
export const TripsList =({match,showDefault})=>  { 
const filter= match.params.filter;

const trips = filter ? showDefault.filter( trip => trip.type === filter) : showDefault;
    return (
        
        <div className="trips-list">
        <h3>{filter? filter:'All'}</h3>
        <table class="table">
        <thead>
            <tr>
               <th>Place</th>
                <th>Type</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
                    {
                        trips.map((trip, i) => 
                            <Trip
                                key={i}
                                {...trip}
                            />
                        )
                    }
                </tbody>
            </table>
            <div className="filters">
                Filter by:
                <Link to="/list">
                    All
				</Link>
                &#9679;
                <Link to="/list/Trek">
                    Treks
				</Link>
                &#9679;
                <Link to="/list/Club">
                    Clubs
				</Link>
                &#9679;
                <Link to="/list/Tropic">
                    Tropics
				</Link>
            </div>            
        </div>
)
}

export default TripsList;