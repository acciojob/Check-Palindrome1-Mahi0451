// complete the given function

function palindrome(str){
	let rev_str = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev_str += str[i];
    }
    return rev_str;
}
function is_palindrome(str) {
    reverse_str = reverse(str);
    //  condition checking if reverse str is
    // same as string it is palindrome
    // else not a palindrome
    if (reverse_str === str) {
        console.log(true);
    }
    else {
        console.log(false)
    }

}
module.exports = palindrome
