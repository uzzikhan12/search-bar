var mobiles = {
    iphone: {
      iphone7: {
          RAM:"3",
          ROM:"32",
          Camera:"5",
          LCD:"5.2"
      },
      iphone8: {
        RAM:"2",
        ROM:"64",
        Camera:"6",
        LCD:"4.2"
      },
      iphone8plus: {
        RAM:"4",
        ROM:"128",
        Camera:"10",
        LCD:"6"
      },
      iphoneX: {
        RAM:"4",
        ROM:"256",
        Camera:"12",
        LCD:"5.7"
      },
      iphone11: {
        RAM:"6",
        ROM:"256",
        Camera:"14",
        LCD:"5.5"
      },
    },
    xiomi: {
      redmiA2: {
        RAM:"8",
        ROM:"128",
        Camera:"12",
        LCD:"4.9"
      },
      redmi10: {
        RAM:"8",
        ROM:"256",
        Camera:"38",
        LCD:"4.8"
      },
      redmi11: {
        RAM:"12",
        ROM:"128",
        Camera:"20",
        LCD:"4.5"
      },
      redmi12: {
        RAM:"6",
        ROM:"128",
        Camera:"18",
        LCD:"5.3"
      },
      redmi13: {
        RAM:"3",
        ROM:"64",
        Camera:"14",
        LCD:"5.3"
      },
      redmi13C: {
        RAM:"8",
        ROM:"128",
        Camera:"12",
        LCD:"5.5"
      },
    },
    realme: {
      realmiNote50: {
        RAM:"6",
        ROM:"128",
        Camera:"12",
        LCD:"5.5"
      },
      realmiC67: {
        RAM:"6",
        ROM:"128",
        Camera:"45",
        LCD:"4.5"
      },
      realmiC53: {
        RAM:"8",
        ROM:"128",
        Camera:"40",
        LCD:"4.2"
      },
      realmi9: {
        RAM:"8",
        ROM:"64",
        Camera:"50",
        LCD:"3.2"
      },
      realmi9i: {
        RAM:"6",
        ROM:"64",
        Camera:"15",
        LCD:"5.1"
      },
    },
    tecno: {
      spark20: {
        RAM:"8",
        ROM:"128",
        Camera:"25",
        LCD:"4.9"
      },
      spark20Pro: {
        RAM:"8",
        ROM:"256",
        Camera:"12",
        LCD:"4.8"
      },
      spark20C: {
        RAM:"8",
        ROM:"128",
        Camera:"20",
        LCD:"4.5"
      },
      POVA6: {
        RAM:"6",
        ROM:"64",
        Camera:"12",
        LCD:"4.4"
      },
      PhantomV: {
        RAM:"6",
        ROM:"128",
        Camera:"15",
        LCD:"5.3"
      },
    },
  };


let brand = document.getElementById("brand");
let model = document.getElementById("model");
let specs = document.getElementById("specs");
let myInp = document.getElementById("myInp");

let allBrand = Object.keys(mobiles);


for(var i = 0; i < allBrand.length; i++){
    brand.innerHTML += `<option>${allBrand[i]}</option>`
}

function selectBrand(){
    
    let selectedBrand = brand.value;
    let allModel = Object.keys(mobiles[selectedBrand]);

    model.innerHTML = "";
    for(let i = 0; i < allModel.length; i++){
        model.innerHTML += `<option>${allModel[i]}</option>`
    }

}

function selectModel(){
  let selectedModel = model.value;
  myInp.value = selectedModel
}


function search(){
    let selectedModel = myInp.value;
    specs.innerHTML = "";
            
    let modelSpecs = Object.entries(mobiles[brand.value][selectedModel]);
    for(let i = 0; i < modelSpecs.length; i++){
        specs.innerHTML += `<p>${modelSpecs[i]}</p>`
    }

}










