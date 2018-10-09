import ActionCreators from '../actions/creators';
import configuration from './configuration';

describe('configuration state management', () => {
  it('has default state', () => {
    expect(configuration(undefined, {}))
      .toMatchObject({
        loading: false,
        loaded: false,
        persisting: false,
        persisted: false,
        error: undefined,
        config: undefined
      });
  });

  it('handles default configuration when onboarding', () => {

  });

  it('handles configuration loading', () => {

  });

  it('handles updating the default search pattern', () => {
    expect(configuration({ config: { 'search-engine': 'foo' } }, ActionCreators.updateSearchEngine('bar')))
      .toMatchObject({ config: { 'search-engine': 'bar' } });
  });

  it('handles adding a new bang', () => {

  });

  it('handles updating an existing bang', () => {

  });

  it('handles updating an existing bang pattern', () => {

  });

  it('handles deleting a bang', () => {

  });
});
