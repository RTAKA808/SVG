const inquirer=require('inquirer')
const fs=require('fs')
const {Triangle,Square,Circle}=require('./lib/shapes.js')



const prompts=[
    {
        type:'input',
        name:'text',
        message:'Input up to 3 characters:',
        validate:function(answers) {
            if(answers.length>3){
                return console.log('too many characters')
            }
            return true;
        }
    },
    {
        type:'input',
        name:'textColor',
        message:'Enter a text color (color keyword OR a hexadecimal number):'
    },
    {
        type:'list',
        name:'shape',
        message:'What shape would you like?',
        choices:['circle', 'triangle','square']
    },
    {
        type:'input',
        name:'shapeColor',
        message:'Enter a color keyword for shape (OR a hexadecimal number):'
    }

]

function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(error)=>
error ? console.error(error) : console.log('success')
)}

// TODO: Create a function to initialize app
function init(){
    inquirer.prompt(prompts)
    .then(answers=>{
    switch(answers.shape){
    case 'Triangle':
            return new Triangle(answers.text, answers.textColor, answers.shapeColor);
    case 'Square':
            return new Square(answers.text, answers.textColor, answers.shapeColor);
    case 'Circle':
            return new Circle(answers.text, answers.textColor, answers.shapeColor);
}})
    .then(shapes=>{
    console.log(shapes)
    const svg=`
    svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    ${shapes.render()};
    ${shapes.renderText()};



</svg>`
    writeToFile('./examples/logo.svg', svg)
    })
    }

    init()

