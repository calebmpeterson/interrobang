import { serializeBangs, deserializeBangs, sortRecords } from './ConfigUtils';

describe('bang record serialization', () => {
  it('properly serializes a single record', () => {
    expect(serializeBangs([{ bang: 'foo', pattern: 'https://example.com/?q={{{s}}}' }]))
      .toMatchObject({ 'foo': 'https://example.com/?q={{{s}}}' });
  });
});

describe('bang record deserialization', () => {
  it('properly deserializes a bangs object into records', () => {
    expect(deserializeBangs({ 'foo': 'https://example.com/?q={{{s}}}' }))
      .toMatchObject([{ bang: 'foo', pattern: 'https://example.com/?q={{{s}}}' }]);
  });
});

describe('bang record sorting', () => {
  it('properly sorts records by bang property', () => {
    expect(sortRecords([{ bang: 'foo', pattern: 'https://example.com/?q={{{s}}}' }, { bang: 'bar', pattern: 'https://example.com/?q={{{s}}}' }]))
      .toMatchObject([{ bang: 'bar', pattern: 'https://example.com/?q={{{s}}}' }, { bang: 'foo', pattern: 'https://example.com/?q={{{s}}}' }]);
  });
});
