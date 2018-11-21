function getProfession(aaa) {
    Profession= document.getElementById(aaa).value;

 };
  
 function getname(aaa) {
    name = document.getElementById(aaa).value;

 };
  
 function getfriend(aaa) {
    friend = document.getElementById(aaa).value;

 };
   
 function getplace(aaa) {
    place = document.getElementById(aaa).value;

 };
    
 function getsuspicious(aaa) {
    suspicious = document.getElementById(aaa).value;

 };
      
 function getpoison(aaa) {
    poison = document.getElementById(aaa).value;

 };
        
 function getCollaborators(aaa) {
    Collaborators = document.getElementById(aaa).value;

 };
         
 function getPseudonym(aaa) {
    Pseudonym = document.getElementById(aaa).value;

 };
                 
 function getsleep(aaa) {
    sleep = document.getElementById(aaa).value;

 };
                        
 function getInvention1(aaa) {
    Invention1 = document.getElementById(aaa).value;

 };
                     
 function getInvention2(aaa) {
    Invention2 = document.getElementById(aaa).value;

 };
                     
 function getInvention3(aaa) {
    Invention3 = document.getElementById(aaa).value;

 };
                     
 function getInvention4(aaa) {
    Invention4 = document.getElementById(aaa).value;

 };
                        
 function getInvention5(aaa) {
    Invention5 = document.getElementById(aaa).value;

 };
    
 function getchildren(aaa) {
    children = document.getElementById(aaa).value;
   
 };
             
 function getadult(aaa) {
    adult = document.getElementById(aaa).value;

 };
         
 function getTitle(aaa) {
    Title = document.getElementById(aaa).value;

 };
 
  function getValue(idname) {
    // value値を取得する
    var message = document.getElementById(idname).value;
  
    switch (message) {
        case "できた":
        alert("俺は" + Profession + "探偵、" + name + "。幼馴染で同級生の" + friend + "と" + place + "へ遊びに行って黒ずくめの" + suspicious + "の怪しげな取引現場を目撃した。取引を見るのに夢中になっていた俺は、背後から近づいてくるもう一人の仲間に気づかなかった。俺はその男に毒薬を飲まされ、目が覚めたら・・・" + poison + "。" + name + "が生きているとやつらにばれたらまた命を狙われ、周りの人間にも危害が及ぶ。" + Collaborators + "の助言で正体を隠すことにした俺は" + friend + "に名前を聞かれて、とっさに" + Pseudonym + "と名乗り、やつらの情報をつかむ為に、父親が探偵をやっている" + friend + "の家に転がり込んだ。オレは" +  sleep  + "を名探偵に仕立てるべく、" + Invention1 + "で" + sleep + "を眠らせ、" + Invention2 + "を使って、" + sleep + "の声でかわりに事件を解いている。この二つのメカは、" + Collaborators + "の発明品だ！" + Collaborators + "は他にも…" + Invention3 + "や、" + Invention4 + "、" + Invention5 + "など次々とユニークなメカを作り出してくれた！たった一つの真実見抜く見た目は" + children + "、頭脳は" + adult + "、その名は、" + Title + "！");break;

        default:
        alert("設定してください");
        break;
    }
  }
