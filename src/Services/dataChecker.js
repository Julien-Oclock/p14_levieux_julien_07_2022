//service use to create fonction to check and format date

// check if user is adult and return bool
export const isUserIsAdult = (date) => {
    let today = new Date();
    let birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    if(month < 0 || (month === 0 && today.getDate() < birthDate.getDate())){
        age--;
    }
    return age >= 18;
}    

// check if date is valid and return bool
export const isDateValid = (date) => {
    return !isNaN(Date.parse(date));
}

// check if date is in the past and return bool
export const isDateInPast = (date) => {
    console.log(date);
    let today = new Date();
    console.log(today.toLocaleString());
    let dateToCheck = new Date(date);
    console.log(dateToCheck.toLocaleString());  
    console.log(dateToCheck < today);
    return dateToCheck < today;
}

export const isDateInFuture = (date) => {
    let today = new Date();
    let dateToCheck = new Date(date);
    return dateToCheck > today;
}

export const checkStringLenght = (string, min, max) => {
    return string.length >= min && string.length <= max;
}