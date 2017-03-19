import { UpperClass } from './UpperClass';

// DECORATORS (Annotations)
function log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    let originalMethod = descriptor.value; // save a reference to the original method

    // NOTE: Do not use arrow syntax here. Use a function expression in
    // order to use the correct value of `this` in this method (see notes below)
    // tslint:disable-next-line:only-arrow-functions
    descriptor.value = function(...args: any[]) {
        console.log('The method args are: ' + JSON.stringify(args)); // pre
        let result = originalMethod.apply(this, args);               // run and store the result
        console.log('The return value is: ' + result);               // post
        return result;
        // return the result of the original method
    };

    return descriptor;
}

function AnoTest() {
    console.log('AnoTest(): evaluated');
    return (target: Object,
            propertyKey: string | symbol,
            descriptor: TypedPropertyDescriptor<Object>
            ) => {
                console.log('AnoTest(): called');
    };
}

function SecondAno() {
    console.log('SecondAno(): evaluated');
    return (target, propertyKey: string, descriptor: PropertyDescriptor) => {
        console.log('SecondAno(): called');
    };
}

// CLASS

export class Person extends UpperClass {
    private name: string;
    public setName(name: string): void {
        this.name = name;
    }
    @AnoTest()
    @SecondAno()
    public printName(): void {
        console.log(this.name);
    }
    @log
    public myMethod(arg: string) {
        return 'Message -- ' + arg;
    }
}
