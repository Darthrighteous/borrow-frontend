import axios from 'axios';

import { requestOptions } from '../lib/axios';
import Toaster from '../lib/toaster';
import { setLoading } from './appActions'
import { FETCH_USER_DETAILS } from './actionTypes';

const fetchUserComplete = (profile, offers) => ({
  type: FETCH_USER_DETAILS,
  payload: { profileInfo: profile, loanOffers: offers }
})

export const fetchUserInfo = (id) => async dispatch => {
  dispatch(setLoading(true));
  const path = `${process.env.REACT_APP_API_BASE_URL}/my-profile`;
  try {
    let response = await axios(requestOptions('get', path, null, `Token token=${id}`));
    const { data } = response;
    Toaster.success(data.message, data.status);
    dispatch(fetchUserComplete(data.profile_info, data.loan_offers));
  }
  catch (error) {
    Toaster.error(error.message, 'Failure');
   }
  dispatch(setLoading(false));
}
