import ActionTypes from '../constants/ActionTypes';
import { updateRecoveryUsername } from '../actions';
import recovery from './recovery';

describe('account recovery state management', () => {
  it('has default state', () => {
    expect(recovery(undefined, {})).toMatchObject({ username: '', canProceed: false, error: undefined });
  });

  it('cannot proceed until given a username', () => {
    expect(recovery(undefined, { type: ActionTypes.UPDATE_RECOVERY_USERNAME, username: '' })).toMatchObject({ canProceed: false });

    expect(recovery(undefined, { type: ActionTypes.UPDATE_RECOVERY_USERNAME, username: 'caleb@cubicle6.com' })).toMatchObject({ canProceed: true, username: 
'caleb@cubicle6.com' });
  });

  it('clears any error when a recovery request suceeds', () => {
    expect(recovery({ error: 'boom' }, { type: ActionTypes.REQUEST_ACCOUNT_RECOVERY_SUCCESS })).toMatchObject({ error: null });
  });

  it('captures error message on recovery request failure', () => {
    expect(recovery(undefined, { type: ActionTypes.REQUEST_ACCOUNT_RECOVERY_FAILURE, error: { message: 'boom' } })).toMatchObject({ error: 'boom' });
  });
});
