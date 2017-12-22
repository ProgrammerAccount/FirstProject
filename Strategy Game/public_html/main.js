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
	if(e===undefined) return document.getElementById("error");
	else return e;
} 
function GetObject(name)
{
    switch(name)
    {
        case "MarksMan": return new MarksMan(0,0);break; 
      
        
        
    }  
}
function WaitingState(element)
{
    
    
}
const blocks=document.getElementsByClassName("block");
const WAITING_BLOCK_COLOR="#3573d6";
const DEFAULT_BLOCK_COLOR="#31c63b";
const WAITING_STATE="waiting";
const DEFAULT_STATE=undefined;
let MM1= new MarksMan(0,4);
let MM2= new MarksMan(0,6);
let MM3= new MarksMan(1,5);
let indexOfObject=-1;
let GameState = "PM";
//WFM - waiting for move
//PM - player move
//BM - bot move

function ClickEvent(e) {

		const index = Array.from(e.parentElement.children).indexOf(e);
		let bottomBlock=isDefine(blocks[index-20]);
                
		let leftBlock=isDefine(blocks[index-1]);
		let rightBlock=isDefine(blocks[index+1]);
		let topBlock=isDefine(blocks[index+20]);
                if((index-1)%20===19) leftBlock=document.getElementById("error");
                if(index%20===19) rightBlock=document.getElementById("error");
            if(GameState==="PM" && e.name==="MarksMan")//||inna nazwa klasy
            {
		
		indexOfObject=index;
		
		if(bottomBlock.name===DEFAULT_STATE)
		{
			bottomBlock.style.background = WAITING_BLOCK_COLOR;
			bottomBlock.name=WAITING_STATE;
		}
		if(leftBlock.name===DEFAULT_STATE)
		{
			leftBlock.style.background = WAITING_BLOCK_COLOR;
			leftBlock.name=WAITING_STATE;
		}
		if(rightBlock.name===DEFAULT_STATE)
		{
			rightBlock.style.background = WAITING_BLOCK_COLOR;
			rightBlock.name=WAITING_STATE;
		}
		if(topBlock.name===DEFAULT_STATE)
		{
			topBlock.style.background = WAITING_BLOCK_COLOR;
			topBlock.name=WAITING_STATE;
		}
                GameState="WFM";
            }
            else if(GameState==="WFM"&&e.name===WAITING_STATE)
            {
            
		let nameObject=blocks[indexOfObject].name;
		blocks[indexOfObject].innerHTML="";
		isDefine(blocks[indexOfObject-20]).style.background = DEFAULT_BLOCK_COLOR;
		isDefine(blocks[indexOfObject+20]).style.background = DEFAULT_BLOCK_COLOR;
		isDefine(blocks[indexOfObject+1]).style.background = DEFAULT_BLOCK_COLOR;
		isDefine(blocks[indexOfObject-1]).style.background = DEFAULT_BLOCK_COLOR;
                if(isDefine(blocks[indexOfObject-20]).name===WAITING_STATE)
                    isDefine(blocks[indexOfObject-20]).name=DEFAULT_STATE;
                if(isDefine(blocks[indexOfObject+20]).name===WAITING_STATE)
                    isDefine(blocks[indexOfObject+20]).name=DEFAULT_STATE;
                if(isDefine(blocks[indexOfObject+1]).name===WAITING_STATE)
                    isDefine(blocks[indexOfObject+1]).name=DEFAULT_STATE;
                if(isDefine(blocks[indexOfObject-1]).name===WAITING_STATE)
                    isDefine(blocks[indexOfObject-1]).name=DEFAULT_STATE;
                isDefine(blocks[indexOfObject]).name=DEFAULT_STATE;
		indexOfObject=-1;
		
		GetObject(nameObject).Move(blocks,index);	
		GameState="PM";//TODO : change to BM;
	}
	
        }
    
    
let ContainerHTML="";
for(let i=0;i<200;i++)
{
ContainerHTML+='<div onclick="ClickEvent(this)" class="block"></div>';
}
document.getElementById("container").innerHTML=ContainerHTML;
MM1.Move(blocks,(0+3*20));
MM2.Move(blocks,(0+6*20));
MM3.Move(blocks,(1+4*20));