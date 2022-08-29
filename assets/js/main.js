
import { SubscriptionToHellfireClub } from "./firebase/hellfire-clube.js";



const txtName = document.getElementById("txtName");
const txtEmail = document.getElementById("txtEmail");
const txtLevel = document.getElementById("txtLevel");
const txtCharacter = document.getElementById("txtCharacter");
const btnSubscribe = document.getElementById("btnSubscribe");

btnSubscribe.addEventListener("click",async () => {
  const Subscription = {
    name: txtName.value,
    email: txtEmail.value,
    lavel: txtLevel.value,
    character: txtCharacter.value,
  };

 const SubscriptionId = await SubscriptionToHellfireClub(Subscription)
 console.log(`inscrito com sucesso:${SubscriptionId}`)

 txtName.value =''
 txtEmail.value =''
 txtLevel.value =''
 txtCharacter.value =''
  
 alert(`inscrito com sucesso: Seu ID é :${SubscriptionId}`)
});
