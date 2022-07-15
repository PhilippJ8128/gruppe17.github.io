import { letter } from "./letter.js"
import { getGameID } from "../communication.js"

// gleiches Vorgehen wie markMovable, bloß mit anderen className-Anhang
export const markShootable = async (currentSelectedRow, currentSelectedColumn, rowAmazon, columnAmazon) => {

  // GET-Aufruf, um Informationen über das laufende Spiel zu bekommen
  let b = await getGameID(0)
    .then((res) => {
      return res
    }).catch((error) => {
      console.log('GetGameID error. Message is: ' + error.message)
      return { message: error.message }
    })

  // Variablen
  const rowForShoot = currentSelectedRow
  const columnForShot = currentSelectedColumn
  // console.log(rowForShoot + ", " + columnForShot);
  let i = 1

  let board = b.board.squares
  board[rowAmazon][columnAmazon] = -1

  // Schleife, die nach unten alle erlaubten Felder markiert
  do {
    if (rowForShoot + i === 10 ||
      (board[rowForShoot + i][columnForShot] === 0) ||
      (board[rowForShoot + i][columnForShot] === 1) ||
      (board[rowForShoot + i][columnForShot] === -2)) {
      break
    }
    else {
      let l = letter(columnForShot)
      let n = rowForShoot + i
      let str = document.getElementById(l + n).className
      str += " arrowselected"
      document.getElementById(l + n).className = str
    }
  } while (board[rowForShoot + i++][columnForShot] === -1)

  // Schleife, die nach oben alle erlaubten Felder markiert
  i = 1
  do {
    if (rowForShoot - i === -1 ||
      (board[rowForShoot - i][columnForShot] === 0) ||
      (board[rowForShoot - i][columnForShot] === 1) ||
      (board[rowForShoot - i][columnForShot] === -2)) {
      break
    }
    else {
      let l = letter(columnForShot)
      let n = rowForShoot - i
      let str = document.getElementById(l + n).className
      str += " arrowselected"
      document.getElementById(l + n).className = str
    }
  } while (board[rowForShoot - i++][columnForShot] === -1)

  // Schleife, die nach links alle erlaubten Felder markiert
  i = 1
  do {
    if (columnForShot - i === -1 ||
      (board[rowForShoot][columnForShot - i] === 0) ||
      (board[rowForShoot][columnForShot - i] === 1) ||
      (board[rowForShoot][columnForShot - i] === -2)) {
      break
    }
    else {
      let l = letter(columnForShot - i)
      let n = rowForShoot
      let str = document.getElementById(l + n).className
      str += " arrowselected"
      document.getElementById(l + n).className = str
    }
  } while (board[rowForShoot][columnForShot - i++] === -1)

  // Schleife, die nach rechts alle erlaubten Felder markiert
  i = 1
  do {
    if (columnForShot + i === 10 ||
      (board[rowForShoot][columnForShot + i] === 0) ||
      (board[rowForShoot][columnForShot + i] === 1) ||
      (board[rowForShoot][columnForShot + i] === -2)) {
      break
    }
    else {
      let l = letter(columnForShot + i)
      let n = rowForShoot
      let str = document.getElementById(l + n).className
      str += " arrowselected"
      document.getElementById(l + n).className = str
    }
  } while (board[rowForShoot][columnForShot + i++] === -1)

  // Schleife, die nach rechts-oben alle erlaubten Felder markiert
  i = 1
  do {
    if (rowForShoot - i === -1 ||
      columnForShot + i === 10 ||
      (board[rowForShoot - i][columnForShot + i] === 0) ||
      (board[rowForShoot - i][columnForShot + i] === 1) ||
      (board[rowForShoot - i][columnForShot + i] === -2)) {
      break
    }
    else {
      let l = letter(columnForShot + i)
      let n = rowForShoot - i
      let str = document.getElementById(l + n).className
      str += " arrowselected"
      document.getElementById(l + n).className = str
    }
  } while (board[rowForShoot - i][columnForShot + i++] === -1)

  // Schleife, die nach rechts-unten alle erlaubten Felder markiert
  i = 1
  do {
    if (rowForShoot + i === 10 ||
      columnForShot + i === 10 ||
      (board[rowForShoot + i][columnForShot + i] === 0) ||
      (board[rowForShoot + i][columnForShot + i] === 1) ||
      (board[rowForShoot + i][columnForShot + i] === -2)) {
      break
    }
    else {
      let l = letter(columnForShot + i)
      let n = rowForShoot + i
      let str = document.getElementById(l + n).className
      str += " arrowselected"
      document.getElementById(l + n).className = str
    }
  } while (board[rowForShoot + i][columnForShot + i++] === -1)

  // Schleife, die nach links-oben alle erlaubten Felder markiert
  i = 1
  do {
    if (rowForShoot - i === -1 ||
      columnForShot - i === -1 ||
      (board[rowForShoot - i][columnForShot - i] === 0) ||
      (board[rowForShoot - i][columnForShot - i] === 1) ||
      (board[rowForShoot - i][columnForShot - i] === -2)) {
      break
    }
    else {
      let l = letter(columnForShot - i)
      let n = rowForShoot - i
      let str = document.getElementById(l + n).className
      str += " arrowselected"
      document.getElementById(l + n).className = str
    }
  } while (board[rowForShoot - i][columnForShot - i++] === -1)

  // Schleife, die nach links-unten alle erlaubten Felder markiert
  i = 1
  do {
    if (rowForShoot + i === 10 ||
      columnForShot - i === -1 ||
      (board[rowForShoot + i][columnForShot - i] === 0) ||
      (board[rowForShoot + i][columnForShot - i] === 1) ||
      (board[rowForShoot + i][columnForShot - i] === -2)) {
      break
    }
    else {
      let l = letter(columnForShot - i)
      let n = rowForShoot + i
      let str = document.getElementById(l + n).className
      str += " arrowselected"
      document.getElementById(l + n).className = str
    }
  } while (board[rowForShoot + i][columnForShot - i++] === -1)
}

