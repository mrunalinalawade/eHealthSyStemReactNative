
import { ErrorMessages } from "./ErrorMessages";

/************************************* Regex ***************************************************/
export const EMAILREGEX =
/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
export const PASSWORDREGEX =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const ALPHANUMERIC_REGEX = /^[a-zA-Z0-9]*$/;
export const FULLNAME_REGEX = /^([A-Za-z][a-z]*\s?[A-Z][a-z]*)|([A-Za-z][a-z]*)$/;
export const name_REGEX =/^[a-zA-Z ]+$/;
export let NUMBER_REGEX = /^\d*$/;


/************************************* All Validations ***************************************************/
/****** EMAIL VALIDATION *****/

export const ValidateEmail = (email) => {
  if (email != '') {
    if (EMAILREGEX.test(email)) {
      return '';
    } else {
      return ErrorMessages.EmailError;
    }
  } else {
    return ErrorMessages.EmailEmpty;
  }
};
/****** PASSWORD VALIDATION *****/
export const ValidatePassword = (password) => {
  if (password != '') {
    if (PASSWORDREGEX.test(password)) {
      return '';
    } else {
      return ErrorMessages.PasswordError;
    }
  } else {
    return ErrorMessages.PasswordEmpty;
  }
};



/****** Validation ConfirmPassword *****/
export const ValidateConfirmPassword = (
  ConfirmPassword,
  Password,
) => {
  if (ConfirmPassword != '') {
    if (ConfirmPassword == Password) {
      return '';
    } else {
      return ErrorMessages.ConfirmPasswordMatch;
    }
  } else {
    return ErrorMessages.ConfirmPasswordEmpty;
  }
};

/****** Validation Fullname *****/
export const ValidateFullname = (fullname) => {
  if (fullname !== '') {
    if (fullname?.length >= 2 && name_REGEX.test(fullname)) {
      return '';
    } else {
      if (fullname.length < 2) {
        return ErrorMessages.FullnameError;
      } else {
        return ErrorMessages.FullnameError;
      }
    }
  } else {
    return ErrorMessages.FullnameEmpty;
  }
};


// export const ValidateMobileNo = (MobileNumber) => {
//   if (MobileNumber !== '') {
//     const NumberStr = MobileNumber.toString(); // Convert to string

//     if (PhoneRegex.test(NumberStr)) {
//       return '';
//     } else {
//       return ErrorMessages.PhoneNumberError;
//     }
//   } else {
//     return ErrorMessages.PhoneNoEmpty;
//   }
// };





