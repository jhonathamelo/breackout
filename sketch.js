var tijolo,bola,raquete,estadojogo,bordas,tijolos,vidas,pontuaçao

function setup(){
  
 createCanvas(400,400)
  estadojogo='parado'
  montarjogo()
  pontuaçao=0
  vidas=3
  
  
  
}
 





 function draw(){
  background("#080808")  
   textSize(15)
   text('pontuaçao:'+pontuaçao,40,25)
   text('vidas:'+vidas,300,25)
   
   if(estadojogo=='parado'){
     tijolos.setVelocityYEach(0)
     bola.velocityX=0
     bola.velocityY=0
     bola.x=200
     bola.y=250
     
     raquete.velocityX=0
     raquete.velocityY=0
     raquete.x=200
     raquete.y=350
     
    textSize(20)
     text('pressione"ESPAÇO"para iniciar',60,200)
     
     if(keyDown("SPACE")){
       
       tijolos.setVelocityYEach(0.2)
       
       estadojogo="play";
       bola.velocityY=-5;
       bola.velocityX=-6;
         
       
     }
     
   }
   
   if(estadojogo=='play'){
     if(!tijolos[0]){
       textSize(25)
       text('PARABÉNS VOCÊ CONSEGUIU!!!!!',10,220)
        bola.remover()
        raquete.remover()
       
     }
     if(tijolos.isTouching(bordas[3])){
       estadojogo='gameOver'
     }
     
     
     
     
     
     fimDejogo()
     
     for(i=0;i<3;i++){
     
     bola.bounceOff(bordas[i])
     
     
   }
     
      if(keyDown('left')){
       raquete.velocityX=-10
     
      }
     
   
     if(keyDown('right')){
       raquete.velocityX=+10
       
     }
     
    raquete.collide(bordas)
     bola.bounceOff(raquete)
     bola.bounceOff(tijolos,removerTijolo)
     
   }
     
     
     
     
     
     
   if(estadojogo=='gameOver'){
     
     tijolos.destroyEach()
     
     textSize(30)
     text('GAME OVER',110,220)
     bola.remover()
     raquete.remover()
     
     
   }
  drawSprites()
  
}


  
function removerTijolo(bola,tijolo){
  
  tijolo.remove()
  
  pontuaçao=pontuaçao+1
  
}

function fimDejogo(){
  
  if(bola.y>400){
    vidas=vidas-1
    
    if(vidas<1){
      estadojogo='gameOver'
    
    }else{
      
      estadojogo='parado'
      
      
    
    }
      
    
    
  }
   
  
}











  function criarLinha(y,cor){
    
      for(i=0;i<=5;i++){
  
  tijolo=createSprite(65+54*i,50+y,50,25)
    tijolo.shapeColor=cor
        tijolos.add(tijolo)
  }
    
    
    
  }
   
function montarjogo(){
  
  tijolos=createGroup()
  criarLinha(0,'red')
  criarLinha(29,'blue')
  criarLinha(29+29,'yellow')
  criarLinha(29+29+29,'green')

  bordas=createEdgeSprites()
  
  
  bola=createSprite(200,250,20,20)
  bola.shapeColor='#00BCD4'
  
  raquete=createSprite(200,350,120,10)
  raquete.shapeColor='#FFEB3B'
  
  
}

  
