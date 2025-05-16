import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';

function CountryList() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://restcountries.com/v2/all')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch countries');
        return response.json();
      })
      .then((data) => {
        console.log('Fetched countries:', data);
        if (Array.isArray(data)) {
          setCountries(data);
        } else {
          console.error('Data is not an array:', data);
          setCountries([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching countries:', error);
        setError('Failed to load countries');
        setLoading(false);
      });
  }, []);

  const handleSearch = (data) => {
    console.log('Search data:', data);
    setCountries(Array.isArray(data) ? data : []);
  };

  const handleFilter = (data) => {
    console.log('Filter data:', data);
    setCountries(Array.isArray(data) ? data : []);
  };

  if (loading) return <div className="container mx-auto p-4">Loading...</div>;
  if (error) return <div className="container mx-auto p-4 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      <Filter onFilter={handleFilter} />
      <div className="row">
        {countries.length === 0 ? (
          <p>No countries found</p>
        ) : (
          countries.map((country) => (
            <div key={country.cca3} className="col-md-4 mb-3">
              <div className="card">
                <img src={country.flags.png} alt={`${country.name.common} flag`} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{country.name.common}</h5>
                  <p>Capital: {country.capital?.[0] || 'N/A'}</p>
                  <p>Population: {country.population.toLocaleString()}</p>
                  <p>Region: {country.region}</p>
                  <Link to={`/country/${country.cca3}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CountryList;