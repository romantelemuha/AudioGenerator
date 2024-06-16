
let input=document.querySelector('.convert');
let onConvert=document.querySelector('.activateImg');
let mikro=document.querySelector('.mikroImg');
let yourSpeach=document.querySelector('.yourSpeach');

onConvert.addEventListener('click', function(){
    let text=input.value;
    let speachSyntez=new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speachSyntez);
})

mikro.addEventListener('click', function(){
    mikro.classList.toggle('active');

    let userSpeach=new (window.SpeechRecognition || window.webkitSpeechRecognition);
    userSpeach.lang='uk-UA';
    userSpeach.continuous=true;
    userSpeach.interimResults=true;

    userSpeach.addEventListener('result', function(evt){
        let userWords=evt.results[0][0].transcript;
        yourSpeach.textContent=userWords;
    })
    userSpeach.addEventListener('error', function(err){
       console.log(err);
    })

    if(mikro.classList.contains('active')){
        userSpeach.start();
        mikro.classList.add('mikroActive');
    }else{
        userSpeach.stop();
        mikro.classList.remove('mikroActive');
    }
});