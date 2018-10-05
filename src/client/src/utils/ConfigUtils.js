import { assign, map, sortBy } from 'lodash';

function bangToRecord(pattern, bang) {
  return { bang, pattern };
}

function recordToBang(record) {
  return { [record.bang]: record.pattern };
}

function addIndexToRecord(record, index) {
  return { index, ...record };
}

export function serializeBangs(array) {
  return assign({}, ...map(array, recordToBang));
}

export function deserializeBangs(object) {
  const records = map(object, bangToRecord);
  return map(records, addIndexToRecord);
}

export function sortRecords(records) {
  return sortBy(records, 'bang');
}
