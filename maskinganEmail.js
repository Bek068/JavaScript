let email = "everythingeverywhereallatonce@gmail.com";
const maskEmail = (email) => {
    const atIndex = email.indexOf("@");
    const username = email.slice(0,atIndex);
    const domain = email.slice(atIndex);
    const masked= username[0]+ "*".repeat(username.length-2)+username[username.length-1];
    return masked+ domain;
}
console.log(maskEmail(email));


// ALternate Method:  


let mail = "eva@gmail.com";

/**
 * Mask an email's username leaving first and last character visible.
 * - Validates input and presence of '@'.
 * - Leaves usernames of length <= 2 unchanged.
 */
const maskmail = (mail) => {
    if (typeof mail !== 'string') throw new TypeError('email must be a string');
    const atIndex = mail.indexOf('@');
    if (atIndex <= 0) throw new Error('Invalid email: missing or misplaced "@"');

    const username = mail.slice(0, atIndex);
    const domain = mail.slice(atIndex);

    if (username.length <= 2) {
        return username + domain;
    }

    const masked = username[0] + '*'.repeat(username.length - 2) + username[username.length - 1];
    return masked + domain;
};

try {
    console.log(maskmail(mail));
} catch (err) {
    console.error('Error:', err.message);
}
