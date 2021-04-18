// J 航空では機内食を個人の好みに合わせて選択することができ、オーダーは個々の座席に備え付けてあるディスプレイから受け付けます。
// 乗客はまずメインディッシュとしてビーフかチキンのどちらかを選び、その後ドリンクについてもコーヒーかお茶のどちらか一方を選びます。
// またオプションとして、サラダをつけることもできます。注文はメインディッシュ、ドリンクを各々必ず 1 つだけ含めないといけませんが、サラダの有無については問いません。
// 乗客の注文 beef, chicken, salad, coffee, tea がブーリアン値で与えられるので、オーダーが妥当かを判定する、canProcessOrder という関数を作成してください。

function canProcessOrder(beef, chicken, salad, coffee, tea) {
  if ((beef && !chicken) || (!beef && chicken))
   if ((coffee && !tea) || (!coffee && tea)) return "←オケ"
  return "←ダメ"
}

console.log("サラダ、お茶" +canProcessOrder(false,false,true,false,true));
console.log("とり、サラダ、お茶" +canProcessOrder(false,true,true,false,true));
console.log("うし、とり、サラダ、お茶" +canProcessOrder(true,true,true,false,true));
console.log("うし" +canProcessOrder(true,false,false,false,false));
console.log("とり、コーヒー" +canProcessOrder(false,true,false,true,false));
