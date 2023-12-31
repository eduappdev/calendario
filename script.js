const firebaseConfig = {
    apiKey: "AIzaSyDdlhYPftbkZ39_KOPBw_kAJIeqGM7buwg",
    authDomain: "calendario-biblico-7271e.firebaseapp.com",
    databaseURL: "https://calendario-biblico-7271e-default-rtdb.firebaseio.com",
    projectId: "calendario-biblico-7271e",
    storageBucket: "calendario-biblico-7271e.appspot.com",
    messagingSenderId: "824119689589",
    appId: "1:824119689589:web:3453a326d16a94c7e4533c",
    measurementId: "G-RDDHP5DXTQ"
  };
  firebase.initializeApp(firebaseConfig)


const bd = firebase.firestore();


let arrbd=[

       
    {
        a: 1,
        b: 1,
        c: -3923,
        d: 0,
        e: 0,
        f: 0,
        g: 1,
        h: 1,  // 0 inicio
        i: 1,
        j: -3923,
        l: 0,
        m: 1,
        n: 0,
        o: 3,
        p: 0,

      },//0
      {
        a: 14,
        b: 1,
        c: -1403,
        d: 907213,
        e: 2520,
        f: 129602,
        g: 1,
        h: 25,   // 1  primeira pascoa
        i: 10,
        j: -1440,
        l: 907213,
        m: 1,
        n: 2483,
        o: 2,
        p: 129602,

      },//1
      {
        a: 14,
        b:  1,
        c: -1363,
        d: 921613,
        e: 2560,
        f: 131659,
        g: 5,
        h: 29,   // 2 saida do deserto
        i: 3,
        j: -1400,
        l: 921613,
        m: 1,
        n: 2523,
        o: 3,
        p: 131659,

      },//2
      {
        a: 1,
        b: 1,
        c: -1332,
        d: 932760,
        e: 2591,
        f: 133251,
        g: 6,
        h: 5,   // 3 innicio dos juizes
        i: 10,
        j: -1370,
        l: 932760,
        m: 3,
        n: 2553,
        o: 6,
        p: 133251,

      },//3
      {
        a: 1,
        b: 1,
        c: -1008,
        d: 1049400,
        e: 2915,
        f: 149914,
        g: 2,
        h: 7,   // 4 innicio dos reis reinado se saul
        i: 2,
        j: -1050,
        l: 1049400,
        m: 2,
        n: 2873,
        o: 5,
        p: 149914,

      },//4
      {
        a: 1,
        b: 1,
        c: -967,
        d: 1064160,
        e: 2956,
        f: 152023,
        g: 4,
        h: 7,   // 5  reinado de Davi
        i: 7,
        j: -1010,
        l: 1064160,
        m: 3,
        n: 2913,
        o: 2,
        p: 152023,

      },//5
      {
        a: 24,
        b: 1,
        c: -927,
        d: 1078583,
        e: 2996,
        f: 154083,
        g: 1,
        h: 1,   // 6  reinado de Salomão
        i: 1,
        j: -970,
        l: 1078583,
        m: 2,
        n: 2953,
        o: 5,
        p: 154083,

      },//6
      {
        a: 1,
        b: 1,
        c: -887,
        d: 1092960,
        e: 3036,
        f: 156137,
        g: 5,
        h: 13,   // 7  reinado de reino dividido
        i: 5,
        j: -931,
        l: 1092960,
        m: 4,
        n: 2992,
        o: 3,
        p: 156137,

      },//7
      {
        a: 1,
        b: 1,
        c: -538,
        d: 1218600,
        e: 3385,
        f: 174085,
        g: 7,
        h: 7,   // 8  destruição de jerusalém
        i: 5,
        j: -587,
        l: 1218600,
        m: 4,
        n: 3336,
        o: 7,
        p: 174085,

      },//8
      {
        a: 1,
        b: 1,
        c: -406,
        d: 1266120,
        e: 3517,
        f: 180874,
        g: 2,
        h: 13,   // 9 decreto reconstrução de jerusalém
        i: 6,
        j: -457,
        l: 1266120,
        m: 2,
        n: 3466,
        o: 4,
        p: 180874,

      },//9
      {
        a: 16,
        b: 9,
        c: 46,
        d: 1429095,
        e: 3969,
        f: 204156,
        g: 2,
        h: 26,   // 10 nascimento do messias
        i: 8,
        j: -11,
        l: 1429095,
        m: 4,
        n: 3912,
        o: 5,
        p: 204156,

      },//10
      {
        a: 8,
        b: 6,
        c: 78,
        d: 1440517,
        e: 4001,
        f: 205788,
        g: 5,
        h: 3,   // 11 crucificação
        i: 12,
        j: 20,
        l: 1440517,
        m: 3,
        n: 3943,
        o: 3,
        p: 205788,

      },//11
      {
        a: 26,
        b: 11,
        c: 128,
        d: 1458685,
        e: 4051,
        f: 208383,
        g: 1,
        h: 30,   // 12 2ºdestruição de jerusalém
        i: 8,
        j: 70,
        l: 1458685,
        m: 1,
        n: 3993,
        o: 6,
        p: 208383,

      },//12
      {
        a: 28,
        b: 10,
        c: 934,
        d: 1748817,
        e: 4857,
        f: 249831,
        g: 5,
        h: 1,   // 13 cupula da rocha
        i: 1,
        j: 865,
        l: 1748817,
        m: 3,
        n: 4788,
        o: 2,
        p: 249831,

      },//13
      {
        a: 27,
        b: 12,
        c: 2033,
        d: 2144516,
        e: 5956,
        f: 306359,
        g: 7,
        h: 14,   // 14 Israel volta a ser nação
        i: 5,
        j: 1948,
        l: 2144516,
        m: 3,
        n: 5871,
        o: 5,
        p: 306359,

      },//14
      {
        a: 12,
        b: 5,
        c: 2104,
        d: 2169851,
        e: 6027,
        f: 309978,
        g: 5,
        h: 24,   // 15 sinal no ceu Pocalipse 12
        i: 9,
        j: 2017,
        l: 2169851,
        m: 4,
        n: 5940,
        o: 7,
        p: 309978,

      },//15
      {
        a: 24,
        b: 4,
        c: 2110,
        d: 2171993,
        e: 6033,
        f: 310284,
        g: 6,
        h: 5,   // 16 atual
        i: 8,
        j: 2023,
        l: 2171993,
        m: 2,
        n: 5946,
        o: 7,
        p: 310284,

      },//16
]
let select=document.querySelector('#selec');
    
 var cdd=16    
function loop1() {
    let optionsvalue= select.options[select.selectedIndex];
    let value = optionsvalue.value;
cdd=value
 dia=arrbd[cdd].a;
 mes=arrbd[cdd].b;
 ano=arrbd[cdd].c;
 tdia=arrbd[cdd].d;
 tano=arrbd[cdd].e;
 semana=arrbd[cdd].f;
 posic=arrbd[cdd].g

// dados gregorianos
 gdia=arrbd[cdd].h;
 gmes=arrbd[cdd].i;
 gano=arrbd[cdd].j;
 gtdia=arrbd[cdd].l;
 bisext=arrbd[cdd].m;
 tganos=arrbd[cdd].n;
 contposi=arrbd[cdd].o
 tsemanag=arrbd[cdd].p

}    


//dados biblico
var dia=arrbd[cdd].a;
var mes=arrbd[cdd].b;
var ano=arrbd[cdd].c;
var tdia=arrbd[cdd].d;
var tano=arrbd[cdd].e;
var semana=arrbd[cdd].f;
var posic=arrbd[cdd].g

// dados gregorianos
var gdia=arrbd[cdd].h;
var gmes=arrbd[cdd].i;
var gano=arrbd[cdd].j;
var gtdia=arrbd[cdd].l;
var bisext=arrbd[cdd].m;
var tganos=arrbd[cdd].n;
var contposi=arrbd[cdd].o
var tsemanag=arrbd[cdd].p

//variaves colocação de dias
var a1="";
var a2="";
var a3=""; 
var a4="";
var a5=""; 
var a6=""; 
var a7="";
var a8=""; 
var a9="";
var a10=""; 
var a11=""; 
var a12=""; 
var a13=""; 
var a14="";
var a15="";
var a16="";
var a17="";
var a18="";
var a19="";  
var a20=""; 
var a21=""; 
var a22=""; 
var a23="";
var a24=""; 
var a25=""; 
var a26="";
var a27="";
var a28=""; 
var a29="";
var a30="";
var a31="";
var a32="";
var a33="";
var a34="" ;
var a35="";
var a36="";

var arrtex=[
    '',
    'Dom',
    'Seg',
    'Ter',
    'Qua',
    'Qui',
    'Sext',
    'Sab',
    
    
];
//var inicio
var ci =posic;
var ctex=contposi;

function adicionar(){
 
    arr1()
};
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


    


};
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
        semana+=1
        tsemanag+=1
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


};
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
        tsemanag-=1
        semana-=1
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
var arrtexto=arrtex[contposi]
function loop(){

arrtexto=arrtex[ctex]
};
var array = [
    '2º vigilia',//0 hora
    '2º vigilia',//1 hora
    '3º vigilia',//2 hora
    '3º vigilia',//3 hora
    '3º vigilia',//4 hora
    '3º vigilia',//5 hora
    '3º vigilia',//6 hora
      ' 1º',  //7 hora     
      ' 2º',  //8 hora
      ' 3º',  //9 hora
      ' 4º',  //10 hora
      ' 5º',  //11 hora
      ' 6º',  //12 hora
      ' 7º',  //13 hora
      ' 8º',  //14 hora
      ' 9º',  //15 hora
      ' 10º', //16 hora
      ' 11º', //17 hora
     '1º vigilia',  //18 hora
     '1º vigilia', //19 hora
     '1º vigilia', //20 hora
     '1º vigilia', //21 hora
     '2º vigilia', //22 horas
     '2º vigilia', //23

];
function deletar(){
    arr()
}

var busc="false"
function salvar1(){
    if(busc=="true"){
        busc="false"
    }else{
        busc="true"
    }
}
//controlador de dados
const relogio = setInterval(function time() {
    
    let dataToday =  new Date();
    let hr = dataToday.getHours();
    let mi = dataToday.getMinutes();
     //hora
    document.getElementById('hora').textContent=array[hr]
    document.getElementById('minuto').textContent=mi
    //dias e meses
    document.getElementById('mtx').textContent=pedras[mes]
    document.getElementById('texdia').textContent=dia
    document.getElementById('texmes').textContent=mes
    document.getElementById('texano').textContent=ano
    document.getElementById('textodia').textContent=tdia
    document.getElementById('textoano').textContent=tano
    document.getElementById('textosema').textContent=semana
    //dias gregoriano
    document.getElementById('textosdiag').textContent=arrtexto;
    document.getElementById('texdiag').textContent=gdia
    document.getElementById('texmesg').textContent=gmes
    document.getElementById('texanog').textContent=gano
    document.getElementById('textodiag').textContent=gtdia
    document.getElementById('textoanog').textContent=tganos
    document.getElementById('textosemag').textContent=tsemanag
    
   
    document.getElementById('d1').textContent=a1;
    if(dia==a1){
        document.getElementById('d1').style.backgroundColor="  rgb(245, 230, 148)"
    }else{
        document.getElementById('d1').style.backgroundColor="yellow"
    }
    document.getElementById('d2').textContent=a2;
    if(dia==a2){
        document.getElementById('d2').style.backgroundColor="gray"
        document.getElementById('d2').style.color="white"
    }else{
        document.getElementById('d2').style.backgroundColor="chartreuse"
        document.getElementById('d2').style.color="black"
    }
    document.getElementById('d3').textContent=a3;
    if(dia==a3){
        document.getElementById('d3').style.backgroundColor="gray"
        document.getElementById('d3').style.color="white"
    }else{
        document.getElementById('d3').style.backgroundColor="chartreuse"
        document.getElementById('d3').style.color="black"
    }
    document.getElementById( 'd4').textContent=a4;
    if(dia==a4){
        document.getElementById('d4').style.backgroundColor="gray"
        document.getElementById('d4').style.color="white"
    }else{
        document.getElementById('d4').style.backgroundColor="chartreuse"
        document.getElementById('d4').style.color="black"
    }
    document.getElementById('d5').textContent=a5;
    if(dia==a5){
        document.getElementById('d5').style.backgroundColor="gray"
        document.getElementById('d5').style.color="white"
    }else{
        document.getElementById('d5').style.backgroundColor="chartreuse"
        document.getElementById('d5').style.color="black"
    }
    document.getElementById( 'd6').textContent=a6;
    if(dia==a6){
        document.getElementById('d6').style.backgroundColor="gray"
        document.getElementById('d6').style.color="white"
    }else{
        document.getElementById('d6').style.backgroundColor="chartreuse"
        document.getElementById('d6').style.color="black"
    }
    document.getElementById('d7').textContent=a7;
    if(dia==a7){
        document.getElementById('d7').style.backgroundColor=" red"

    }else{
        document.getElementById('d7').style.backgroundColor=" rgb(252, 115, 115)"
    }
    document.getElementById('d8').textContent=a8;
    if(dia==a8){
        document.getElementById('d8').style.backgroundColor=" rgb(245, 230, 148)"
    }else{
        document.getElementById('d8').style.backgroundColor="yellow"
    }
    document.getElementById('d9').textContent=a9;
    if(dia==a9){
        document.getElementById('d9').style.backgroundColor="gray"
        document.getElementById('d9').style.color="white"
    }else{
        document.getElementById('d9').style.backgroundColor="chartreuse"
        document.getElementById('d9').style.color="black"
    }
    document.getElementById('d10').textContent=a10;
    if(dia==a10){
        document.getElementById('d10').style.backgroundColor="gray"
        document.getElementById('d10').style.color="white"
    }else{
        document.getElementById('d10').style.backgroundColor="chartreuse"
        document.getElementById('d10').style.color="black"
    }
    document.getElementById('d11').textContent=a11;
    if(dia==a11){
        document.getElementById('d11').style.backgroundColor="gray"
        document.getElementById('d11').style.color="white"
    }else{
        document.getElementById('d11').style.backgroundColor="chartreuse"
        document.getElementById('d11').style.color="black"
    }
    document.getElementById('d12').textContent=a12;
    if(dia==a12){
        document.getElementById('d12').style.backgroundColor="gray"
        document.getElementById('d12').style.color="white"
    }else{
        document.getElementById('d12').style.backgroundColor="chartreuse"
        document.getElementById('d12').style.color="black"
    }
    document.getElementById('d13').textContent=a13;
    if(dia==a13){
        document.getElementById('d13').style.backgroundColor="gray"
        document.getElementById('d13').style.color="white"
    }else{
        document.getElementById('d13').style.backgroundColor="chartreuse"
        document.getElementById('d13').style.color="black"
    }
    document.getElementById('d14').textContent=a14;
    if(dia==a14){
        document.getElementById('d14').style.backgroundColor="red"
    }else{
        document.getElementById('d14').style.backgroundColor=" rgb(252, 115, 115)"
    }
    document.getElementById('d15').textContent=a15;
    if(dia==a15){
        document.getElementById('d15').style.backgroundColor=" rgb(245, 230, 148)"
    }else{
        document.getElementById('d15').style.backgroundColor=" yellow"
    }
    document.getElementById('d16').textContent=a16;
    if(dia==a16){
        document.getElementById('d16').style.backgroundColor="gray"
        document.getElementById('d16').style.color="white"
    }else{
        document.getElementById('d16').style.backgroundColor="chartreuse"
        document.getElementById('d16').style.color="black"
    }
    document.getElementById('d17').textContent=a17;
    if(dia==a17){
        document.getElementById('d17').style.backgroundColor="gray"
        document.getElementById('d17').style.color="white"
    }else{
        document.getElementById('d17').style.backgroundColor="chartreuse"
        document.getElementById('d17').style.color="black"
    }
    document.getElementById('d18').textContent=a18;
    if(dia==a18){
        document.getElementById('d18').style.backgroundColor="gray"
        document.getElementById('d18').style.color="white"
    }else{
        document.getElementById('d18').style.backgroundColor="chartreuse"
        document.getElementById('d18').style.color="black"
    }
    document.getElementById('d19').textContent=a19;
    if(dia==a19){
        document.getElementById('d19').style.backgroundColor="gray"
        document.getElementById('d19').style.color="white"
    }else{
        document.getElementById('d19').style.backgroundColor="chartreuse"
        document.getElementById('d19').style.color="black"
    }
    document.getElementById('d20').textContent=a20;
    if(dia==a20){
        document.getElementById('d20').style.backgroundColor="gray"
        document.getElementById('d20').style.color="white"
    }else{
        document.getElementById('d20').style.backgroundColor="chartreuse"
        document.getElementById('d20').style.color="black"
    }
    document.getElementById('d21').textContent=a21;
    if(dia==a21){
        document.getElementById('d21').style.backgroundColor="red"
    }else{
        document.getElementById('d21').style.backgroundColor=" rgb(252, 115, 115)"
    }

    document.getElementById('d22').textContent=a22;
    if(dia==a22){
        document.getElementById('d22').style.backgroundColor=" rgb(245, 230, 148)"
    }else{
        document.getElementById('d22').style.backgroundColor="yellow"
    }
    document.getElementById('d23').textContent=a23;
    if(dia==a23){
        document.getElementById('d23').style.backgroundColor="gray"
        document.getElementById('d23').style.color="white"
    }else{
        document.getElementById('d23').style.backgroundColor="chartreuse"
        document.getElementById('d23').style.color="black"
    }

    document.getElementById('d24').textContent=a24;
    if(dia==a24){
        document.getElementById('d24').style.backgroundColor="gray"
        document.getElementById('d24').style.color="white"
    }else{
        document.getElementById('d24').style.backgroundColor="chartreuse"
        document.getElementById('d24').style.color="black"
    }

    document.getElementById('d25').textContent=a25;
    if(dia==a25){
        document.getElementById('d25').style.backgroundColor="gray"
        document.getElementById('d25').style.color="white"
    }else{
        document.getElementById('d25').style.backgroundColor="chartreuse"
        document.getElementById('d25').style.color="black"
    }

    document.getElementById('d26').textContent=a26;
    if(dia==a26){
        document.getElementById('d26').style.backgroundColor="gray"
        document.getElementById('d26').style.color="white"
    }else{
        document.getElementById('d26').style.backgroundColor="chartreuse"
        document.getElementById('d26').style.color="black"
    }

    document.getElementById('d27').textContent=a27;
    if(dia==a27){
        document.getElementById('d27').style.backgroundColor="gray"
        document.getElementById('d27').style.color="white"
    }else{
        document.getElementById('d27').style.backgroundColor="chartreuse"
        document.getElementById('d27').style.color="black"
    }
    document.getElementById('d28').textContent=a28;
    if(dia==a28){
        document.getElementById('d28').style.backgroundColor="red"
    }else{
        document.getElementById('d28').style.backgroundColor=" rgb(252, 115, 115)"
    }
    document.getElementById('d29').textContent=a29;
    if(dia==a29){
        document.getElementById('d29').style.backgroundColor=" rgb(245, 230, 148)"
    }else{
        document.getElementById('d29').style.backgroundColor="yellow"
    }

    document.getElementById('d30').textContent=a30;
    if(dia==a30){
        document.getElementById('d30').style.backgroundColor="gray"
        document.getElementById('d30').style.color="white"
    }else{
        document.getElementById('d30').style.backgroundColor="chartreuse"
        document.getElementById('d30').style.color="black"
    }

    document.getElementById('d31').textContent=a31;
    if(dia==a31){
        document.getElementById('d31').style.backgroundColor="gray"
        document.getElementById('d31').style.color="white"
    }else{
        document.getElementById('d31').style.backgroundColor="chartreuse"
        document.getElementById('d31').style.color="black"
    }

    document.getElementById('d32').textContent=a32;
    if(dia==a32){
        document.getElementById('d32').style.backgroundColor="gray"
        document.getElementById('d32').style.color="white"
    }else{
        document.getElementById('d32').style.backgroundColor="chartreuse"
        document.getElementById('d32').style.color="black"
    }

    document.getElementById('d33').textContent=a33;
    if(dia==a33){
        document.getElementById('d33').style.backgroundColor="gray"
        document.getElementById('d33').style.color="white"
    }else{
        document.getElementById('d33').style.backgroundColor="chartreuse"
        document.getElementById('d33').style.color="black"
    }

    document.getElementById('d34').textContent=a34;
    if(dia==a34){
        document.getElementById('d34').style.backgroundColor="gray"
        document.getElementById('d34').style.color="white"
    }else{
        document.getElementById('d34').style.backgroundColor="chartreuse"
        document.getElementById('d34').style.color="black"
    }

    document.getElementById('d35').textContent=a35;
    if(dia==a35){
        document.getElementById('d35').style.backgroundColor="red"
    }else{
        document.getElementById('d35').style.backgroundColor=" rgb(252, 115, 115)"
    }

    document.getElementById('d36').textContent=a36;
    if(dia==a36){
        document.getElementById('d36').style.backgroundColor=" rgb(245, 230, 148)"
    }else{
        document.getElementById('d36').style.backgroundColor="yellow"
    }
    
        
    
   if(busc=="true"){
    let bu=document.getElementById('solit').value
    
    if(gano==bu){
        busc="false" 

    }else{
       
     if(cdd==16){
       arr()
   }else{
    alert("Selecione o campo a cima no Atual para prosseguir.")
    busc="false" 
   }
       
    }
    

   }
    
   
    
     loop()
    //dia.textContent = 14;
  
    
    
  
    
})
inicio()


function salvar(){
    
  

  bd.collection("ano000").doc("3")
  
  .update({
        a: document.getElementById('texdia').textContent,
        b:  document.getElementById('texmes').textContent,
        c: document.getElementById('texano').textContent,
        d:  document.getElementById('textodia').textContent,
        e: document.getElementById('textoano').textContent,
        f:  document.getElementById('textosema').textContent,
        g: ci,
        h: document.getElementById('texdiag').textContent,
        i: document.getElementById('texmesg').textContent,
        j: document.getElementById('texanog').textContent,
        l:  document.getElementById('textodiag').textContent,
        m:  bisext,
        n: document.getElementById('textoanog').textContent,
        o: arrtexto,
        p: document.getElementById('textosemag').textContent,
   
    

  })
}