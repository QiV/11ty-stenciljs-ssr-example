import{r as t,c as e,h as o}from"./p-e490d5ed.js";const n=class{constructor(o){t(this,o),this.count=0,this.counter=this.count||0,this.date=new Date,this.event=e(this,"event",7)}buttonHandler(){this.counter++,this.event.emit(this.counter)}tick(){console.log("update",this.date),this.date=new Date}getText(){return`${this.first}, ${this.middle}, ${this.last}`}componentWillLoad(){console.log("is about to be rendered"),console.log(this.date),this.timerID=setInterval(()=>this.tick(),1e3)}componentDidLoad(){console.log("has been rendered")}componentWillUpdate(){console.log("will update")}componentDidUpdate(){console.log("did update")}componentDidUnload(){console.log("has been removed from the DOM"),clearInterval(this.timerID)}render(){return console.log("x",this.date),o("div",{class:"message"},"Hello, World! I'm ",this.getText()," - Initial Count=",this.count," - Component Count=",this.counter,o("button",{onClick:()=>this.buttonHandler()},"+"),o("hr",null),o("div",null,"Date - ",this.date||new Date),o("div",null,o("slot",null)))}static get style(){return".message.sc-my-component{color:var(--my-component-color,#00f)}"}};export{n as my_component};