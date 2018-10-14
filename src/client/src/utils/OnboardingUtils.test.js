import {
  generateOnboardingMessageAndConfig,
  ONBOARDING_CONFIGURATION,
  GMAIL_ONBOARDING_CONFIGURATION
} from "./OnboardingUtils";

describe("onboarding message and config generation", () => {
  it("should have a default", () => {
    const onboarding = generateOnboardingMessageAndConfig({
      email: "caleb.peterson@cubicle6.com"
    });
    expect(onboarding.message).toBe("Welcome to Interrobang!");
    expect(onboarding.config).toMatchObject(ONBOARDING_CONFIGURATION);
  });

  it("should specialize the message and config for *@gmail.com emails", () => {
    const onboarding = generateOnboardingMessageAndConfig({
      email: "caleb.peterson@gmail.com"
    });
    expect(onboarding.message).toBe(
      `Welcome to Interrobang! It looks like you use Gmail. Here's a !bang for searching your Gmail Inbox`
    );
    expect(onboarding.config).toMatchObject(GMAIL_ONBOARDING_CONFIGURATION);
  });
});
