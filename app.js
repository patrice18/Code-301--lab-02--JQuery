//creating an array to store each image objects
let allPics = [];


//creating our variables, giving them the value of their respective ids in HTML so we can access them via JS through the DOM
const $main = $('#main')
const $selector = $('#image-filter')



// creating variable with the value of the link that houses the images
const apiURL = `https://raw.githubusercontent.com/CodePartnersMD/MD301-01/master/02-jquery-selectors-events/lab/page-1.json`
console.log(apiURL) // I thought this would give me the image object, but it doesn't.

//creating object constructor for the image objects in the above API 

const Pics = function(imageObject) {
this.image_url = imageObject.image_url;
this.title = imageObject.title;
this.description =imageObject.description;
this.keyword = imageObject.keyword;
this.horns = imageObject.horns;
};


//Creating a protype of the object constructor and the appending the images to the DOM
Pics.prototype.renderPics= imageObject => {
    let $picsClone = $('#pics-placeholder').clone() 
    $main.append($picsClone)
    $picsClone.attr('id',imageObject.keyword)
    $picsClone.find('img').attr('src',imageObject.image_url)
    $picsClone.find('h2').text(imageObject.title)


}

//creating the selector where you can filter and select images
$($selector).on('change',()=>{
    $('section').hide()
    $(`section[id=${event.target.value}]`).show()
})


//I need to get the JSON file that contains the images and attach it to the DOM
$.getJSON(apiURL, response => {
response.forEach((val)=> {
let newPics = new Pics(val)
allPics.push(newPics)
newPics.renderPics(val)
$selector.append(`<option value=${newPics.keyword}>${newPics.keyword}</option>`)

})
}) 