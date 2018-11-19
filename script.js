const myprocess = require('process');
const login = require(`${myprocess.cwd()}\\node_modules\\facebook-chat-api`);
const config = require(`${myprocess.cwd()}\\node_modules\\config`);
var name = "";

email_fb =  config.get('Credentials.email');
password_fb = config.get("Credentials.password")
message_fb = config.get("Credentials.data")
console.log(email_fb)
// var email = prompt("Please Enter your Facebook Email")

login({email:email_fb,password:password_fb}, (err, api) => {
    if(err) return console.error(err);
    api.getThreadList(1000,null,['INBOX'],(err,list)=>{
        if(err) return console.error(err);
        for(let x in list){
            if(list[x]['participants'][0]['userID'] != api.getCurrentUserID()){
            api.getUserInfo(list[x]['participants'][0]['userID'],(err,ret)=>{
                if(err) return console.error(err);
                    if(list[x]['messageCount']  == list[x]['unreadCount']){
                    console.log(api.getCurrentUserID());
                console.log("0 -->" + list[x]['participants'][0]['userID']);
                console.log("1 -->" + list[x]['participants'][1]['userID']);
            console.log("here 1");
                    let message_fbx = message_fb.split('$name').join(ret[list[x]['participantIDs'][0]]['name'])
                    console.log("message send to --> " + ret[list[x]['participantIDs'][0]]['name'] )
                    api.sendMessage(message_fbx,list[x]['threadID'],(err,messageInfo)=>{
                        if(err) console.error(err)
                    });
                    api.markAsRead(list[x]['threadID'],(err)=>{
                            if(err) console.error(err)
                    });
            }

        })}else{
        api.getUserInfo(list[x]['participants'][1]['userID'],(err,ret)=>{
                if(err) return console.error(err);
                    if(list[x]['messageCount']  == list[x]['unreadCount']){
                    console.log(api.getCurrentUserID());
                console.log("0 -->" + list[x]['participants'][0]['userID']);
                console.log("1 -->" + list[x]['participants'][1]['userID']);
                console.log("Here 2")
                    let message_fbx = message_fb.split('$name').join(ret[list[x]['participantIDs'][1]]['name'])
                    console.log("message send to --> " + ret[list[x]['participantIDs'][1]]['name'] )
                    api.sendMessage(message_fbx,list[x]['threadID'],(err,messageInfo)=>{
                        if(err) console.error(err)
                    });
                    api.markAsRead(list[x]['threadID'],(err)=>{
                            if(err) console.error(err)
                    });
            }

        })}
    }
});
});   