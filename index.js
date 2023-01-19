var botonEncriptador=document.querySelector(".btn_encriptar");
var botonDesencriptador=document.querySelector(".btn_desencriptar");
var divMuñeco= document.querySelector(".caja_imagen");
var divtitle= document.querySelector(".caja_title_copiar");
var divparrafo= document.querySelector(".caja_parrafo_copiar");
var txt_resultado= document.querySelector(".txt_resultado");
var divBotonCopiar=document.querySelector('.caja_btn_copiar')



botonEncriptador.onclick=encriptar;
botonDesencriptador.onclick=desencriptar;




function encriptar(){
    ocultarMuñeco();
    txt_resultado.textContent=encriptarTXT(recuperarTexto());
    
}

function desencriptar(){
    ocultarMuñeco();
    txt_resultado.textContent=desencriptarTXT(recuperarTexto());
}

function recuperarTexto(){
    var area =document.querySelector(".area");
    return area.value;
}

function ocultarMuñeco(){

    divMuñeco.classList.add("ocultar")
    divtitle.classList.add("ocultar")
    divparrafo.classList.add("ocultar")
    divBotonCopiar.classList.remove('ocultarbtn')
    

}

const txt_ingresado= document.querySelector('.caja_resultado');

document.querySelector('.btn_copiar').addEventListener('click',()=>{
    copyToClipBoard(txt_ingresado);
    copy_en_texarea();

})
function copyToClipBoard(txt_ingresado){
    const inputOculto = document.createElement('input');
    inputOculto.setAttribute('value', txt_ingresado.innerText);
    document.body.appendChild(inputOculto);
    document.execCommand('copy');
    document.body.removeChild(inputOculto);
    txt_return =inputOculto.value;
    return txt_return;
    
    

}

//.............

txtArea=document.querySelector('.area')

function copy_en_texarea(){

txtArea.value=txt_return;
}
//.........


function encriptarTXT(txt) {
    var texto=txt;
    var textoEncript="";
    for (var i =0;i<texto.length; i++) {
        if (texto[i]=="a"){
            textoEncript=textoEncript+"ai"
        }
        else if (texto[i]=="e"){
            textoEncript=textoEncript+"enter"
        }
        else if (texto[i]=="i"){
            textoEncript=textoEncript+"imes"
        }
        else if (texto[i]=="o"){
            textoEncript=textoEncript+"ober"
        }
        else if (texto[i]=="u"){
            textoEncript=textoEncript+"ufat"
        }
        else{
            textoEncript=textoEncript+texto[i];
        }
    }
    return textoEncript;
}

function desencriptarTXT(txt) {
    var texto=txt;
    var textoEncript="";
    for (var i =0;i<texto.length; i++) {
        if (texto[i]=="a"){
            textoEncript=textoEncript+"a"
            i=i+1;
        }
        else if (texto[i]=="e"){
            textoEncript=textoEncript+"e"
            i=i+4;
        }
        else if (texto[i]=="i"){
            textoEncript=textoEncript+"i"
            i=i+3;
        }
        else if (texto[i]=="o"){
            textoEncript=textoEncript+"o"
            i=i+3;
        }
        else if (texto[i]=="u"){
            textoEncript=textoEncript+"u"
            i=i+3;
        }
        else{
            textoEncript=textoEncript+texto[i];
            i=i++;
        }
    }
    return textoEncript;
}
