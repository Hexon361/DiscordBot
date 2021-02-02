module.exports = {
    name: 'unmute',
    description: "unmutuje ludzi",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Nazwa roli');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            message.reply(`<@${memberTarget.user.id}> został odmutowany`)
        } else{
            message.reply('Błędny zapis');

        }
    }
}