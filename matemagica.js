export default class matemagica{
 constructor(x,y){
      this.x=x;
      this.y=y;
   }

   get somar(){
      if(this.x>0 && this.y>0){
         return this.x + this.y;
      }
   }
   set somar(result){
      result=(this.x+this.y);
   }
  get subtrair(){
   return this.x-this.y;
  }
  set subtrair(result){
   result=(this.x-this.y);
  }
  get multiplicar(){
   if(this.x==0 || this.y==0){
      console.log('o resultado obtido é nulo!');
   }else if(this.x>0 && this.y>0){
      console.log('o valor é positivo!');
      return (this.x*this.y);
   }else if(this.x<=0 || this.y<=0){
      console.log('o valor é  negativo!');
   }
        
  }
  set multiplicar(result){
   result=this.x*this.y;
  }
  
}
