type Email = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
type Gmail = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@gmail\.com$/i;

interface User {
    usersProperty: number;
}
interface GmailUser {
    gmailProperty: number;
}

interface UsersCollection {
    [email: Email]: User;
    [gmail: Gmail]: GmailUser;
}

let collection: UsersCollection;
let someEmail = 'test@example.com';
let someGmail = 'test@gmail.com';

collection['test@example.com'].usersProperty;
collection['test@example.com'].gmailProperty;
collection['test@gmail.com'].usersProperty;
collection['test@gmail.com'].gmailProperty;

collection[someEmail].usersProperty;
collection[someEmail].gmailProperty;
collection[someGmail].usersProperty;
collection[someGmail].gmailProperty;

collection[<Email>someEmail].usersProperty;
collection[<Email>someEmail].gmailProperty;
collection[<Gmail>someGmail].usersProperty;
collection[<Gmail>someGmail].gmailProperty;

if (Email.test(someEmail)) {
    collection[someEmail].usersProperty;
    collection[someEmail].gmailProperty;
}
if (Gmail.test(someGmail)) {
    collection[someGmail].usersProperty;
    collection[someGmail].gmailProperty;
}

let someEmailLiteral: 'test@example.com' = 'test@example.com';
let someGmailLiteral: 'test@gmail.com' = 'test@gmail.com';
collection[someEmailLiteral].usersProperty;
collection[someEmailLiteral].gmailProperty;
collection[someGmailLiteral].usersProperty;
collection[someGmailLiteral].gmailProperty;