import { map } from 'lodash';

function bangToRecord(pattern, bamg) {
  return { bang, pattern };
}

function recordToBang(record) {
  return { [record.bang]: record.pattern };
}

function addIndexToRecord(record, index) {
  return { index, ...record };
}

export function serializeBangs(array) {
  return { ...map(array, recordToBang) };
}

export function deserializeBangs(object) {
  const records = map(object, bangToRecord);
  return map(records, addIndexToRecord);
}
