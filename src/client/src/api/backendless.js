const Backendless = require("backendless");

const get = require("lodash/get");
const isString = require("lodash/isString");
const isObject = require("lodash/isObject");

const APP_ID = process.env.REACT_APP_APP_ID;
const APP_KEY = process.env.REACT_APP_APP_KEY;
const REST_KEY = process.env.REACT_APP_REST_KEY;
const SERVER_CODE_USER = "ServerCodeUser";

if (process.env.NODE_ENV === "development") {
  console.log(`Backendless APP_ID:   ${APP_ID}`);
  console.log(`Backendless APP_KEY:  ${APP_KEY}`);
  console.log(`Backendless REST_KEY: ${REST_KEY}`);
}

Backendless.initApp(APP_ID, APP_KEY);

async function getCurrentUser() {
  return await Backendless.UserService.getCurrentUser();
}

async function register(email, password, passwordCheck, subscribe = false) {
  if (password !== passwordCheck) {
    return Promise.reject({ message: "Passwords do not match" });
  }

  const user = new Backendless.User();
  user["email"] = email;
  user["password"] = password;
  user["subscribed"] = subscribe;

  return Backendless.UserService.register(user);
}

async function login(email, password) {
  return Backendless.UserService.login(email, password, true);
}

async function logout() {
  return Backendless.UserService.logout();
}

async function recover(email) {
  return Backendless.UserService.restorePassword(email);
}

async function updateSubscription(user, subscribed) {
  user["subscribed"] = subscribed;
  return Backendless.UserService.update(user);
}

async function updateActivation(user, activated) {
  user["activated"] = activated;
  return Backendless.UserService.update(user);
}

function getUserToken(user) {
  if (isObject(user)) {
    return get(user, "user-token");
  }
  if (isString(user)) {
    return user;
  }
  throw new Error(`Unable to determine 'user-token' from ${user}`);
}

function getUserId(user) {
  if (isObject(user)) {
    return user.objectId;
  }
  if (isString(user)) {
    return user;
  }
  throw new Error(`Unable to determine user ID from ${user}`);
}

async function persistConfig(user, config) {
  const userId = getUserId(user);
  const filename = `${userId}.config.json`;
  const json = Buffer.from(JSON.stringify(config, null, "  "));
  const saved = await Backendless.Files.saveFile(
    "configurations",
    filename,
    json,
    true
  );

  const fileURL = `configurations/${filename}`;

  Backendless.Files.Permissions.READ.deny(fileURL);
  Backendless.Files.Permissions.WRITE.deny(fileURL);
  Backendless.Files.Permissions.DELETE.deny(fileURL);

  Backendless.Files.Permissions.READ.grantRole(SERVER_CODE_USER, fileURL);
  Backendless.Files.Permissions.WRITE.grantRole(SERVER_CODE_USER, fileURL);
  Backendless.Files.Permissions.DELETE.grantRole(SERVER_CODE_USER, fileURL);

  Backendless.Files.Permissions.READ.grantUser(userId, fileURL);
  Backendless.Files.Permissions.WRITE.grantUser(userId, fileURL);
  Backendless.Files.Permissions.DELETE.grantUser(userId, fileURL);

  return saved;
}

function getConfigFileUrl(user) {
  const userId = isObject(user) ? user.objectId : user;
  return `https://api.backendless.com/${APP_ID}/${REST_KEY}/files/configurations/${userId}.config.json`;
}

async function restoreConfig(user) {
  const url = getConfigFileUrl(user);

  const response = await fetch(url);
  const json = await response.json();
  return json;
}

const PREFIX = "b";

export function createSearchURL(user) {
  return user.missing || user.loading
    ? ""
    : `${window.location.protocol}//${window.location.host}/${PREFIX}/${
        user.objectId
      }/search?query=%s`;
}

export function createLandingURL(user) {
  return user.missing || user.loading
    ? ""
    : `${window.location.protocol}//${window.location.host}/${PREFIX}/${
        user.objectId
      }`;
}

export default {
  register,
  login,
  logout,
  recover,
  updateActivation,
  updateSubscription,
  getCurrentUser,
  getUserToken,
  getConfigFileUrl,
  persistConfig,
  restoreConfig
};
