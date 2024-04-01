"use client"

/**
 * @returns type DD-MM-YY
 */
const getCurrentDate = () => {
    const currentDate = new Date();

    // Extract day, month, and year components from the date
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based, so add 1
    const year = currentDate.getFullYear().toString().slice(-2); // Extract last two digits of the year

    // Concatenate day, month, and year components with hyphens to form the desired format
    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
}

export default getCurrentDate;