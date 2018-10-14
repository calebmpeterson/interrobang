import ActionCreators from "../actions/creators";
import password from "./password";

import { harness } from "../utils/TestUtils";

const reducer = harness(password);

describe("change password state management", () => {
  reducer("has default state", {
    before: undefined,
    action: {},
    after: {
      newPassword: "",
      newPasswordCheck: "",
      newPasswordMatch: true,
      canChangePassword: false
    }
  });

  reducer("handles new password update (not matching)", {
    before: {
      newPassword: ""
    },
    action: ActionCreators.updateNewPassword("s3cr3t"),
    after: {
      newPassword: "s3cr3t",
      newPasswordMatch: false,
      canChangePassword: false
    }
  });

  reducer("handles new password update (matching)", {
    before: {
      newPassword: "",
      newPasswordCheck: "s3cr3t"
    },
    action: ActionCreators.updateNewPassword("s3cr3t"),
    after: {
      newPassword: "s3cr3t",
      newPasswordMatch: true,
      canChangePassword: true
    }
  });

  reducer("handles new password check update", {
    before: {
      newPasswordCheck: ""
    },
    action: ActionCreators.updateNewPasswordCheck("s3cr3t"),
    after: {
      newPasswordCheck: "s3cr3t",
      newPasswordMatch: false,
      canChangePassword: false
    }
  });

  reducer("handles new password check update (matching)", {
    before: {
      newPassword: "s3cr3t",
      newPasswordCheck: ""
    },
    action: ActionCreators.updateNewPasswordCheck("s3cr3t"),
    after: {
      newPasswordCheck: "s3cr3t",
      newPasswordMatch: true,
      canChangePassword: true
    }
  });

  reducer("handles password change success", {
    before: {
      newPassword: "s3cr3t",
      newPasswordCheck: "s3cr3t"
    },
    action: ActionCreators.submitPasswordChangeSuccess({}, "my-new-password"),
    after: {
      newPassword: "",
      newPasswordCheck: "",
      newPasswordMatch: true,
      canChangePassword: false,
      passwordChanged: true
    }
  });

  reducer("handles password change failure", {
    before: {
      newPassword: "s3cr3t",
      newPasswordCheck: "s3cr3t"
    },
    action: ActionCreators.submitPasswordChangeFailure(
      "boom!",
      "my-new-password"
    ),
    after: {
      newPassword: "s3cr3t",
      newPasswordCheck: "s3cr3t",
      passwordChanged: false,
      error: "boom!"
    }
  });
});
