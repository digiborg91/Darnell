require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client({
partials: ["MESSAGE"]
})

const BOT_PREFIX = '!'
const MOD_ME_COMMAND = 'mod-me'

client.on('ready', ()=> {
    console.log('Bot is ready')
})

client.on('messageDelete', msg => {
    msg.channel.send("Stop deleting messages ye fruit")
})

client.on('message', msg => {
    if (msg.content == 'hi darnell'){
        msg.reply('hello')
    }
    if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
        modUser(msg.member)
    }
})

client.on('message', msg => {
    if (msg.content == 'aye'){
        msg.reply('Fair dig nii')
    }
    if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
        modUser(msg.member)
    }
})

client.on('message', msg => {
    if (msg.content == 'sweet' || "2 mins" || 'lol' || 'brb' || 'aye' || 'ns'){
        msg.react('♥️')
    }
    if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
        modUser(msg.member)
    }
})

client.on('message', msg => {
    if (msg.content == 'few games anyone?' || 'few games anyone' || 'few games anyone ' || 'few games?' || 'few games'){
        msg.react('♥️')
    }
    if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
        modUser(msg.member)
    }
})

client.on('message', msg => {
    if (msg.content == 'few games anyone?' || 'few games anyone' || 'few games anyone ' || 'few games?' || 'few games'){
        msg.reply('Yea ! Count me in')
    }
    if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
        modUser(msg.member)
    }
})

client.on('message', msg => {
    if (msg.content == 'Tell me a joke'){
        msg.reply('What do you call a nun in a wheel chair ? Virgin Mobile.')
    }
    if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
        modUser(msg.member)
    }
})

client.on('message', msg => {
    if (msg.content == 'nice'){
        msg.reply('So is yer Ma! ')
    }
    if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
        modUser(msg.member)
    }
})

function modUser(member) {
    msg.member.roles.add("783803050783014923")
}

client.login(process.env.BOT_TOKEN)