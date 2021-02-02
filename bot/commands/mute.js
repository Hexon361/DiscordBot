const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "Mutuje ludzi",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Nazwa roli');

            let memberTarget = message.guild.members.cache.get(target.id);

            if(!args[1]){
                memberTarget.roles.add(muteRole.id);
                message.reply(`<@${memberTarget.user.id}> został zmutowany`);
            }
            memberTarget.roles.add(muteRole.id);
            message.reply(`<@${memberTarget.user.id}> został zmutowany na ${ms(ms(args[1]))}`);

            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
    
            }, ms(args[1])) 
            if(isNaN(args[0]));
        } 
        else{
            message.reply('Błędny zapis');
        }
    }
}