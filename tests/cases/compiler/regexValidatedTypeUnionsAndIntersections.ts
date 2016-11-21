type Foo = { someNumber: number, someString: string };
type Email = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
type Gmail = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@gmail\.com$/i;
type EmailOrGmail = Email | Gmail;
type EmailAndGmail = Email & Gmail;
type EmailOrFoo = Email | Foo;
type EmailAndFoo = Email & Foo;

let bar: string = '';
let someEmail = 'test@example.com';
let someGmail = 'test@gmail.com';
let someEmailLiteral: 'test@example.com' = 'test@example.com';
let someGmailLiteral: 'test@gmail.com' = 'test@gmail.com';

interface User {
    propertyForUnion: number;
    usersProperty: number;
}
interface GmailUser {
    propertyForUnion: number;
    gmailProperty: number;
}
interface NonGmailUser {
    propertyForUnion: number;
    nonGmailProperty: number;
}

interface UsersCollection {
    [email: Email]: User;
    [gmail: Gmail]: GmailUser;
}
let collection_0: UsersCollection = {};
collection_0[bar].propertyForUnion;
collection_0[bar].usersProperty;
collection_0[bar].gmailProperty;

if (EmailOrGmail.test(bar)) {
    collection_0[bar].propertyForUnion;
    collection_0[bar].usersProperty;
    collection_0[bar].gmailProperty;
}
collection_0[<EmailOrGmail>bar].propertyForUnion;
collection_0[<EmailOrGmail>bar].usersProperty;
collection_0[<EmailOrGmail>bar].gmailProperty;

if (EmailAndGmail.test(bar)) {
    collection_0[bar].propertyForUnion;
    collection_0[bar].usersProperty;
    collection_0[bar].gmailProperty;
}
collection_0[<EmailAndGmail>bar].propertyForUnion;
collection_0[<EmailAndGmail>bar].usersProperty;
collection_0[<EmailAndGmail>bar].gmailProperty;

if (EmailOrFoo.test(bar)) {
    collection_0[bar].propertyForUnion;
    collection_0[bar].usersProperty;
    collection_0[bar].gmailProperty;
} else {
    bar.someNumber;
    bar.someString;
}
collection_0[<EmailOrFoo>bar].propertyForUnion;
collection_0[<EmailOrFoo>bar].usersProperty;
collection_0[<EmailOrFoo>bar].gmailProperty;


interface UsersCollectionWithError_1 {
    [email: Email]: User;
    [gmail: EmailAndGmail]: GmailUser;
}
interface UsersCollectionWithoutError_1 {
    [email: Email]: User;
    [gmail: EmailAndGmail]: User & GmailUser;
}
let collection_1: UsersCollectionWithoutError_1 = {};
collection_0['test@example.com'].propertyForUnion;
collection_0['test@example.com'].usersProperty;
collection_0['test@example.com'].gmailProperty;
collection_0['test@gmail.com'].propertyForUnion;
collection_0['test@gmail.com'].usersProperty;
collection_0['test@gmail.com'].gmailProperty;
collection_0[someEmail].propertyForUnion;
collection_0[someEmail].usersProperty;
collection_0[someEmail].gmailProperty;
collection_0[someGmail].propertyForUnion;
collection_0[someGmail].usersProperty;
collection_0[someGmail].gmailProperty;
collection_0[<Email>someEmail].propertyForUnion;
collection_0[<Email>someEmail].usersProperty;
collection_0[<Email>someEmail].gmailProperty;
collection_0[<EmailAndGmail>someGmail].propertyForUnion;
collection_0[<EmailAndGmail>someGmail].usersProperty;
collection_0[<EmailAndGmail>someGmail].gmailProperty;
collection_0[someEmailLiteral].propertyForUnion;
collection_0[someEmailLiteral].usersProperty;
collection_0[someEmailLiteral].gmailProperty;
collection_0[someGmailLiteral].propertyForUnion;
collection_0[someGmailLiteral].usersProperty;
collection_0[someGmailLiteral].gmailProperty;
if (Email.test(someEmail)) {
    collection_0[someEmail].propertyForUnion;
    collection_0[someEmail].usersProperty;
    collection_0[someEmail].gmailProperty;
}
if (EmailAndGmail.test(someGmail)) {
    collection_0[someGmail].propertyForUnion;
    collection_0[someGmail].usersProperty;
    collection_0[someGmail].gmailProperty;
}

interface UsersCollectionWithError_2 {
    [gmail: EmailOrGmail]: GmailUser;
    [email: Email]: NonGmailUser;
}
interface UsersCollectionWithoutError_2 {
    [gmail: EmailOrGmail]: NonGmailUser | GmailUser;
    [email: Email]: NonGmailUser;
}
let collection_2: UsersCollectionWithoutError_2 = {};
collection_0['test@example.com'].propertyForUnion;
collection_0['test@example.com'].nonGmailProperty;
collection_0['test@example.com'].gmailProperty;
collection_0['test@gmail.com'].propertyForUnion;
collection_0['test@gmail.com'].nonGmailProperty;
collection_0['test@gmail.com'].gmailProperty;
collection_0[someEmail].propertyForUnion;
collection_0[someEmail].nonGmailProperty;
collection_0[someEmail].gmailProperty;
collection_0[someGmail].propertyForUnion;
collection_0[someGmail].nonGmailProperty;
collection_0[someGmail].gmailProperty;
collection_0[<Email>someEmail].propertyForUnion;
collection_0[<Email>someEmail].nonGmailProperty;
collection_0[<Email>someEmail].gmailProperty;
collection_0[<EmailOrGmail>someGmail].propertyForUnion;
collection_0[<EmailOrGmail>someGmail].nonGmailProperty;
collection_0[<EmailOrGmail>someGmail].gmailProperty;
collection_0[someEmailLiteral].propertyForUnion;
collection_0[someEmailLiteral].nonGmailProperty;
collection_0[someEmailLiteral].gmailProperty;
collection_0[someGmailLiteral].propertyForUnion;
collection_0[someGmailLiteral].nonGmailProperty;
collection_0[someGmailLiteral].gmailProperty;
if (Email.test(someEmail)) {
    collection_0[someEmail].propertyForUnion;
    collection_0[someEmail].nonGmailProperty;
    collection_0[someEmail].gmailProperty;
}
if (EmailOrGmail.test(someGmail)) {
    collection_0[someGmail].propertyForUnion;
    collection_0[someGmail].nonGmailProperty;
    collection_0[someGmail].gmailProperty;
}

interface UsersCollectionWithError_3 {
    [catchall: string]: User;
    [gmail: Gmail]: GmailUser;
}
interface UsersCollectionWithoutError_3 {
    [catchall: string]: User | GmailUser;
    [gmail: Gmail]: GmailUser;
}
let collection_3: UsersCollectionWithoutError_3 = {};
collection_0['test@example.com'].propertyForUnion;
collection_0['test@example.com'].usersProperty;
collection_0['test@example.com'].gmailProperty;
collection_0['test@gmail.com'].propertyForUnion;
collection_0['test@gmail.com'].usersProperty;
collection_0['test@gmail.com'].gmailProperty;
collection_0[someEmail].propertyForUnion;
collection_0[someEmail].usersProperty;
collection_0[someEmail].gmailProperty;
collection_0[someGmail].propertyForUnion;
collection_0[someGmail].usersProperty;
collection_0[someGmail].gmailProperty;
collection_0[<Gmail>someGmail].propertyForUnion;
collection_0[<Gmail>someGmail].usersProperty;
collection_0[<Gmail>someGmail].gmailProperty;
collection_0[someEmailLiteral].propertyForUnion;
collection_0[someEmailLiteral].usersProperty;
collection_0[someEmailLiteral].gmailProperty;
collection_0[someGmailLiteral].propertyForUnion;
collection_0[someGmailLiteral].usersProperty;
collection_0[someGmailLiteral].gmailProperty;
if (Gmail.test(someGmail)) {
    collection_0[someGmail].propertyForUnion;
    collection_0[someGmail].usersProperty;
    collection_0[someGmail].gmailProperty;
}

interface UsersCollectionWithError_4 {
    [email: EmailOrFoo]: User;
}
