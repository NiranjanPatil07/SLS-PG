import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router';
import { useLocalStorage } from '../hof/useLocalStorage';
import { authDetails } from '../../../contexts/reducers/versionControl';
import { useVerifyUserTokenQuery } from '../../../contexts/xhr/marketoApiService';
import LoadingSpinner from './loadingSpinner';

const TokenValidation = () => {
  const [authUser, setUser] = useLocalStorage('user');
  const authData = useSelector((state) => state?.assetVersionControl?.userDetails);
  const location = useLocation();
  const dispatch = useDispatch();

  const { data: tokenData, isFetching, isLoading } = useVerifyUserTokenQuery(`/backend/verifyUserToken?token=${authUser?.token}`);

  useEffect(() => {
    if (tokenData?.status) {
      setUser({ ...tokenData });
      dispatch(authDetails({ ...authData, data: { ...tokenData }, loading: false }));
    } else if (tokenData?.hasOwnProperty('status') && !tokenData?.status) {
      dispatch(authDetails({ ...authData, data: { ...tokenData }, loading: false }));
    } else {
      dispatch(authDetails({ ...authData, data: { ...authData?.data }, loading: true }));
    }
  }, [tokenData?.status]);

  return authData?.loading ? (
    <LoadingSpinner />
  ) : authData?.data?.status ? (
    <Outlet />
  ) : (
    <Navigate to='/sign-in' replace state={{ path: location.pathname }} />
  );
};

export default TokenValidation;
