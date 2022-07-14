function colorSelected (element) {
  let root = document.querySelector(':root');
  root.style.setProperty('--main-bg-color', element.value);
  console.log(element.value);
}
                                        

