const btns = document.querySelectorAll('#nav li');
const panels = document.querySelectorAll('article');

//btns에 반복을 돌면서
//각각의 nav li에 클릭이벤트를 부여합니다

btns.forEach((el, index)=>{
    el.addEventListener("click", ()=>{
        //클릭했을때 반복을 돌면서 모두 on클래스를 없애고(btns, panels)
        for(let i = 0; i < btns.length; i++){
            btns[i].classList.remove("on");
            panels[i].classList.remove("on");
        }
        //클릭한 인덱스에만 on을 붙입니다
        btns[index].classList.add("on");
        panels[index].classList.add("on");
    })
})

