import React from 'react';
import { ClipLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import './loader.css'; // Buat file CSS terpisah atau gunakan inline styling di sini

const DynamicLoader = ({ loading }) => {
  return (
    <div className={`dynamic-loader-container ${loading ? 'visible' : 'hidden'}`}>
      <div className="dynamic-loader">
        <ClipLoader sizeUnit={'px'} size={50} color={'#123abc'} loading={loading} />
      </div>
    </div>
  );
};

DynamicLoader.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default DynamicLoader;
