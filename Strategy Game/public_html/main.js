class Object
{
	constructor(x,y)
	{
		this.HP=0;
		this.range=0;
		this.damage=0;
		this.position=x+y*20;
		this.objectName="";
	}
	Attact(enemy)
	{
		if((enemy.position>=this.position-this.range)&&
		   (enemy.position<=this.position+this.range)&&
		   (enemy.position/10>=this.position/10-this.range)&&
		   (enemy.position/10<=this.position/10+this.range))
		   {
				alert("attack!");
				enemy.HP= enemy.HP-this.damage;
		   }
	}
	
	Move(blocks,index)
	{
		this.position=index;
		isDefine(blocks[index]).name=this.objectName;
		isDefine(blocks[index]).innerHTML=this.Display();
	}
};
class MarksMan extends Object
{
	constructor(x,y)
	{
		super();
		super.HP=50;
		super.range=3;
		super.damage=20;
		super.position=x+y*20;
		super.objectName="MarksMan";
                
	}
	Move(blocks,index)
	{
		super.Move(blocks,index);
	}
	Attact(blocks,index)
	{
		super.Attact(blocks,index);
	}
	Display()
	{
		return "Łucznik";
	}
};
function isDefine(e)
{
	if(e==undefined) return document.getElementById("error");
	else return e;
} 
const blocks=document.getElementsByClassName("block");
let MM1= new MarksMan(0,4);
let MM2= new MarksMan(0,6);
let MM3= new MarksMan(1,5);
let indexOfObject=-1;
function ClickEvent(e) {
		
		const index = Array.from(e.parentElement.children).indexOf(e);
		let bottomBlock=isDefine(blocks[index-20]);
		let leftBlock=isDefine(blocks[index-1]);
		let rightBlock=isDefine(blocks[index+1]);
		let topBlock=isDefine(blocks[index+20]);
	if(e.name=="MarksMan")//||inna nazwa klasy
	{
		
		indexOfObject=index;
		
		if(bottomBlock.name==undefined)
		{
			bottomBlock.style.background = "#3573d6";
			bottomBlock.name="waiting";
		}
		if(leftBlock.name==undefined)
		{
			leftBlock.style.background = "#3573d6";
			leftBlock.name="waiting";
		}
		if(rightBlock.name==undefined)
		{
			rightBlock.style.background = "#3573d6";
			rightBlock.name="waiting";
		}
		if(topBlock.name==undefined)
		{
			topBlock.style.background = "#3573d6";
			topBlock.name="waiting";
		}	
	}
	else if(e.name=="waiting")
	{
		
		blocks[indexOfObject].innerHTML="";
		isDefine(blocks[indexOfObject-20]).style.background = "#31c63b";
		isDefine(blocks[indexOfObject+20]).style.background = "#31c63b";
		isDefine(blocks[indexOfObject+1]).style.background = "#31c63b";
		isDefine(blocks[indexOfObject-1]).style.background = "#31c63b";
		isDefine(blocks[indexOfObject-20]).name=undefined;
		isDefine(blocks[indexOfObject+20]).name=undefined;
		isDefine(blocks[indexOfObject+1]).name=undefined;
		isDefine(blocks[indexOfObject-1]).name=undefined;
		isDefine(blocks[indexOfObject]).name=undefined;
		indexOfObject=-1;
		
		MM.Move(blocks,index);	
		
	}
	
}
let ContainerHTML="";
for(var i=0;i<200;i++)
{
ContainerHTML+='<div onclick="ClickEvent(this)" class="block"></div>';
}
document.getElementById("container").innerHTML=ContainerHTML;
MM1.Move(blocks,(0+3*20));
MM2.Move(blocks,(0+6*20));
MM3.Move(blocks,(1+4*20));