class Shapes{
    constructor(text,textColor,shapeColor){
        this.text=text
        this.textColor=textColor
        this.shapeColor=shapeColor

    }
    renderText(){
        return `<text x="25" y="80" font-size="20" text-anchor="middle" fill='${this.textColor}'>${this.text}</text>`
    }
    setColor(color){
        this.shapeColor=color;
    }
}

class Triangle extends Shapes{
    constructor(text,textColor,shapeColor){
        super(text,textColor,shapeColor)
    }
    render(){
        return `<polygon points="100,10 150,190 50,190" fill="${this.shapeColor}"/>`
}}

class Square extends Shapes{
    constructor(text,textColor,shapeColor){
        super(text,textColor,shapeColor)
    }
    render(){
        return `<rect x="10" y="60" width="30" height="30" fill="${this.shapeColor}"/>`
}}

class Circle extends Shapes{
    constructor(text,textColor,shapeColor){
        super(text,textColor,shapeColor)
    }
    render(){
        return `<circle cx="25" cy="75" r="20" fill="${this.shapeColor}"/>`
}}

module.exports={Triangle,Square,Circle}