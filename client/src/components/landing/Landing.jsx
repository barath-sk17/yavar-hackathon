import React from 'react';
import { Main } from './Styles'
import NavBar from '../layouts/NavBar';

const Landing = () => {
  return (
    <>
      <NavBar />
      <Main>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-12">
              <button className="btn">Welcome to ToDo List App</button>
            </div>
          </div>
        </div>
      </Main>
    </>
  )
}

export default Landing;
