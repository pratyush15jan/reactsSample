import _ from 'lodash';
import React, {Component} from 'react';
export const Trip = ({ date,place,type}) => (
<div className="trips-count">
<tr>
    <td>{place}</td>
    <td>{type}</td>
    <td>{date}</td>
    </tr>
</div>
)

export default Trip;