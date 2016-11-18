type Email = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
type Gmail = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@gmail\.com$/i;

let email: Email;
let gmail: Gmail;
email = 'test@example.com';
email = 'test@gmail.com';
gmail = 'test@example.com';
gmail = 'test@gmail.com';
gmail = email;
email = gmail;

gmail = <Gmail>email;
if (Gmail.test(email)) {
    gmail = email;
}

let someEmail = 'test@example.com';
let someGmail = 'test@gmail.com';
email = someEmail;
gmail = someGmail;
email = <Email>someEmail;
gmail = <Gmail>someGmail;
if (Email.test(someEmail)) {
    email = someEmail;
}
if (Gmail.test(someGmail)) {
    gmail = someGmail;
}

let someEmailLiteral: 'test@example.com' = 'test@example.com';
let someGmailLiteral: 'test@gmail.com' = 'test@gmail.com';
email = someEmailLiteral;
gmail = someGmailLiteral;
