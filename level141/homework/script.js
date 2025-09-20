// export let func = () => 'hello world'
// export let func1 = (a,b) => a + b
// export let func2 = name => `hello ${name}`




let getData = async () => {
  
    let response = await fetch("package.json"); 
    let data = await response.json(); 
    console.log(data);

};

getData();
