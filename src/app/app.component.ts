import { compileNgModule } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string = '';
  includelatter : boolean = false;
  includenumber : boolean = false;
  includesymbol : boolean = false;
  length : number = 0;

  onButtonclick(){
    const number = '0123456789';
    const latter = 'qwertyuiopasdfghjklzxcvbnm';
    const symbol = '><.,?/:;}{][|\!@#$%^&*()_+';
    let validchar = '';
    if(this.includenumber){
      validchar+=number;
    }
    if(this.includelatter){
      validchar+=latter
    }
    if(this.includesymbol){
      validchar+=symbol
    }
    let generatedpassword = '';
    for(let index=0 ; index<this.length ; index++){
      let index= Math.floor(Math.random()*validchar.length)
      generatedpassword+=validchar[index];
    }
    this.password=generatedpassword;

    
    
    
  }
  getpassword(){
    return this.password
  }
  onchangelatter(){
    this.includelatter = !this.includelatter
  }
  onchangenumber(){
    this.includenumber = !this.includenumber
  }
  onchangesymbol(){
    this.includesymbol = !this.includesymbol
  }
  onchangelength(value= 'number'){
    const parsedValue = parseInt(value);
      if(!isNaN(parsedValue)){
        this.length = parsedValue
        
      }
      
  
    }
    

      
 }
    

  
 



