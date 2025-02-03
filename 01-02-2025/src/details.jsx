import Random from "./random";
function Details(){
    let id=101;
    let fullName=()=>{
        return <span>Ranjeet Dakshvanshi</span>
    }
    return <h2>Full Name : {fullName()} & id : <Random></Random></h2>
}
export default Details;