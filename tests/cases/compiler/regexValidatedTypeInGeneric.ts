type CssColor = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;

type GenericType_0<T> = Array<T> | T;
type GenericType_1<T extends string> = Array<T> | T;
type GenericType_2<T extends number> = Array<T> | T;
let obj_0: GenericType_0<CssColor>;
if (obj_0 instanceof Array) {
    obj_0.push('nonColor');
    obj_0.push('#000');
} else {
    obj_0 = 'nonColor';
    obj_0 = '#000';
}
let obj_1: GenericType_1<CssColor>;
if (obj_1 instanceof Array) {
    obj_1.push('nonColor');
    obj_1.push('#000');
} else {
    obj_1 = 'nonColor';
    obj_1 = '#000';
}
let obj_2: GenericType_2<CssColor>;
if (obj_2 instanceof Array) {
    obj_2.push('nonColor');
    obj_2.push('#000');
} else {
    obj_2 = 'nonColor';
    obj_2 = '#000';
}

interface GenericInterface_0<T> {
    property: T;
    method(arg: T): T;
}
interface GenericInterface_1<T extends string> {
    property: T;
    method(arg: T): T;
}
interface GenericInterface_2<T extends number> {
    property: T;
    method(arg: T): T;
}
let interface_obj_0: GenericInterface_0<CssColor>;
interface_obj_0.property = 'notColor';
interface_obj_0.property = '#000'; 
interface_obj_0.method('notColor');
interface_obj_0.method('#000');
let interface_obj_1: GenericInterface_1<CssColor>;
interface_obj_1.property = 'notColor';
interface_obj_1.property = '#000'; 
interface_obj_1.method('notColor');
interface_obj_1.method('#000');
let interface_obj_2: GenericInterface_2<CssColor>;
interface_obj_2.property = 'notColor';
interface_obj_2.property = '#000'; 
interface_obj_2.method('notColor');
interface_obj_2.method('#000');

class GenericClass_0<T> {
    property: T;
    constructor(arg: T) {
        this.property = arg;
    }
    method(arg: T): T {
        this.property = arg;
        return this.property;
    }
}
class GenericClass_1<T extends string> {
    property: T;
    constructor(arg: T) {
        this.property = arg;
    }
    method(arg: T): T {
        this.property = arg;
        return this.property;
    }
}
class GenericClass_2<T extends number> {
    property: T;
    constructor(arg: T) {
        this.property = arg;
    }
    method(arg: T): T {
        this.property = arg;
        return this.property;
    }
}
let class_obj_0 = new GenericClass_0<CssColor>('notColor');
class_obj_0 = new GenericClass_0<CssColor>('#000');
class_obj_0.property = 'notColor';
class_obj_0.property = '#000';
class_obj_0.method('notColor');
class_obj_0.method('#000');
let class_obj_1 = new GenericClass_1<CssColor>('notColor');
class_obj_1 = new GenericClass_1<CssColor>('#000');
class_obj_1.property = 'notColor';
class_obj_1.property = '#000';
class_obj_1.method('notColor');
class_obj_1.method('#000');
let class_obj_2 = new GenericClass_2<CssColor>('notColor');
class_obj_2 = new GenericClass_2<CssColor>('#000');
class_obj_2.property = 'notColor';
class_obj_2.property = '#000';
class_obj_2.method('notColor');
class_obj_2.method('#000');

class ClassWithGenericMethods {    
    genericMethod_0<T>(arg: T): T {
        return arg;
    }    
    genericMethod_1<T extends string>(arg: T): T {
        return arg;
    }    
    genericMethod_2<T extends number>(arg: T): T {
        return arg;
    }
}
let class_obj_3 = new ClassWithGenericMethods();
class_obj_3.genericMethod_0<CssColor>('notColor');
class_obj_3.genericMethod_0<CssColor>('#000');
class_obj_3.genericMethod_1<CssColor>('notColor');
class_obj_3.genericMethod_1<CssColor>('#000');
class_obj_3.genericMethod_2<CssColor>('notColor');
class_obj_3.genericMethod_2<CssColor>('#000');

function genericFunction_0<T>(arg: T): T {
    return arg;
}
function genericFunction_1<T extends string>(arg: T): T {
    return arg;
}
function genericFunction_2<T extends number>(arg: T): T {
    return arg;
}
genericFunction_0<CssColor>('notColor');
genericFunction_0<CssColor>('#000');
genericFunction_1<CssColor>('notColor');
genericFunction_1<CssColor>('#000');
genericFunction_2<CssColor>('notColor');
genericFunction_2<CssColor>('#000');