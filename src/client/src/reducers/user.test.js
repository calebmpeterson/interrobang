import ActionTypes from '../constants/ActionTypes';
import user from './user';

describe('user state management', () => {
  it('has default state', () => {
    expect(user(undefined, {})).toMatchObject({ missing: true, loading: true });
  });

  it('tracks when current user is loading', () => {
    expect(user(undefined, { type: ActionTypes.REQUEST_CURRENT_USER })).toMatchObject({ loading: true });
  });

  it('captures current user on successful request', () => {
    expect(user(undefined, { type: ActionTypes.REQUEST_CURRENT_USER_SUCCESS, user: { name: 'William Anders' } })).toMatchObject({ name: 'William Anders' });
  });

  it('captures user on successful registration', () => {
    expect(user(undefined, { type: ActionTypes.REGISTER_USER_SUCCESS, user: { name: 'William Anders' } })).toMatchObject({ name: 'William Anders' });
  });

  it('captures user on successful login', () => {
    expect(user(undefined, { type: ActionTypes.LOGIN_USER_SUCCESS, user: { name: 'William Anders' } })).toMatchObject({ name: 'William Anders' });
  });

  it('resets state when user logs out', () => {
    expect(user(undefined, { type: ActionTypes.LOGOUT_SUCCESS })).toMatchObject({ missing: true, loading: true });
  });

  it('maintains current state on unhandled action type', () => {
    expect(user({ current: 'state' }, { type: 'unhandled action' })).toMatchObject({ current: 'state' });
  });
});
