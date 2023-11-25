import React from 'react';
import { connect } from 'react-redux';
import { loginSuccess, loginFailure } from '../../actions/authActions2';
import Header from '../Header/Header';
import Datos from './Datos';
import Transctions from './Transctions';
import './style.css';

const Dashboard = ({ isAuthenticated, loginSuccess, loginFailure }) => {
 
    return (
      <div>
      <Header />
      <h2>DASHBOARD</h2>
      <main>
        <Datos />
        <Transctions />
      </main>
    </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.isAuthenticated,
});
  
export default connect(mapStateToProps, { loginSuccess, loginFailure })(Dashboard);