import React from 'react';

export default (props) => {

  const privacyLevelOptions = window.spotConstants.privacyLevels.map(
    (privacyLevelString, idx) => {
      return (
        <option key={idx}>
          {privacyLevelString}
        </option>
      )
    }
  )

  const numGuestsOptions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(
    (numGuests, idx) => {
      return (
        <option key={idx}>
          {numGuests === 1 ? `for ${numGuests} guest` : `for ${numGuests} guests`}
        </option>
      )
    }
  )


  // const getAddressPredictions = () => {
  //   const displayPredictions = (predictions, status) => {
  //     console.log(predictions.map((prediction) => prediction.description));
  //   };
  //
  //   const googleAutocompleteService = new google.maps.places.AutocompleteService();
  //   googleAutocompleteService.getQueryPredictions({ input: '279 Ocea' }, displayPredictions);
  // }

  // function getAddressPredictions(string, callback){
  //   const googleAutocompleteService = new google.maps.places.AutocompleteService();
  //   googleAutocompleteService.getQueryPredictions( { 'input': string}, function(predictions, status) {
  //      return callback(predictions.map((prediction) => prediction.description));
  //   });
  // }

  // let locationPredictionDivs = '';
  // if(props.locationInput){
  //   const locationPredictionDivs =
  //     predictions.map((locationPrediction) => <div className='location-prediction-div'>{locationPrediction}</div>)
  // }

  return (
    <div id='spot-form-basics-main-container'>
      <h1>Hi, {currentUser.email}! Let's get you ready to become a host.</h1>

      <form id='spot-form-basics-form'>

        <h4>STEP 1</h4>
        <h2>What kind of place do you have?</h2>

        <select id='spot_privacy_level' onChange={props.handleFieldChange('privacyLevel')} >
          {privacyLevelOptions}
        </select>

        <select id='spot_num_guests' onChange={props.handleFieldChange('numGuests')} >
          {numGuestsOptions}
        </select>

        <input type='text' id='spot_location' onChange={props.handleFieldChange('location')}/>
        <div className='location-predictions'>
          {locationPredictionDivs}
        </div>

        <button form='spot-form' className='spot_form_basics-button'>Continue</button>
      </form>

      <div className='spot-form-info-box'>

      </div>
    </div>
  )
}
