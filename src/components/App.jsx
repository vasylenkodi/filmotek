import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import PublicRoute from 'redux/Routes/PublicRoute';
import PrivateRoute from 'redux/Routes/PrivateRoute';
import Header from './Header/Header';
import Main from './Main/Main';
import Library from './Library/Library';
import Authorization from './Authorization/Authorization';

export const App = () => {
  const initialModalState = {
    signUpOpen: false,
    logInOpen: false,
  };

  const [modalState, setModalState] = useState(initialModalState);

  const onLogInModalOpen = () => {
    setModalState({
      ...modalState,
      logInOpen: true,
    });
  };

  const onLogInModalClose = () => {
    setModalState({
      ...modalState,
      logInOpen: false,
    });
  };

  const signUpModalOpen = () => {
    setModalState({
      ...modalState,
      signUpOpen: true,
    });
  };

  const signUpModalClose = () => {
    setModalState({
      ...modalState,
      signUpOpen: false,
    });
  };

  const modalHandleFunctions = {
    onLogInModalOpen,
    onLogInModalClose,
    signUpModalOpen,
    signUpModalClose,
  };

  return (
    <>
      <Header modalHandleFunctions={modalHandleFunctions} />
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute exact>
              <Main
                modalState={modalState}
                modalHandleFunctions={modalHandleFunctions}
              />
            </PublicRoute>
          }
        />
        <Route
          path="/library"
          element={
            <PrivateRoute exact redirectTo="/authorization">
              <Library />
            </PrivateRoute>
          }
        />
        <Route
          path="/authorization"
          element={
            <PublicRoute exact restricted>
              <Authorization />
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
};
