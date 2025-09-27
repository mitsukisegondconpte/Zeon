const fs = require('fs')

// >~~~~~~~~~~ Owner Setting ~~~~~~~~~~~< //
global.owner = "6285157457662"
global.ownername = "shìmiëzuKid"
global.botname = "Zeon"
global.footer = "Zeon Crash V3"
global.packname = "Zeon"

// >~~~~~~~~~~ System Setting ~~~~~~~~~~~< //
global.version = "3.0.0"
global.idch = "120363414490498679@newsletter"
global.prefa = ["", "/"]

// >~~~~~~~~~~ Thumbnail Setting ~~~~~~~~~~~< //
global.thumb = "https://files.catbox.moe/60xuhy.jpg"

// >~~~~~~~~~~ Message Setting ~~~~~~~~~~~< //
global.mess = {
owner: "-[ *AKSES DITOLAK* ]-\n> *_Anda Tidak Dapat Menggunakan Fitur Ini Karena Anda Bukanlah Owner!_*", 
ownerprem: "-[ *AKSES DITOLAK* ]-\n> *_Anda Tidak Dapat Menggunakan Fitur Ini Karena Anda Bukanlah Owner & User Premium!_*"
}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
