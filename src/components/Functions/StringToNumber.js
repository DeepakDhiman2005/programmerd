"use client"

/**
 * @param _str => string e.g. `number1` or `number12` or `number`123..`
 * @returns number
 */
const StringToNumber = (_str) => {
    let str = String(_str);
    let _array = [];
    let _val = [];
    let _store = "";
    let j = 0;
    let k = 0;
    let num = false;

    for(let i=0; i < str.length; i++){
        if(str[i].match(/[0-9]/) && !num){
            _val[j] = "";
            _val[j] += _store;
            _store = str[i];
            j += 1;
            num = true;
        }
        else if(str[i].match(/[0-9]/) && num){
            _store += str[i];
        }
        else {
            if(num){
                num = false;
                _array[k] = "";
                _array[k] += _store;
                _store = "";
                k += 1;
            }else{ 
                _store += str[i];
            }
        }
    }
    if(num){
        _array[k] = "";
        _array[k] += _store;
    }else{
        _val[j] = "";
        _val[j] += _store;
    }

    return {number: _array, string: _val};
}

// n1n2
export default StringToNumber;