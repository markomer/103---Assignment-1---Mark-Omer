console.log("script haha");
var client="Mark";
client="Samantha";
let age=99;
//const URL="http://127.0.0.1/iot";
age=55;

console.log(age);
//console.log(URL);
client="Maira";

client="Aaron"

console.log("client");// client
//console.log("Please, " + client + " visit the site:" + URL);


let children="5";// best-simplest way

let partnersname="Julie";

let geolocation;
geolocation="Utah";//using more lines not the best, but works

let jobtitle;
jobtitle="Teacher"

console.log("You will be a " + jobtitle + " in " + geolocation + ", and married to " + partnersname + " with " + children + " kids.");




//template string
//document.write(`Please, ${client} visit this site: ${URL}`);


const URL="http://www.markomerart.com/";
let artType="ORIGINAL";
let artSubject="FIGURATIVE";
let artStyle="REPRESENTATIONAL";
let graphicMedium="CHARCOAL";
let substrate="BOARD";
let boardMedium="EPOXY ON BOARD";
let epoxyColor="PEARL";
let epoxyTexture="SWIRL";
let edgeStyle="LIGHT TEXTURE";
let edgeColor="SAME AS FRONT";
let height="20 INCHES";
let width="16 INCHES";
let edgeDepth="1 INCH";
let highestPrice="$1000.00 USD";
let lowestPrice="$200.00 USD";
let subjectSource="STUDIO FINE ART";
let receiptDate="03/17/2022";
let receiptType="DELIVERY";
let clientName="JOHN DOE";
let address="169 N 300 E, LEHI, UT";
let phoneNumber="8015559876";
let type="date"


document.write(`To buy artwork from ${URL} please choose the following features - <i>Art Type</i>: ${artType} , <i>Subject Type</i>: ${artSubject}, <i>Artistic Style</i>: ${artStyle}, <i>Graphic Medium</i>: ${graphicMedium}, <i>Substrate</i>: ${substrate}, <i>Board Medium</i>: ${boardMedium}, <i>Epoxy Color(s)</i>: ${epoxyColor}, <i>Epoxy Texture(s)</i>: ${epoxyTexture}, <i>Edge Style</i>: ${edgeStyle}, <i>Edge Color</i> ${edgeColor}, artwork dimensions; <i>Height</i>: ${height}, <i>Width</i>: ${width}, <i>Edge Depth</i>: ${edgeDepth}, price range selections; <i>Highest Price</i>: ${highestPrice}, <i>Lowest Price</i> ${lowestPrice}, <i>Subject Source</i> ${subjectSource}, <i>Receipt Date</i>: ${receiptDate}, <i>Receipt Disposition</i>: ${receiptType}, <i>Client Name</i>: ${clientName}, <i>Address</i>: ${address}, <i>Phone Number</i>: ${phoneNumber}. Thank you for your order.`);