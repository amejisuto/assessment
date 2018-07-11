(function () {
    'use strict';
　  const userNameInput = document.getElementById('user-name');
　  const assessmentButton = document.getElementById('assessment'); 
　  const resultDivided = document.getElementById('result-area');
　  const  tweetDivided = document.getElementById('tweet-area');



function removeAllChildren(element){
    while(element.firstChild){//子どもの要素があるかぎり削除
        element.removeChild(element.firstChild);
  }
}

userNameInput.onkeydown = (event) => {
    if (event.keyCode === 13) {
        assessmentButton.onclick();
    }
};
assessmentButton.onclick=() => {
        const userName = userNameInput.value;
        if(userName.lengh === 0){
           return;
        }

       
    

    //診断結果表示エリアの作成
    removeAllChildren(resultDivided)
    
    const header = document.createElement('h3');
    header.innerText= '診断結果';
    resultDivided.appendChild(header);

    
    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);

       //TODOツイートエリアの作成 
       removeAllChildren(tweetDivided);
       const anchor = document.createElement('a');
       const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag='
         + encodeURIComponent('あなたのフレンズは')
          + '&ref_src=twsrc%5Etfw';
       
        anchor.setAttribute('href',hrefValue);
        anchor.className = 'twitter-hashtag-button';
        anchor.setAttribute('data-text', result);
        anchor.innerText = '＃あなたがなんのフレンズだったのかツイートしてみよう！';
       tweetDivided.appendChild(anchor);   

        twttr.widgets.load();
      
    };
  

            const answers = [
        '{userName}は サーバルのフレンズだね！{userName}のジャンプ力はどのフレンズよりすごいんだから！',
        '{userName}は 人のフレンズだね！{userName}はいろんなことができるの。すっごーい！',
        '{userName}は アライグマのフレンズだね！{userName}はわたあめでさえ洗っちゃうんだから！',
        '{userName}は フェネックのフレンズだね！{userName}の耳は遠くのものも聞こえるんだよ！',
        '{userName}は カバのフレンズだね！{userName}は人のフレンズに「田植え」って言わせるのが得意なんだ！',
        '{userName}は トキのフレンズだね！{userName}の歌声はとても特徴的だよね…',
        '{userName}は アルパカ・スリのフレンズだね！{userName}のだす紅茶はとってもおいしいんだから！',
        '{userName}は キタキツネのフレンズだね！どのフレンズよりもゲームが上手なの！',
        '{userName}は ギンキツネのフレンズだね！この前キタキツネに見せた踊り見せてよ！',
        '{userName}は アフリカオオコノハズクのフレンズだね！{userName}はとても頭がいいの！',
        '{userName}は ワシミミズクのフレンズだね！{userName}ねぇねぇ、「おさない」って何？',
        '{userName}は スナネコのフレンズだね！これ書いた人が最初に好きになったフレンズなんだって！',
        '{userName}は ツチノコのフレンズだね！{userName}の目にはピット器官があるんだって！なんなんだろ？わっかんないや！。',
        '{userName}は ライオンのフレンズだね！{userName}は一日14時間も寝てるんだって！',
        '{userName}は ヘラジカのフレンズだね！{userName}はライオンと仲良しなんだよ！',
        '{userName}はコツメカワウソのフレンズだね！あなたとジャガーはとっても仲良しなの！。'
        '{userName}は ラッキービーストだね！！{userName}のポンコツぶりがすごいんだから！',
        '{userName}、テメェ漬物だな？漬物、テメェはダメつってんだろうがぁぁ！'

];

    

    
    function assessment(userName) {
        // 全文字のコード番号を取得してそれを足し合わせる
        let sumOfcharCode = 0;
        for (let i = 0; i < userName.length; i++) {
            sumOfcharCode = sumOfcharCode + userName.charCodeAt(i);
        }

        // 文字のコード番号の合計を回答の数で割って添字の数値を求める
       const index = sumOfcharCode % answers.length;
        let result = answers[index];

　       result = result.replace(/\{userName\}/g, userName);
return result;
   }
})();
