console.log("DOM and Typecasting in TS");

function handleClick() {
  let headingTag = document.querySelector("h1")!;
  console.log(headingTag);
  let anchorTag = document.querySelector("a")!;
  console.log(anchorTag);


//  setp 2. 
let headingClass = document.querySelector(".heading1") as HTMLHeadingElement;
let anchorClass = document.querySelector(".anchorClass") as HTMLAnchorElement;
console.log(headingClass.classList);
console.log(anchorClass.href);
console.log(anchorClass.classList);
}
