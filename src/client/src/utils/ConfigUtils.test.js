import { serializeBangs, deserializeBangs } from './ConfigUtils';

describe('bang record serialization', () => {
  it('properly serializes a single record', () => {
    expect(serializeBangs([{ bang: 'foo', pattern: 'https://example.com/?q={{{s}}}' }])
      .toMatchObject({ 'foo': 'https://example.com/?q={{{s}}}' });
  });
});

describe('bang record deserialization', () => {
  it('properly deserializes a bangs object into records', () => {
    expect(deserializeBangs({ 'foo': 'https://example.com/?q={{{s}}}' })
      .toMatchObject([{ bang: 'foo', pattern: 'https://example.com/?q={{{s}}}' }]);
  });
});
