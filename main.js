var css = "\n*{margin:0;padding:0;box-sizing:border-box}#alertBox{width:80%;max-width:500px;position:fixed;left:50%;top:50%;transform:translate(-50%,-50%) scale(0);border-radius:10px;transition:transform .5s linear;z-index:1000;overflow:hidden}#alertBox-wrapper{width:100%;height:100%;padding:1em 2em;display:flex;flex-direction:column;align-items:center;justify-content:space-between}#alertBox-title{font-weight:bold;font-size:1.2em;text-decoration:underline;margin-bottom:1em}#alertBox-message{margin-bottom:1em}#alertBox-button{padding:.5em 2em;background-color:#fff;align-self:flex-end;border:0;outline:0;border-radius:5px;box-shadow:2px 2px 4px #00000088;font-weight:bold}#show{position:fixed;bottom:50px;left:50%;transform:translateX(-50%)}.info{background:url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Info_Simple.svg/1200px-Info_Simple.svg.png');background-size:50px 50px;background-repeat:no-repeat;background-position:10px 10px}.success{background:url('https://img.pngio.com/download-free-success-png-image-icon-favicon-freepngimg-free-png-success-1200_1200.png');background-size:50px 50px;background-repeat:no-repeat;background-position:10px 10px}.warning{background:url('https://cdn2.iconfinder.com/data/icons/color-svg-vector-icons-2/512/warning_alert_attention_search-512.png');background-size:50px 50px;background-repeat:no-repeat;background-position:10px 10px}.danger{background:url('https://im0-tub-ru.yandex.net/i?id=ff0e3b22648284b13ef9e45223fa827a-l&n=13');background-size:50px 40px;background-repeat:no-repeat;background-position:10px 10px}\n",

head = document.head || document.getElementsByTagName('head')[0],

 style = document.createElement('style');

head.appendChild(style);

style.type = 'text/css';

if (style.styleSheet)
{
 style.styleSheet.cssText = css;
}
else
{
 style.appendChild(document.createTextNode(css));
}

var div = document.createElement("div");
div.innerHTML = "\n<section id='alertBox'><div id='alertBox-wrapper'><p id='alertBox-title'></p><p id='alertBox-message'></p><button type='button' id='alertBox-button'>Ok</button></div></section>\n";
document.querySelector("body").appendChild(div);
	
function Alert(alert_type='info', alert_title='Notification', alert_message='This is a notification.') {

	setTimeout(()=>{
 const alert = document.querySelector('#alertBox');
	
 alertBox.style.transform = "translate(-50%, -50%) scale(1)";
	
 alertBox.style.boxShadow = '0px 0px 100vmax 80vmax #00000055';

 alert.classList.add(alert_type);

 const title = document.querySelector('#alertBox-title')

 title.innerText = alert_title;

 const message = document.querySelector('#alertBox-message');

 message.innerText = alert_message;
	}, 500)
	
 const button = document.querySelector('#alertBox-button');

 button.onclick = function(){
  alert.style.transform = 'translate(-50%,-50%) scale(0)';

document.querySelector('#alertBox').style.boxShadow = 'none';
 }
}
