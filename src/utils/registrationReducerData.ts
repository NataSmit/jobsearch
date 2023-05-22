export const initialState = {
  mail: "",
  password: "",
  emailUnfocused: true,
  passwordUnfocused: true,
};

type ACTIONTYPE =
  | { type: "CHANGED_STATE_AFTER_FORM_SUBMIT" }
  | { type: "BLUR_MAIL" }
  | { type: "BLUR_PASSWORD" }
  | { type: "CHANGED_MAIL"; payload: string }
  | { type: "CHANGED_PASSWORD"; payload: string }
  | { type: "BLUR_DEFAULT" };

export function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "CHANGED_STATE_AFTER_FORM_SUBMIT":
      return {
        mail: "",
        password: "",
        emailUnfocused: true,
        passwordUnfocused: true,
      };
    case "BLUR_MAIL":
      return {
        mail: state.mail,
        password: state.password,
        emailUnfocused: false,
        passwordUnfocused: state.passwordUnfocused,
      };
    case "BLUR_PASSWORD":
      return {
        mail: state.mail,
        password: state.password,
        emailUnfocused: state.emailUnfocused,
        passwordUnfocused: false,
      };
    case "CHANGED_MAIL":
      return {
        mail: action.payload,
        password: state.password,
        emailUnfocused: state.emailUnfocused,
        passwordUnfocused: state.passwordUnfocused,
      };
    case "CHANGED_PASSWORD":
      return {
        mail: state.mail,
        password: action.payload,
        emailUnfocused: state.emailUnfocused,
        passwordUnfocused: state.passwordUnfocused,
      };
    case "BLUR_DEFAULT":
      return {
        mail: state.mail,
        password: state.password,
        emailUnfocused: true,
        passwordUnfocused: true,
      };
  }
}
