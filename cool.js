var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function custardtart(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();   
}

recognition.onresult=function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;

    if(Content=="take my selfie"){
        console.log(Content);
        speak(); 
    }
    
}


function speak(){
    var synth=window.speechSynthesis;
    Webcam.attach(camera);
    speak_data="Taking Your selfie in t-minus 5.  4.  3.  2. 1. ggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggo";
    var utter_this= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    setTimeout(function(){
        take_selfie();
        img_id="selfie1";
        speak_data="Taking Your selfie in t-minus 5.  4. 3.  2. 1.  ggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggo";
        var utter_this= new SpeechSynthesisUtterance(speak_data);
        synth.speak(utter_this);
      
    },5000);
    setTimeout(function(){
        take_selfie();
        img_id="selfie2";
        speak_data="Taking Your selfie in t-minus 5.  4. 3.  2. 1.  ggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggo";
        var utter_this= new SpeechSynthesisUtterance(speak_data);
        synth.speak(utter_this);
      
    },15000);setTimeout(function(){
        take_selfie();
        img_id="selfie3";
        speak_data="Taking Your selfie in t-minus 5.  4. 3.  2. 1.  ggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggoggo";
        
    },20000);
}

Webcam.set({
height:250,
width:350,
image_format:"png",
png_quality:90
});

camera=document.getElementById("camera");
 
function take_selfie(){
    console.log(img_id)
    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            
            document.getElementById("result1").innerHTML="<img id='selfie1' src='"+data_uri+"'>"
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML="<img id='selfie2' src='"+data_uri+"'>"
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML="<img id='selfie3' src='"+data_uri+"'>"
        }
    })
}

