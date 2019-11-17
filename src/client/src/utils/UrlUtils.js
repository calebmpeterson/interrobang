import startsWith from "lodash/startsWith";
import {
  stringify as toQueryString,
  parse as parseQueryString
} from "querystring";

export const encodeParams = params => `?${toQueryString(params)}`;

export const decodeParams = query =>
  startsWith(query, "?") ? parseQueryString(query.substring(1)) : query;
