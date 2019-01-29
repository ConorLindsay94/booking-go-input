import React, { Component } from 'react';
import getHandler from '../../util/get-handler';
import Location from '../Location/Location';

class InputForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.getResults = this.getResults.bind(this);
    this.determineType = this.determineType.bind(this);
    this.stageLocation = this.stageLocation.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;

    this.setState({
      searchText: value,
      isLoading: value.length >= 2,
      results: null,
      stagedLocation: null,
    }, () => {
      if (this.state.searchText.length >= 2 && !this.state.stagedLocation) {
        this.getResults();
      }
    });
  }

  getResults() {
    getHandler('FTSAutocomplete.do', {
      solrIndex: 'fts_en',
      solrRows: '6',
      solrTerm: this.state.searchText,
    }).then((results) => {
      if (this.state.searchText.length >=2) {
        // Update results accordingly
        this.setState({
          isLoading: false,
          results: [...results.results.docs],
        });
      } else {
        // Reset results back to null so box disappears
        this.setState({
          isLoading: false,
          results: null,
        });
      }
    });
  }

  determineType(type) {
    const typeMap = {
      'T': 'Station',
      'C': 'City',
      'A': 'Airport',
      'D': 'District',
      'P': 'Region'
    };

    return typeMap[type];
  }

  stageLocation(location) {
    let stagedLocation = location.name;

    if (location.city) {
      stagedLocation += `, ${location.city}, ${location.country}`;
    } else if (location.region) {
      stagedLocation += `, ${location.region}, ${location.country}`;
    } else {
      stagedLocation += `, ${location.country}`;
    }

    this.setState({
      stagedLocation,
      results: null,
    });
  }

  render() {
    const { searchText, isLoading, results, stagedLocation } = this.state;
    return (
      <section className="search-input">
        <h1>Where do you want to go?</h1>
        <div className="search-input__input">
          <label htmlFor="booking-go-input">
            Pick-up location
            <span className="hidden">example: city, airport, station, region and district</span>
          </label>
          <input
            id="booking-go-input"
            type="text"
            placeholder="city, airport, station, region and district..."
            value={stagedLocation || searchText}
            onChange={this.handleChange}
          />
          {isLoading &&
            <div className="loader"/>
          }
        </div>
        <div className="search-input__results">
          {results && results.map(result => (
            <Location
              result={result}
              determineType={this.determineType}
              stageLocation={this.stageLocation}
            />
          ))}
        </div>
      </section>
    )
  }

}

export default InputForm;