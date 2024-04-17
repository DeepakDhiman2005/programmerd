/**
 * 
 * @returns `return unique ID`
 */

export const TenCodeID = (value="") => {
    return value + Math.floor(Math.random() * 100000);
}

export const ALPHAID = (value="") => {
    let atoz = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let AtoZ = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    return value + atoz[Math.floor(Math.random() * 35)] + AtoZ[Math.floor(Math.random() * 35)] + atoz[Math.floor(Math.random() * 35)] + AtoZ[Math.floor(Math.random() * 35)];
}

export const UNIQUEID = (value="") => {
    return value + Date.now() + "-" + Math.floor(Math.random()) * 100000; + "-" + Date.UTC("29", "12", "14", "5", "56", "41");
}