module.exports = {
    name: 'ban',
    description: "Banuje użytwkonika",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send("Użytkownik został zbanowany");

    }else{
        message.channel.send('Błędny zapis');
        }
    }
}