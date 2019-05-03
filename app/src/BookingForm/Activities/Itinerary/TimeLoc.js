import React, { useContext } from 'react';
import { BookingContext } from '../../context';
import { Grid3 } from '../../Styled';

export default () => {
  const { data, actions } = useContext(BookingContext);

  return (
    <React.Fragment>
      <Grid3>
        <div>
          <label htmlFor="pickUp">Pick up location  </label>
          <input id="pickUp" type="text" name="pickUp" />
        </div>
        <div>
          <label htmlFor="dropOff">Drop off location </label>
          <input id="dropOff" type="text" name="dropOff" />
        </div>
      </Grid3>
      <Grid3>
        <div>
          <label htmlFor="">Start time: </label>
          <input id="from" type="text" list="time" placeholder="Start time" />
        </div>
        <div>
          <label htmlFor="">End time: </label>
          <input id="to" type="text" list="time" name="to" placeholder="End time" />
        </div>
      </Grid3>
    </React.Fragment>
  )
}