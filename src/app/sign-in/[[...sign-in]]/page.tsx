import React from "react";
import { useClerk, SignIn, SignUp } from "@clerk/clerk-react";

function SignInPage() {
  const { getSignInWidget, getSignUpWidget } = useClerk();

  return (
    <div>
      <SignIn
        afterSignInUrl="/"
        appearance={{
          elements: {
            footer: {
              elements: {
                termsOfService: {
                  href: "https://clerk.dev/terms",
                  text: "Terms of Service",
                },
                privacyPolicy: {
                  href: "https://clerk.dev/privacy",
                  text: "Privacy Policy",
                },
              },
            },
          },
        }}
        signUpUrl="/sign-up"
        widget={getSignInWidget()}
      />
      <SignUp
        afterSignUpUrl="/"
        appearance={{
          elements: {
            footer: {
              elements: {
                termsOfService: {
                  href: "https://clerk.dev/terms",
                  text: "Terms of Service",
                },
                privacyPolicy: {
                  href: "https://clerk.dev/privacy",
                  text: "Privacy Policy",
                },
              },
            },
          },
        }}
        widget={getSignUpWidget()}
      />
    </div>
  );
}

export default SignInPage;