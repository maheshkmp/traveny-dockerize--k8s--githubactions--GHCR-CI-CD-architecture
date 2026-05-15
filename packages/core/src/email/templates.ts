export const welcomeTemplate = ({ name }: { name: string }) => {
  return `
    <div>
      <h1>Welcome, ${name}!</h1>
      <p>Thank you for joining our platform.</p>
    </div>
  `;
};

export const emailVerificationTemplate = ({ name, url }: { name: string; url: string }) => {
  return `
    <div>
      <h1>Verify your email, ${name}</h1>
      <p>Click the link below to verify your email:</p>
      <a href="${url}">Verify Email</a>
    </div>
  `;
};

export const forgotPasswordTemplate = ({ name, url }: { name: string; url: string }) => {
  return `
    <div>
      <h1>Reset your password, ${name}</h1>
      <p>Click the link below to reset your password:</p>
      <a href="${url}">Reset Password</a>
    </div>
  `;
};

export const passwordChangedTemplate = ({ name }: { name: string }) => {
  return `
    <div>
      <h1>Password Changed, ${name}</h1>
      <p>Your password has been successfully changed.</p>
    </div>
  `;
};

export const emailVerificationOTPTemplate = ({ name, otp }: { name: string; otp: string }) => {
  return `
    <div>
      <h1>Verify your email, ${name}</h1>
      <p>Your verification code is: <strong>${otp}</strong></p>
    </div>
  `;
};

export const forgotPasswordOTPTemplate = ({ name, otp }: { name: string; otp: string }) => {
  return `
    <div>
      <h1>Reset your password, ${name}</h1>
      <p>Your password reset code is: <strong>${otp}</strong></p>
    </div>
  `;
};

export const signInOTPTemplate = ({ name, otp }: { name: string; otp: string }) => {
  return `
    <div>
      <h1>Sign in, ${name}</h1>
      <p>Your sign-in code is: <strong>${otp}</strong></p>
    </div>
  `;
};
