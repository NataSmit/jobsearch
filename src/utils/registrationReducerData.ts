export const initialState = {
  mail: "",
  password: "",
  emailUnfocused: true,
  passwordUnfocused: true,
};

type ACTIONTYPE =
  | { type: "stateAfterFormSubmit" }
  | { type: "blurMail" }
  | { type: "blurPassword" }
  | { type: "changeMail"; payload: string }
  | { type: "changePassword"; payload: string }
  | { type: "blurDefault" };

export function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "stateAfterFormSubmit":
      return {
        mail: "",
        password: "",
        emailUnfocused: true,
        passwordUnfocused: true,
      };
    case "blurMail":
      return {
        mail: state.mail,
        password: state.password,
        emailUnfocused: false,
        passwordUnfocused: state.passwordUnfocused,
      };
    case "blurPassword":
      return {
        mail: state.mail,
        password: state.password,
        emailUnfocused: state.emailUnfocused,
        passwordUnfocused: false,
      };
    case "changeMail":
      return {
        mail: action.payload,
        password: state.password,
        emailUnfocused: state.emailUnfocused,
        passwordUnfocused: state.passwordUnfocused,
      };
    case "changePassword":
      return {
        mail: state.mail,
        password: action.payload,
        emailUnfocused: state.emailUnfocused,
        passwordUnfocused: state.passwordUnfocused,
      };
    case "blurDefault":
      return {
        mail: state.mail,
        password: state.password,
        emailUnfocused: true,
        passwordUnfocused: true,
      };
  }
}
