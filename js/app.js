
const products = document.getElementById("products");       //urunler
const addProduct = document.getElementById("addProduct");   //urun ekleme butonu
const productName = document.getElementById("productName"); //urun giris inputu
const productPrice = document.getElementById("productPrice");//urun fiyat inputu
const productTag = document.getElementById("productTag");//urun id inputu
let keepimg;





function createNode( kind, idN, classN,values){
   // console.log(typeof kind, typeof idN,typeof classN);
    const newNode = document.createElement(kind);   
 //   console.log(newNode);
    newNode.id=idN;
    newNode.className=classN;
    newNode.appendChild(document.createTextNode(values));
    return newNode;
}

function secondParentCreate() { // ilk div
   const element= createNode("div",productTag.value,"card cards align-items-center","");
   return element;
}
function newcardCreate(){   //kart body
    const element = createNode("div",productTag.value+"Card","card-body","");
    return element;
}
function newtitleCreate(){  // ürün ismi
    const element = createNode("h5",productTag.value+"Title","card-title",productName.value);
    return element;
}
function newPriceCreate(){  //ürün fiyati
    const element = createNode("h5",productTag.value+"Price","card-title",productPrice.value);
    return element;
}
function newButtonCreate(){ //ürün butonu
    const element = createNode("a",productTag.value+"Btn","add btn btn-primary text-center","ADD");
    element.href="#";
    return element;
}
function newimgCreate() {   //ürün resmi
    const newimgElement = createNode("img","Pic","card-img-top pictures","");
    newimgElement.alt = "img";
    fileUpload(newimgElement);
    return newimgElement;
}



function fileUpload(newimgElement){ //resim yukleme fonksiyonu
    const file = document.getElementById("file").files;
    if (file.length > 0) {
        const fileReader = new FileReader();
        fileReader.onload = function (event) {
            newimgElement.setAttribute("src", event.target.result);
            
            keepimg=JSON.stringify(event.target.result);

           
            
        };
        fileReader.readAsDataURL(file[0]);

    }
    keepimg=newimgElement;
    return newimgElement;

}

function getUrunTagFromStroage(keyWord){
    let todos;
    if(localStorage.getItem(keyWord)===null)
        todos =[];
    else
        todos=JSON.parse(localStorage.getItem(keyWord));
       
    return todos;
}

    function createProduct(){
    const newSecondParent =secondParentCreate();
    const newimgElement = newimgCreate();
    const newCardBody =newcardCreate();
    const newTitle = newtitleCreate();
    const newPrice = newPriceCreate();
    const newButton =newButtonCreate();

    newCardBody.appendChild(newTitle);
    newCardBody.appendChild(newPrice);
    newCardBody.appendChild(newButton);
    newSecondParent.appendChild(newimgElement);
    newSecondParent.appendChild(newCardBody);
    products.appendChild(newSecondParent);
    }

addProduct.addEventListener("click", run);
function run(e) {


    createProduct();

//      var img_src = document.getElementById("Pic").src;
     
//      console.log(img_src);

//      console.log(keepimg.src);
//    // console.log(keepimg.onload);
    
    
   
    



    // function addLocalStroage(productSearchKey,addValue){
    //     let productsFullValues=getUrunTagFromStroage(productSearchKey);

    //     productsFullValues.push(addValue);

    //     localStorage.setItem(productSearchKey,JSON.stringify(productsFullValues));
    // }

    // addLocalStroage("productNameKey",productName.value);
    // addLocalStroage("productPriceKey",productPrice.value);
    // addLocalStroage("productTagKey",productTag.value);

    // let productNameFromLocal=JSON.parse(localStorage.getItem("productNameKey"));
    // let productPriceFromLocal=JSON.parse(localStorage.getItem("productPriceKey"));
    // let productTagFromLocal=JSON.parse(localStorage.getItem("productTagKey"));

    // for(i=0 ;i<productNameFromLocal.length;i++){
    //     productName.value=productNameFromLocal[i];
    //     productPrice.value=productPriceFromLocal[i];
    //     productTag.value=productTagFromLocal[i];
    //     createProduct();
    //     console.log(i);
    
    // }
   



}






