import endsWith from "lodash/endsWith";

export const ONBOARDING_CONFIGURATION = {
  bangs: {
    "": ""
  },
  "search-engine": "https://www.google.com/search?q={{{s}}}"
};

export const GMAIL_ONBOARDING_CONFIGURATION = {
  bangs: {
    gmail: "https://mail.google.com/mail/u/0/#search/{{{s}}}"
  },
  "search-engine": "https://www.google.com/search?q={{{s}}}"
};

export function generateOnboardingMessageAndConfig(user) {
  if (endsWith(user.email, "@gmail.com")) {
    return {
      message: `Welcome to Interrobang! It looks like you use Gmail. Here's a !bang for searching your Gmail Inbox`,
      config: GMAIL_ONBOARDING_CONFIGURATION
    };
  }

  return {
    message: `Welcome to Interrobang!`,
    config: ONBOARDING_CONFIGURATION
  };
}
