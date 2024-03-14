import React, { useState, useEffect } from 'react';
// Ensure you have the CSS for styling or remove this import if it's unused.
import './ValidatorList.css';

const ValidatorList = () => {
  const [validators, setValidators] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL || '/validators';
    fetch(`${apiUrl}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setValidators(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error loading validators:', error);
        setError(error.toString());
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading validators: {error}</div>;

  return (
    <div>
      <h2>Validators</h2>
      <table>
        <thead>
          <tr>
            <th>Moniker</th>
            <th>Status</th>
            <th>Bonded Tokens</th>
            <th>Delegator Shares</th>
            <th>Website</th>
            <th>Details</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {validators.map((validator) => (
            <tr key={validator.id}>
              <td>{validator.moniker}</td>
              <td>{validator.status}</td>
              <td>{validator.tokens}</td>
              <td>{validator.delegator_shares}</td>
              <td><a href={validator.website} target="_blank" rel="noopener noreferrer">{validator.website}</a></td>
              <td>{validator.details}</td>
              {/* Render more validator details as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ValidatorList;
