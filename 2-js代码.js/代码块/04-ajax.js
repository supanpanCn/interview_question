let xhr = null
if(window.XMLHttpRequest){
    xhr = new XMLHttpRequest()
}else{
    xhr = new ActiveXObject('Microsoft.XMLHTTP')
}
xhr.open('get','url',true)
xhr.send()
xhr.onreadystatechange=function(){
    if(xhr.readyState==4){
        if(xhr.status==200){
            console.log(xhr.responseText)
        }
    }
}