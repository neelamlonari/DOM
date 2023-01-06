// Menu data structure
/*var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];*/
  var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  let showingSubMenu = false;

let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML='<h1>SEI Rocks!</h1>';
mainEl.classList.add('flex-ctr');

let topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = '100%' ;
topMenuEl.style.backgroundColor ='var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

for (let i in menuLinks){
    let a = document.createElement('a');
    a.textContent = menuLinks[i].text;
    a.setAttribute('href', menuLinks[i].href);
    topMenuEl.appendChild(a);
  }
  let subMenuEl = document.getElementById("sub-menu");
  subMenuEl.style.height = '100%';
  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
  subMenuEl.classList.add('flex-around');
  subMenuEl.style.position = 'absolute';
  subMenuEl.style.top = '0';

  let topMenuLinks=topMenuEl.querySelectorAll('#top-menu a');  
  topMenuEl.addEventListener('click', function(e){

  e.preventDefault();
  let text = e.target.textContent;
   if( 
    text=='about' ||
    text == 'catalog'||
    text== 'orders'||
    text== 'account')    {
      console.log(text);
    }
    else {
      return;
    }
  
    /* 5.3 ==Next in the event listener, if the clicked <a>link has a class of active:

Remove the activeclass from the clicked <a>element.
Set the showingSubMenuto false.
Set the CSS topproperty of subMenuElto 0.
returnto exit the handler.*/
//let el = document.querySelector('.active');

if( e.target.classList.contains('active'))
{

//if(el==true){

  e.target.classList.remove('active');
  showingSubMenu =false;
  subMenuEl.style.top = '0';
  return;
}


/*Task 5.4
Next, the event listener should remove a class name of activefrom each <a>element in topMenuLinks- whether the activeclass exists or not.

Hint: Removing a non-existent class from an element does not cause an error, so just remove it!*/
//console.log(topMenuLinks[0]);
for(let i of topMenuLinks){
 i.classList.remove("active");
}//5.5 
e.target.classList.add("active");
 /*5.6 ===Set showingSubMenu to true if the clicked <a> element's "link" object within menuLinks has a subLinks property 
(all do, except for the "link" object for ABOUT), otherwise, set it to false.*/
if(text ==="about"){
  e.target.innerHTML=`<h1>${text}</h1>`;
  
  }
//make object in menulink
menuLinks.forEach(object => {
 // console.log(e.target.text,' ',object.text);
  if(object.hasOwnProperty('subLinks')){
    showingSubMenu=true;
    let linkArr = [];
    //console.log(e.target.text,' ',object.text);
    if(object.text === e.target.text){
      console.log(e.target.text,' ',object.text);

      object.subLinks.forEach((el)=>{
        let link= document.createElement('a');
        link.setAttribute=('href',el.href);
        link.textContent = el.text;
       console.log(link.textContent);
        linkArr.push(link);///push all sublinks in array 
      })
      //console.log('Hello' ,linkArr);
     subMenuEl.innerHTML='';
     subMenuEl.style.top = '100%';
      subMenuEl.append(...linkArr);
     // subMenuEl.style.top = '100%';
    }
    else{
      showingSubMenu=false;
      //subMenuEl.style.top ='0';
    }
 }
});
  });
subMenuEl.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.tagName === 'A') {
        console.log(e.target.textContent);
    } else {
        return;
    }
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    for (let i of topMenuLinks) {
        i.classList.remove('active');
    }

    mainEl.innerHTML = `<h1>${e.target.textContent}</h1>`;
})
  
   