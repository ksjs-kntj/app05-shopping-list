//-------------------------------------
//---- 入力欄に文字を入れてボタンを押す ----
//-------------------------------------

// <ul>   listContainer
// <li>   listItem
// <span> textEl


// フォームのIDを取得
const formEl = document.getElementById('form');

// 入力欄とリストを取得
const inputEl = document.getElementById('itemInput'); // 入力欄
const listContainer = document.getElementById('todoList'); // リスト

// 送信された時
formEl.addEventListener('submit', (e) => {
  e.preventDefault(); // デフォルトのリロードを止める

  // 入力された内容を取り出す
  const text = inputEl.value.trim(); // 前後の空白を削除
  if (!text) return; // 空なら処理しない

  // リストに追加
  const listItem = document.createElement('li');

  // チェックボックス追加
  const checkBoxEl = document.createElement('input');
  checkBoxEl.type = 'checkbox';
  listItem.appendChild(checkBoxEl);

  // spanを追加(文字を入れる部分)
  const textEl = document.createElement('span');
  textEl.textContent = text;
  listItem.appendChild(textEl);

  // 完成したliをリストに追加
  listContainer.appendChild(listItem);

  /*
  listItem.textContent = text;
  listContainer.appendChild(listItem);
*/

  // チェック後に取り消し線追加
  checkBoxEl.addEventListener('change', () => {
    if (checkBoxEl.checked) {
      listItem.style.textDecoration = 'line-through';
    } else {
      listItem.style.textDecoration = 'none';
    }
  });
  
  // 入力欄を空にする
  inputEl.value = ''; // 入力欄(inputEl)に入っている文字列(value)を空欄に置き換える
  inputEl.focus();    // 入力欄にカーソルを自動的に移動させる
});
