import React from 'react';
import Autocomplete from 'react-autocomplete';

function processRequest(value, cb) {
  setTimeout(cb, 500, value ?
    getOptions().filter(state => matchOptionToTerm(state, value)) :
    getOptions()
  )
}

let styles = {
  item: {
    padding: '10px 6px',
    cursor: 'default',
    fontSize: '19px',
  },

  highlightedItem: {
    color: 'white',
    background: '#FF5A5F',
    padding: '10px 6px',
    cursor: 'default',
    fontSize: '19px',
  },

  menu: {
    borderRadius: '3px',
    border: 'solid 1px #ccc',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '2px 0',
    fontSize: '90%',
    position: 'fixed',
    overflow: 'auto',
    maxHeight: '50%',
    zIndex: 5,
  },

  input: {
    'font-weight': 400,
    'font-family': "Helvetica Neue",
    fontSize: '14px',
    'color': '#575757',
    'letter-spacing': '1px',
  },

  wrapper: {
    display: 'block',
  },

}

function matchOptionToTerm(state, value) {
  return (
    state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
  )
}

function getOptions() {
  return [
    {id: 0, name: 'Agra, KS'},
    {id: 1, name: 'Bruneau, ID'},
    {id: 2, name: 'Karnack, TX'},
    {id: 3, name: 'Oil Trough, AR'},
    {id: 4, name: 'Tripp, SD'},
    {id: 5, name: 'Yolo, CA'}
  ]
}

class SpotSearchLocationInput extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      value: this.props.initialValue,
      options: getOptions(),
      loading: false
    }
  }

  render() {

    return (
      <Autocomplete
        inputProps={{ id: 'states-autocomplete' }}
        ref="autocomplete"
        value={this.state.value}
        items={this.state.options}
        getItemValue={(item) => item.name}
        inputProps={{placeholder: 'Anywhere'}}
        inputStyle={styles.input}
        menuStyle={styles.menu}
        wrapperStyle={styles.wrapper}
        onSelect={(value, item) => {
          // set the menu to only the selected item
          // this.setState({ value, options: [ item ] })
          this.props.handleCityChange(value, true);
          // or you could reset it to a default list again
          this.setState({value, options: getOptions() })
        }}
        onChange={(event, value) => {
          this.setState({ value, loading: true })
          this.props.handleCityChange(value, false);
          processRequest(value, (items) => {
            this.setState({ options: items, loading: false })
          })
        }}
        renderItem={(item, isHighlighted) => (
          <div
            style={isHighlighted ? styles.highlightedItem : styles.item}
            key={item.id}
            id={item.id}
          >{item.name}</div>
        )}
      />
    )
  }


}

export default SpotSearchLocationInput;
