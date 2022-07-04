import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-calculator',
  templateUrl: './simple-calculator.component.html',
  styleUrls: ['./simple-calculator.component.css']
})
export class SimpleCalculatorComponent  {
  public result:number = 0


  addOperation(firstNumber:string,secondNumber:string){
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);
    
    this.result = num1 + num2;
  }
  subOperation(firstNumber:string,secondNumber:string){
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);
    
    this.result = num1 - num2;
  }
  mulOperation(firstNumber:string,secondNumber:string){
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);
    
    this.result = num1 * num2;
  }
  divOperation(firstNumber:string,secondNumber:string){
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);
    
    this.result = num1 / num2;
  }
}
