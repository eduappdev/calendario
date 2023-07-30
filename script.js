

 
    
    let arrtxmes=[

       
        {
            a:'2073',
            b: '3',
            c: '3',
            d: '21',
            e: '2023',
            f: '18',
            g: '7',
            h: '1264969',
            i: '5',
            j: '10',
            l: '3513',
            m: '1264969'

          },
          
    
    ]
   
 //----------------------------------------------------------------------------

  var res=document.getElementById('ed1')
  var respo1=""
  var respo2=0
  const bd = firebase.firestore();
  var di=1
    const tep= setInterval(() => {



      let select=document.querySelector('#selec');
      let optionsvalue= select.options[select.selectedIndex];
      let value = optionsvalue.value;
         respo1=arrselc[value].a
         respo2=arrselc[value].b
   
         


  bd.collection(respo1).doc(respo2).onSnapshot( function(doc){

    if(doc.exists){
        console.log("existe")
        const dados=doc.data()
        var atual=dados.mes
        id=atual
        document.getElementById('dia').innerHTML=dados.dia;
        document.getElementById('mes').textContent=dados.mes;
        document.getElementById('ano').textContent=dados.ano;
        document.getElementById('diastotal').textContent=dados.totd;
        document.getElementById('anototal').textContent=dados.totalano;
        console.log(dados.ano)
        
         if(dados.ano==3500){
            
         }
        //document.getElementById('ed5').textContent=dados.totd;
    }else{
        console.log("Nao existe")
    }
    
   
  // di+=2
  console.log(respo1)
 
  })
   }, 200);




const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');

const meses = document.getElementById('meses');
const anos = document.getElementById('anos');
const dias = document.getElementById('dias');
const tdias = document.getElementById('tdias');
const tanos = document.getElementById('anostotal');

var dia=14;
var mes=5;
var ano=-888;
var tdia=1086253;
var tano=3017;
var nova=0;
// variaves calendario gregoriano
const gmeses=document.getElementById('gmes');
const gdias=document.getElementById('gdia');
const ganos=document.getElementById('gano');
const gtdias=document.getElementById('ganos');
const texdia=document.getElementById('texdia');
const txmes=document.getElementById('txmes')

var gdia=1;
var gmes=1;
var gano=-931;
var gtdia=1086253;
var bisext=3;
var tganos=2974
var arrtex=[
       '',
       'Dom',
       'Seg',
       'Ter',
       'Qua',
       'Qui',
       'Sext',
       'Sab',
       
       
]
var texto=2;


var pedras=[
    '',
    'Sárdio',
    'Topázio',
    'Carbúculo',
    'Esmeralda',
    'Safira',
    'Diamente',
    'Jacinto',
    'Àgata',
    'Ametista',
    'Berilo',
    'Ônix',
    'Jaspe',
        

    
]


function tet(){
    let id=0
 }
 



function loop(){
    
   meses.textContent=mes
   anos.textContent=ano
   dias.textContent=dia
   tdias.textContent=tdia
   tanos.textContent=tano
   gmeses.textContent=gmes
   gdias.textContent=gdia
   ganos.textContent=gano
   gtdias.textContent=gtdia
   texdia.textContent=arrtex[texto]
   txmes.textContent=pedras[mes]

}





var selcdia=[
    '',
    'd1',
    'd2',
    'd3',
    'd4',
    'd5',
    'd6',
    'd7',
    'd8',
    'd9',
    'd10',
    'd11',
    'd12',
    'd13',
    'd14',
    'd15',
    'd16',
    'd17',
    'd18',
    'd19',
    'd20',
    'd21',
    'd22',
    'd23',
    'd24',
    'd25',
    'd26',
    'd27',
    'd28',
    'd29',
    'd30',
]



//variasves horas
var array = [
    '2º vigilia',//0 hora
    '2º vigilia',//1 hora
    '3º vigilia',//2 hora
    '3º vigilia',//3 hora
    '3º vigilia',//4 hora
    '3º vigilia',//5 hora
    '3º vigilia',//6 hora
      'hora 1º',  //7 hora     
      'hora 2º',  //8 hora
      'hora 3º',  //9 hora
      'hora 4º',  //10 hora
      'hora 5º',  //11 hora
      'hora 6º',  //12 hora
      'hora 7º',  //13 hora
      'hora 8º',  //14 hora
      'hora 9º',  //15 hora
      'hora 10º', //16 hora
      'hora 11º', //17 hora
     '1º vigilia',  //18 hora
     '1º vigilia', //19 hora
     '1º vigilia', //20 hora
     '1º vigilia', //21 hora
     '2º vigilia', //22 horas
     '2º vigilia', //23

]

//variaves colocação de dias
var a1=""
var a2=""
var a3="" 
var a4=""
var a5="" 
var a6="" 
var a7=""
var a8="" 
var a9=""
var a10="" 
var a11="" 
var a12="" 
var a13="" 
var a14=""
var a15=""
var a16=""
var a17=""
var a18=""
var a19=""  
var a20="" 
var a21="" 
var a22="" 
var a23=""
var a24="" 
var a25="" 
var a26=""
var a27=""
var a28="" 
var a29=""
var a30=""
var a31=""
var a32=""
var a33=""
var a34="" 
var a35=""
var a36=""

//ciculos de semanas
var ctex=2
var ci=5
function inicio(){
    if(ci==1){
        a1=""
        a2=""
        a3=1
        a4=2
        a5=3
        a6=4
        a7=5
        a8=6
        a9=7
        a10=8
        a11=9
        a12=10
        a13=11
        a14=12
        a15=13
        a16=14
        a17=15
        a18=16
        a19=17
        a20=18
        a21=19
        a22=20
        a23=21
        a24=22
        a25=23
        a26=24
        a27=25
        a28=26
        a29=27
        a30=28
        a31=29
        a32=30
        a33=""
        a34=""
        a35=""
        a36=""
    
       
        
    
       
        
    
    }
    if(ci==2){
        a1=""
        a2=""
        a3=""
        a4=""
        a5=1
        a6=2
        a7=3
        a8=4
        a9=5
        a10=6
        a11=7
        a12=8
        a13=9
        a14=10
        a15=11
        a16=12
        a17=13
        a18=14
        a19=15
        a20=16
        a21=17
        a22=18
        a23=19
        a24=20
        a25=21
        a26=22
        a27=23
        a28=24
        a29=25
        a30=26
        a31=27
        a32=28
        a33=29
        a34=30
        a35=""
        a36=""
        
    
        
    
    }
    if(ci==3){
        a1=""
        a2=""
        a3=""
        a4=""
        a5=""
        a6=""
        a7=1
        a8=2
        a9=3
        a10=4
        a11=5
        a12=6
        a13=7
        a14=8
        a15=9
        a16=10
        a17=11
        a18=12
        a19=13
        a20=14
        a21=15
        a22=16
        a23=17
        a24=18
        a25=19
        a26=20
        a27=21
        a28=22
        a29=23
        a30=24
        a31=25
        a32=26
        a33=27
        a34=28
        a35=29
        a36=30
        
    
    }
    if(ci==4){
        a1=""
        a2=1
        a3=2
        a4=3
        a5=4
        a6=5
        a7=6
        a8=7
        a9=8
        a10=9
        a11=10
        a12=11
        a13=12
        a14=13
        a15=14
        a16=15
        a17=16
        a18=17
        a19=18
        a20=19
        a21=20
        a22=21
        a23=22
        a24=23
        a25=24
        a26=25
        a27=26
        a28=27
        a29=28
        a30=29
        a31=30
        a32=""
        a33=""
        a34=""
        a35=""
        a36=""
        
    
    }
    if(ci==5){
        a1=""
        a2=""
        a3=""
        a4=1
        a5=2
        a6=3
        a7=4
        a8=5
        a9=6
        a10=7
        a11=8
        a12=9
        a13=10
        a14=11
        a15=12
        a16=13
        a17=14
        a18=15
        a19=16
        a20=17
        a21=18
        a22=19
        a23=20
        a24=21
        a25=22
        a26=23
        a27=24
        a28=25
        a29=26
        a30=27
        a31=28
        a32=29
        a33=30
        a34=""
        a35=""
        a36=""
        
    
    }
    if(ci==6){
        a1=""
        a2=""
        a3=""
        a4=""
        a5=""
        a6=1
        a7=2
        a8=3
        a9=4
        a10=5
        a11=6
        a12=7
        a13=8
        a14=9
        a15=10
        a16=11
        a17=12
        a18=13
        a19=14
        a20=15
        a21=16
        a22=17
        a23=18
        a24=19
        a25=20
        a26=21
        a27=22
        a28=23
        a29=24
        a30=25
        a31=26
        a32=27
        a33=28
        a34=29
        a35=30
        a36=""
        
    
    }
    if(ci==7){
        a1=1
        a2=2
        a3=3
        a4=4
        a5=5
        a6=6
        a7=7
        a8=8
        a9=9
        a10=10
        a11=11
        a12=12
        a13=13
        a14=14
        a15=15
        a16=16
        a17=17
        a18=18
        a19=19
        a20=20
        a21=21
        a22=22
        a23=23
        a24=24
        a25=25
        a26=26
        a27=27
        a28=28
        a29=29
        a30=30
        a31=""
        a32=""
        a33=""
        a34=""
        a35=""
        a36=""
        
        
    
    }


    


}
inicio()
function arr(){

    if(ci<=0){
        ci=7
    }else{
        
    }
     if(dia<=1){
         
       mes-=1
        ci-=1
        dia=30 
    }else{
       dia-=1

    }    
    if(mes<=0){
    mes=12
    ano-=1
    tano-=1
}else{
   
  

}
if(ci==1){
    a1=""
    a2=""
    a3=1
    a4=2
    a5=3
    a6=4
    a7=5
    a8=6
    a9=7
    a10=8
    a11=9
    a12=10
    a13=11
    a14=12
    a15=13
    a16=14
    a17=15
    a18=16
    a19=17
    a20=18
    a21=19
    a22=20
    a23=21
    a24=22
    a25=23
    a26=24
    a27=25
    a28=26
    a29=27
    a30=28
    a31=29
    a32=30
    a33=""
    a34=""
    a35=""
    a36=""

   
    

   
    

}
if(ci==2){
    a1=""
    a2=""
    a3=""
    a4=""
    a5=1
    a6=2
    a7=3
    a8=4
    a9=5
    a10=6
    a11=7
    a12=8
    a13=9
    a14=10
    a15=11
    a16=12
    a17=13
    a18=14
    a19=15
    a20=16
    a21=17
    a22=18
    a23=19
    a24=20
    a25=21
    a26=22
    a27=23
    a28=24
    a29=25
    a30=26
    a31=27
    a32=28
    a33=29
    a34=30
    a35=""
    a36=""
    

    

}
if(ci==3){
    a1=""
    a2=""
    a3=""
    a4=""
    a5=""
    a6=""
    a7=1
    a8=2
    a9=3
    a10=4
    a11=5
    a12=6
    a13=7
    a14=8
    a15=9
    a16=10
    a17=11
    a18=12
    a19=13
    a20=14
    a21=15
    a22=16
    a23=17
    a24=18
    a25=19
    a26=20
    a27=21
    a28=22
    a29=23
    a30=24
    a31=25
    a32=26
    a33=27
    a34=28
    a35=29
    a36=30
    

}
if(ci==4){
    a1=""
    a2=1
    a3=2
    a4=3
    a5=4
    a6=5
    a7=6
    a8=7
    a9=8
    a10=9
    a11=10
    a12=11
    a13=12
    a14=13
    a15=14
    a16=15
    a17=16
    a18=17
    a19=18
    a20=19
    a21=20
    a22=21
    a23=22
    a24=23
    a25=24
    a26=25
    a27=26
    a28=27
    a29=28
    a30=29
    a31=30
    a32=""
    a33=""
    a34=""
    a35=""
    a36=""
    

}
if(ci==5){
    a1=""
    a2=""
    a3=""
    a4=1
    a5=2
    a6=3
    a7=4
    a8=5
    a9=6
    a10=7
    a11=8
    a12=9
    a13=10
    a14=11
    a15=12
    a16=13
    a17=14
    a18=15
    a19=16
    a20=17
    a21=18
    a22=19
    a23=20
    a24=21
    a25=22
    a26=23
    a27=24
    a28=25
    a29=26
    a30=27
    a31=28
    a32=29
    a33=30
    a34=""
    a35=""
    a36=""
    

}
if(ci==6){
    a1=""
    a2=""
    a3=""
    a4=""
    a5=""
    a6=1
    a7=2
    a8=3
    a9=4
    a10=5
    a11=6
    a12=7
    a13=8
    a14=9
    a15=10
    a16=11
    a17=12
    a18=13
    a19=14
    a20=15
    a21=16
    a22=17
    a23=18
    a24=19
    a25=20
    a26=21
    a27=22
    a28=23
    a29=24
    a30=25
    a31=26
    a32=27
    a33=28
    a34=29
    a35=30
    a36=""
    

}
if(ci==7){
    a1=1
    a2=2
    a3=3
    a4=4
    a5=5
    a6=6
    a7=7
    a8=8
    a9=9
    a10=10
    a11=11
    a12=12
    a13=13
    a14=14
    a15=15
    a16=16
    a17=17
    a18=18
    a19=19
    a20=20
    a21=21
    a22=22
    a23=23
    a24=24
    a25=25
    a26=26
    a27=27
    a28=28
    a29=29
    a30=30
    a31=""
    a32=""
    a33=""
    a34=""
    a35=""
    a36=""
    
    

}




tdia-=1

// calendario gregoriano

    

    if(ctex<=1){
        ctex=7
        texto=ctex
    }else{
        ctex-=1
        texto=ctex
    }
    
   
    if(gmes==1){
        if(gdia==1){
           gdia=32
           gmes=12
           tganos-=1
          
        }else{
            gdia-=1
        }
    
    }

    
    if(gmes==2){
        
        
         if(bisext<=1){
           if(gdia<=1){
                gdia=31
                gmes=1
                bisext=4
                //alert(bisext)
            }else{
               gdia-=1
            }
            
        }else{
            if(gdia<=1){
                gdia=31
                gmes=1
                bisext-=1

                 
            }else{
               gdia-=1
               

            }
            

        }
        
         
    
        
    }
    if(gmes==3){
        if(bisext==4){
            if(gdia<=1){
                gdia=29
               gmes=2
              
                           
            }else{
                gdia-=1
            }


        }else{
           if(gdia<=1){
            gdia=28
           gmes=2
          
                       
          }else{
            gdia-=1
        }


        }
        
    
    }
    if(gmes==4){
        if(gdia<=1){
           gdia=31
           gmes=3
        }else{
            gdia-=1
        }
    
    } if(gmes==5){
        if(gdia<=1){
           gdia=30
           gmes=4
        }else{
            gdia-=1
        }
    
    }
    if(gmes==6){
        if(gdia<=1){
           gdia=31
           gmes=5
        }else{
            gdia-=1
        }
    
    }
    if(gmes==7){
        if(gdia<=1){
           gdia=30
           gmes=6
        }else{
            gdia-=1
        }
    
    }
    if(gmes==8){
        if(gdia<=1){
           gdia=31
           gmes=7
        }else{
            gdia-=1
        }
    
    }
    if(gmes==9){
        if(gdia<=1){
           gdia=31
           gmes=8
        }else{
            gdia-=1
        }
    
    }
    if(gmes==10){
        if(gdia<=1){
           gdia=30
           gmes=9
        }else{
            gdia-=1
        }
    
    }
    if(gmes==11){
        if(gdia<=1){
           gdia=31
           gmes=10
        }else{
            gdia-=1
        }
    
    }
    if(gmes==12){
        if(gdia<=1){
           gdia=30
           gmes=11
           gano-=1
        }else{
            gdia-=1
        }
    
    }

 gtdia-=1



}

//---------------------------------------------
function arr1(){
    if(ci>=7){
        ci=0
    }else{
        
    }
     if(dia>=30){
        mes+=1
        ci+=1
         dia=1
        
    }else{
       dia+=1

    }
    
    if(mes>=13){
    mes=1
    ano+=1
    tano+=1
}else{
   
  

}


if(ci==1){
    a1=""
    a2=""
    a3=1
    a4=2
    a5=3
    a6=4
    a7=5
    a8=6
    a9=7
    a10=8
    a11=9
    a12=10
    a13=11
    a14=12
    a15=13
    a16=14
    a17=15
    a18=16
    a19=17
    a20=18
    a21=19
    a22=20
    a23=21
    a24=22
    a25=23
    a26=24
    a27=25
    a28=26
    a29=27
    a30=28
    a31=29
    a32=30
    a33=""
    a34=""
    a35=""
    a36=""

   
    

   
    

}
if(ci==2){
    a1=""
    a2=""
    a3=""
    a4=""
    a5=1
    a6=2
    a7=3
    a8=4
    a9=5
    a10=6
    a11=7
    a12=8
    a13=9
    a14=10
    a15=11
    a16=12
    a17=13
    a18=14
    a19=15
    a20=16
    a21=17
    a22=18
    a23=19
    a24=20
    a25=21
    a26=22
    a27=23
    a28=24
    a29=25
    a30=26
    a31=27
    a32=28
    a33=29
    a34=30
    a35=""
    a36=""
    

    

}
if(ci==3){
    a1=""
    a2=""
    a3=""
    a4=""
    a5=""
    a6=""
    a7=1
    a8=2
    a9=3
    a10=4
    a11=5
    a12=6
    a13=7
    a14=8
    a15=9
    a16=10
    a17=11
    a18=12
    a19=13
    a20=14
    a21=15
    a22=16
    a23=17
    a24=18
    a25=19
    a26=20
    a27=21
    a28=22
    a29=23
    a30=24
    a31=25
    a32=26
    a33=27
    a34=28
    a35=29
    a36=30
    

}
if(ci==4){
    a1=""
    a2=1
    a3=2
    a4=3
    a5=4
    a6=5
    a7=6
    a8=7
    a9=8
    a10=9
    a11=10
    a12=11
    a13=12
    a14=13
    a15=14
    a16=15
    a17=16
    a18=17
    a19=18
    a20=19
    a21=20
    a22=21
    a23=22
    a24=23
    a25=24
    a26=25
    a27=26
    a28=27
    a29=28
    a30=29
    a31=30
    a32=""
    a33=""
    a34=""
    a35=""
    a36=""
    

}
if(ci==5){
    a1=""
    a2=""
    a3=""
    a4=1
    a5=2
    a6=3
    a7=4
    a8=5
    a9=6
    a10=7
    a11=8
    a12=9
    a13=10
    a14=11
    a15=12
    a16=13
    a17=14
    a18=15
    a19=16
    a20=17
    a21=18
    a22=19
    a23=20
    a24=21
    a25=22
    a26=23
    a27=24
    a28=25
    a29=26
    a30=27
    a31=28
    a32=29
    a33=30
    a34=""
    a35=""
    a36=""
    

}
if(ci==6){
    a1=""
    a2=""
    a3=""
    a4=""
    a5=""
    a6=1
    a7=2
    a8=3
    a9=4
    a10=5
    a11=6
    a12=7
    a13=8
    a14=9
    a15=10
    a16=11
    a17=12
    a18=13
    a19=14
    a20=15
    a21=16
    a22=17
    a23=18
    a24=19
    a25=20
    a26=21
    a27=22
    a28=23
    a29=24
    a30=25
    a31=26
    a32=27
    a33=28
    a34=29
    a35=30
    a36=""
    

}
if(ci==7){
    a1=1
    a2=2
    a3=3
    a4=4
    a5=5
    a6=6
    a7=7
    a8=8
    a9=9
    a10=10
    a11=11
    a12=12
    a13=13
    a14=14
    a15=15
    a16=16
    a17=17
    a18=18
    a19=19
    a20=20
    a21=21
    a22=22
    a23=23
    a24=24
    a25=25
    a26=26
    a27=27
    a28=28
    a29=29
    a30=30
    a31=""
    a32=""
    a33=""
    a34=""
    a35=""
    a36=""
    
    

}




tdia+=1

// calendario gregoriano

    

    if(ctex>=7){
        ctex=1
        texto=ctex
    }else{
        ctex+=1
        texto=ctex
    }
    
   
    if(gmes==1){
        if(gdia>=31){
           gdia=0
           gmes=2
          
        }else{
            gdia+=1
        }
    
    }

    
    if(gmes==2){
        
        
        
        if(bisext==4){
            if(gdia==29){
                gdia=0
                gmes=3
                bisext=1
                //alert(bisext)
            }else{
               gdia+=1
            }
            
        }else{
            if(gdia==28){
                gdia=0
                gmes=3
                bisext+=1

                 
            }else{
               gdia+=1
               

            }
            

        }
        
         
    
        
    }
    if(gmes==3){
        if(gdia==31){
           gdia=0
           gmes+=1
        }else{
            gdia+=1
        }
    
    }
    if(gmes==4){
        if(gdia>=30){
           gdia=0
           gmes+=1
        }else{
            gdia+=1
        }
    
    } if(gmes==5){
        if(gdia>=31){
           gdia=0
           gmes+=1
        }else{
            gdia+=1
        }
    
    }
    if(gmes==6){
        if(gdia>=30){
           gdia=0
           gmes+=1
        }else{
            gdia+=1
        }
    
    }
    if(gmes==7){
        if(gdia==31){
           gdia=0
           gmes+=1
        }else{
            gdia+=1
        }
    
    }
    if(gmes==8){
        if(gdia==31){
           gdia=0
           gmes+=1
        }else{
            gdia+=1
        }
    
    }
    if(gmes==9){
        if(gdia==30){
           gdia=0
           gmes+=1
        }else{
            gdia+=1
        }
    
    }
    if(gmes==10){
        if(gdia==31){
           gdia=0
           gmes+=1
        }else{
            gdia+=1
        }
    
    }
    if(gmes==11){
        if(gdia==30){
           gdia=0
           gmes+=1
        }else{
            gdia+=1
        }
    
    }
    if(gmes==12){
        if(gdia==31){
           gdia=
           gmes=1
           gano+=1
           tganos+=1
        }else{
            gdia+=1
        }
    
    }

 gtdia+=1


}
var fal=false

function teste(){
   if(fal==true){
    fal=false
   }else{
    fal=true
   }
   
   
}

  let actv=0
  let met =51

function cont(){

    actv+=1
     let dataToday =  new Date();
     let hrs=dataToday.getHours()
     let mint = dataToday.getMinutes();
       

     if(hrs==6){
        if(mint==0){
              met+=1
              dia+=1
              if(dia>30){
                dia=1
              }
           
            if(met>=60){
                met=1
            }

        }
           if(actv>=55){

              actv=0

           }
        }
         
}
 

const relogio = setInterval(function time() {
    
    let dataToday =  new Date();
    let hr = dataToday.getHours();
    let mi = dataToday.getMinutes();
   
    document.getElementById('d1').textContent=a1;
    if(dia==a1){
        document.getElementById('d1').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d1').style.backgroundColor="chartreuse"
    }
    document.getElementById('d2').textContent=a2;
    if(dia==a2){
        document.getElementById('d2').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d2').style.backgroundColor="chartreuse"
    }
    document.getElementById('d3').textContent=a3;
    if(dia==a3){
        document.getElementById('d3').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d3').style.backgroundColor="chartreuse"
    }
    document.getElementById( 'd4').textContent=a4;
    if(dia==a4){
        document.getElementById('d4').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d4').style.backgroundColor="chartreuse"
    }
    document.getElementById('d5').textContent=a5;
    if(dia==a5){
        document.getElementById('d5').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d5').style.backgroundColor="chartreuse"
    }
    document.getElementById( 'd6').textContent=a6;
    if(dia==a6){
        document.getElementById('d6').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d6').style.backgroundColor="chartreuse"
    }
    document.getElementById('d7').textContent=a7;
    if(dia==a7){
        document.getElementById('d7').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d7').style.backgroundColor="chartreuse"
    }
    document.getElementById('d8').textContent=a8;
    if(dia==a8){
        document.getElementById('d8').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d8').style.backgroundColor="chartreuse"
    }
    document.getElementById('d9').textContent=a9;
    if(dia==a9){
        document.getElementById('d9').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d9').style.backgroundColor="chartreuse"
    }
    document.getElementById('d10').textContent=a10;
    if(dia==a10){
        document.getElementById('d10').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d10').style.backgroundColor="chartreuse"
    }
    document.getElementById('d11').textContent=a11;
    if(dia==a11){
        document.getElementById('d11').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d11').style.backgroundColor="chartreuse"
    }
    document.getElementById('d12').textContent=a12;
    if(dia==a12){
        document.getElementById('d12').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d12').style.backgroundColor="chartreuse"
    }
    document.getElementById('d13').textContent=a13;
    if(dia==a13){
        document.getElementById('d13').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d13').style.backgroundColor="chartreuse"
    }
    document.getElementById('d14').textContent=a14;
    if(dia==a14){
        document.getElementById('d14').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d14').style.backgroundColor="chartreuse"
    }
    document.getElementById('d15').textContent=a15;
    if(dia==a15){
        document.getElementById('d15').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d15').style.backgroundColor="chartreuse"
    }
    document.getElementById('d16').textContent=a16;
    if(dia==a16){
        document.getElementById('d16').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d16').style.backgroundColor="chartreuse"
    }
    document.getElementById('d17').textContent=a17;
    if(dia==a17){
        document.getElementById('d17').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d17').style.backgroundColor="chartreuse"
    }
    document.getElementById('d18').textContent=a18;
    if(dia==a18){
        document.getElementById('d18').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d18').style.backgroundColor="chartreuse"
    }
    document.getElementById('d19').textContent=a19;
    if(dia==a19){
        document.getElementById('d19').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d19').style.backgroundColor="chartreuse"
    }
    document.getElementById('d20').textContent=a20;
    if(dia==a20){
        document.getElementById('d20').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d20').style.backgroundColor="chartreuse"
    }
    document.getElementById('d21').textContent=a21;
    if(dia==a21){
        document.getElementById('d21').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d21').style.backgroundColor="chartreuse"
    }

    document.getElementById('d22').textContent=a22;
    if(dia==a22){
        document.getElementById('d22').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d22').style.backgroundColor="chartreuse"
    }
    document.getElementById('d23').textContent=a23;
    if(dia==a23){
        document.getElementById('d23').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d23').style.backgroundColor="chartreuse"
    }

    document.getElementById('d24').textContent=a24;
    if(dia==a24){
        document.getElementById('d24').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d24').style.backgroundColor="chartreuse"
    }

    document.getElementById('d25').textContent=a25;
    if(dia==a25){
        document.getElementById('d25').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d25').style.backgroundColor="chartreuse"
    }

    document.getElementById('d26').textContent=a26;
    if(dia==a26){
        document.getElementById('d26').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d26').style.backgroundColor="chartreuse"
    }

    document.getElementById('d27').textContent=a27;
    if(dia==a27){
        document.getElementById('d27').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d27').style.backgroundColor="chartreuse"
    }
    document.getElementById('d28').textContent=a28;
    if(dia==a28){
        document.getElementById('d28').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d28').style.backgroundColor="chartreuse"
    }
    document.getElementById('d29').textContent=a29;
    if(dia==a29){
        document.getElementById('d29').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d29').style.backgroundColor="chartreuse"
    }

    document.getElementById('d30').textContent=a30;
    if(dia==a30){
        document.getElementById('d30').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d30').style.backgroundColor="chartreuse"
    }

    document.getElementById('d31').textContent=a31;
    if(dia==a31){
        document.getElementById('d31').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d31').style.backgroundColor="chartreuse"
    }

    document.getElementById('d32').textContent=a32;
    if(dia==a32){
        document.getElementById('d32').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d32').style.backgroundColor="chartreuse"
    }

    document.getElementById('d33').textContent=a33;
    if(dia==a33){
        document.getElementById('d33').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d33').style.backgroundColor="chartreuse"
    }

    document.getElementById('d34').textContent=a34;
    if(dia==a34){
        document.getElementById('d34').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d34').style.backgroundColor="chartreuse"
    }

    document.getElementById('d35').textContent=a35;
    if(dia==a35){
        document.getElementById('d35').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d35').style.backgroundColor="chartreuse"
    }

    document.getElementById('d36').textContent=a36;
    if(dia==a36){
        document.getElementById('d36').style.backgroundColor="#00ffff"
    }else{
        document.getElementById('d36').style.backgroundColor="chartreuse"
    }
    
   
   var solit=document.getElementById('solit').value
   cont()

   if(gano==solit){

    
   }else{
    
    if(fal==true){
     arr1()

   }



   }
   
     
   
    
     
    //dia.textContent = 14;
  

    nova= hr;
    minuto.textContent = mi;
    var novah = hora
    hora.textContent= array[nova]
  loop() 
    
})
/*
*/


function salvar(){



var taa=document.getElementById('ano')
  bd.collection("").doc("")
  
  .update({
    id: 1,
    ano: ano,
    mes: mes,
    dia:  dia,
   atual: ci,
   totd: tdia,
   totalano: tano,
    gtxetd: texto,
    grdia: gdia,
     grmes:gmes,
    grano: gano,
    grtdia:gtdia,
    bisexto:bisext,
    totalgreAno:tganos
   
   
    
    

  })
}





let time= setInterval(() => {

    // arr1()
   

}, 50);

function salva(){

   salvar()

}
console.log(nova)
