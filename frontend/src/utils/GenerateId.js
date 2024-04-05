const  GenerateId = () => {
    const values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    let id = ""
    for(let i=0;i<6;i++){
        id += values.charAt(Math.floor(Math.random()*values.length));
    }
    return id;
}


module.exports = GenerateId