 //陣営・役職名・プレイヤー名・生存・その他//
 var number = document.getElementById('count')
 let Cup = Math.floor( 0 ) ;
number.innerText = Cup;

//ボタンを押して、処理開始
function add() {   
var friend = document.createElement("div");
var work = document.createElement("div");
var namae = document.createElement("div");
var ikiru = document.createElement("div");

//ボタンカウント
Cup = Cup + 1;
number.innerText = Cup;

//行を追加
friend.innerHTML = ' <tr> <td> <input  type=text class="haba"> </td> </tr>  ';
work.innerHTML   = ' <tr> <td> <input  type=text class="haba"> </td> </tr> ';
namae.innerHTML  = ' <tr> <td> <input  type=text class="haba"> </td> </tr> ';
ikiru.innerHTML  = ' <tr> <td> <input  type=text class="haba"> </td> </tr> ';


var tomodati = document.getElementById("nakama");
var neet = document.getElementById("sigoto");
var your = document.getElementById("name");
var sinu = document.getElementById("seizon");


tomodati.appendChild(friend);
neet.appendChild(work); 
your. appendChild(namae); 
sinu. appendChild(ikiru); 
};

//代入
var number = document.getElementById('count')
let cup = Math.floor( 0 ) ;


//人狼メンバー
function nit() {   
var  Fun = document.createElement("div");
Fun.innerHTML = ' <tr> <td> <input id="'+ cup +'jinrou" class="text" type=text > </td> </tr> '
var  Onc = document.getElementById("asahi");
Onc.appendChild(Fun);
cup = cup + 1;
}

//占い
Button.onclick =() =>  {
var message = document.getElementById("uranai").value;
if(cup === 1){
var A = document.getElementById("0jinrou").value;
}
else if(cup === 2){
var A = document.getElementById("0jinrou").value;
var B = document.getElementById("1jinrou").value;
}
else if(cup === 3){
var A = document.getElementById("0jinrou").value;
var B = document.getElementById("1jinrou").value;
var C = document.getElementById("2jinrou").value;
}
else if(cup === 4){
var A = document.getElementById("0jinrou").value;
var B = document.getElementById("1jinrou").value;
var C = document.getElementById("2jinrou").value;
var D = document.getElementById("3jinrou").value;
}
else if(cup === 5){
var A = document.getElementById("0jinrou").value;
var B = document.getElementById("1jinrou").value;
var C = document.getElementById("2jinrou").value;
var D = document.getElementById("3jinrou").value;
var E = document.getElementById("4jinrou").value;
}else if(cup === 6){
var A = document.getElementById("0jinrou").value;
var B = document.getElementById("1jinrou").value;
var C = document.getElementById("2jinrou").value;
var D = document.getElementById("3jinrou").value;
var E = document.getElementById("4jinrou").value;
var F = document.getElementById("5jinrou").value;
}

//占い結果表示
if (message === A){
alert("結果は黒です");
} 
else if (message === B){
alert("結果は黒です");
} else if (message === C){
alert("結果は黒です");
} else if (message === D){
alert("結果は黒です");
}else if (message === E){
alert("結果は黒です");
}else if　(message === F){
alert("結果は黒です")
}
else {
alert("結果は白です");
}
};

var PassSec;   // 秒数カウント用変数

// 繰り返し処理の中身
var timer1; //タイマーを格納する変数（タイマーID）の宣言


//カウントダウン関数を1000ミリ秒毎に呼び出す関数
function cntStart()
{
document.timer.elements[2].disabled=true;
timer1=setInterval("countDown()",1000);
}

//タイマー停止関数
function cntStop()
{
document.timer.elements[2].disabled=false;
clearInterval(timer1);
}

//カウントダウン関数
function countDown()
{
var min=document.timer.elements[0].value;
var sec=document.timer.elements[1].value;

if( (min=="") && (sec=="") )
{
alert("時刻を設定してください！");
reSet();
}
else
{
if (min=="") min=0;
min=parseInt(min);

if (sec=="") sec=0;
sec=parseInt(sec);

tmWrite(min*60+sec-1);
}
}

//残り時間を書き出す関数
function tmWrite(int)
{
int=parseInt(int);

if (int<=0)
{
reSet();
alert("時間です！");
}
else
{
//残り分数はintを60で割って切り捨てる
document.timer.elements[0].value=Math.floor(int/60);
//残り秒数はintを60で割った余り
document.timer.elements[1].value=int % 60;
}
}

//フォームを初期状態に戻す（リセット）関数
function reSet()
{
document.timer.elements[0].value="0";
document.timer.elements[1].value="0";
document.timer.elements[2].disabled=false;
clearInterval(timer1);
}  
