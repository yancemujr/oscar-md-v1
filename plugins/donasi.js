let handler = async m => m.reply(`
╭─「📮DONASI JANGAN MAINAN DOANG🗿」
│ • Dana [0895-3303-79186]
│ • Pulsa [0896-5436-0447]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
