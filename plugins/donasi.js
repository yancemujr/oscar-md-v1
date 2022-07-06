let handler = async m => m.reply(`
╭─「📮DONASI JANGAN MAINAN DOANG🗿」
│ • Dana [0858-5053-9404]
│ • Pulsa [0858-5053-9404]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
