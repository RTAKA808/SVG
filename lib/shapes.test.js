// tests for triangle circle and square
const {Triangle,Square,Circle}=require('./shapes.js')

describe('Triangle',()=>{
    test('Triangle should be green',()=>{
        const shape= new Triangle();
        shape.setColor("green");
        expect(shape.render()).toEqual(`<polygon points="100,10 150,190 50,190" fill="green"/>`)
    })


})

describe('Square',()=>{
    test('Square should be green',()=>{
        const shape= new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual(`<rect x="10" y="60" width="30" height="30" fill="green"/>`)
    })


})

describe('Circle',()=>{
    test('Circle should be green',()=>{
        const shape= new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual(`<circle cx="25" cy="75" r="20" fill="green"/>`)
    })


})