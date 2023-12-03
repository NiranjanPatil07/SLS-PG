import * as BASE_CONFIG from '../../../config/config';

export const GetNameInitials = (val) => {
  let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');
  let initials = [...val?.matchAll(rgx)] || [];
  initials = ((initials?.shift()?.[1] || '') + (initials?.pop()?.[1] || ''))?.toUpperCase();
  return initials;
};

export const GetNameFromEmail = (val) => {
  const email = val;
  const [namePart, domain] = email?.split('@');
  const [firstName, lastName] = namePart?.split('.');

  const fullName = `${capitalizeFirstLetter(firstName)} ${capitalizeFirstLetter(lastName)}`;

  function capitalizeFirstLetter(str) {
    return str?.charAt(0)?.toUpperCase() + str?.slice(1);
  }
  return fullName;
};

export const GetInitialsOfFirstTwoWords = (text) => {
  const words = text.split(' ');

  if (words.length >= 2) {
    const [firstChar, secondChar] = words.map((word) => word[0].toUpperCase());
    return `${firstChar}${secondChar}`;
  } else if (words.length === 1) {
    const [firstChar] = words[0][0].toUpperCase();
    return firstChar;
  } else {
    return '';
  }
};

export function CalculateDaysRemaining(epoch1, epoch2) {
  const millisecondsPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  const timeDifferenceMilliseconds = Math.abs(epoch2 * 1000 - epoch1 * 1000);
  const daysRemaining = Math.ceil(timeDifferenceMilliseconds / millisecondsPerDay);
  return daysRemaining;
} // Replace with your second epoch date

export const FormatDateTime = (dateTimeString) => {
  const date = new Date(dateTimeString);

  const formattedDate = `${(date.getUTCDate() < 10 ? '0' : '') + date.getUTCDate()}/${
    (date.getUTCMonth() + 1 < 10 ? '0' : '') + (date.getUTCMonth() + 1)
  }/${date.getUTCFullYear()} ${(date.getUTCHours() < 10 ? '0' : '') + date.getUTCHours()}:${
    (date.getUTCMinutes() < 10 ? '0' : '') + date.getUTCMinutes()
  }:${(date.getUTCSeconds() < 10 ? '0' : '') + date.getUTCSeconds()}`;

  return formattedDate;
};

export const AdminInviteValidate = (values) => {
  const errors = {};
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const DOMAIN = values?.email?.split('@')[1];

  if (!values?.name) {
    errors.name = 'Name is required';
  }
  if (!values?.email) {
    errors.email = 'Email address is required';
  } else if (!emailRegex.test(values?.email)) {
    errors.email = 'Please enter valid email';
  } else if (BASE_CONFIG?.CONFIG?.PUBLIC_DOMAIN.includes(DOMAIN?.toLowerCase())) {
    errors.email = 'Please use business email address';
  }
  return errors;
};
