import React from 'react';
import { connect } from 'react-redux';

const Loader = (props) => {
  const { isLoading } = props;
  return (
    (isLoading) ? (
      <div className="loader-overlay">
        <i className="fas fa-spinner fa-spin" />
      </div>
    ) : (null)
  );
};
const mapStateToProps = state => ({
  isLoading: state.app.isLoading,
});

export default connect(mapStateToProps)(Loader);
