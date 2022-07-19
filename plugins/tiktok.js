let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
 // let url = `https://api.lolhuman.xyz/api/tiktokwm?apikey=9b817532fadff8fc7cb86862&url=${args[0]}`
    m.reply('Tunggu Sebentar')
let txt = `Nih Kak` 
    await conn.send2ButtonVid(m.chat, `https://api.lolhuman.xyz/api/tiktokwm?apikey=9b817532fadff8fc7cb86862&url=${args[0]}` , txt, wm, `No Wm`, `.tiktoknowm ${args[0]}`, `Audio`, `.tiktokaudio ${args[0]}`, m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^((tt|tiktok)?(dl)?)$/i

module.exports = handler
