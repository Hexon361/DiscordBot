module.exports = {
    name: 'kick',
    description: "kickuje użytkownika",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send("Użytkownik został wyrzucony");

    }else{
        message.channel.send('Błędny zapis');
        }
    }
}