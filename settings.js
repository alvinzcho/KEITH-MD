// Bot settings

// You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep

const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0xtSERta045T0xvYlhYUnlHaVl6MHlEWkVOR1NsR1BCVWR2QVJ2T2FtZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0xzTHBpUDRwVWlMWSt5M0pKZHhDYmtIbjJEL3JyRjB2Ujl1QWZKS3dTWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSHlVdDdqTWVPY3BvQUUzQjU1WGtlYVNuS2YrSEMrdlprMEFYQ1JwcFZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTdnhmWHVDc2ovM3dyTHpQY3R2OXY0eUF3SGZUV1M5NVl3RHNSVnpCK2xFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndFbFdKK2MrWTJmRzZnTVorUlVtN2dOV3Z2bURpN0M5VEliR09nYUwzMTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJLN2UxME0vN0kwOW51WEhxM0FCNStVMWFOVWVBcHJwZng4a2p3Ui96Mkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0xrWWk4M2U1RmJ0Q2pkS014aHU4Y3Q3Z0UvaTFPaEJ5dzBuWldZTVdWcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVlpaMHo3UVQ4TWZzK3BHaXJrRFNtMzZhMGZVdlBXbG55WW5LbVQrVTNEaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InAva25LK3E4bEdBTHZmV2VXV1ZCemJPK2g1NFhRYWxaRnIrV2c5R3R3TE5HMkE5WG5PR1lxUlNUTkdPajg3Yms5R2VSQmNLMjcrTW9na1RTanZGaGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQwLCJhZHZTZWNyZXRLZXkiOiJEc0Eza1NKUWV4a1NLZEhuUTRMQmk4UTAwb2hrL04zSlNGVU9xSFl3YzdBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5ZWUxUTd6VFFYcUFFZHJMbTh0TklBIiwicGhvbmVJZCI6ImQzN2FkYTYzLTIxZWMtNGMyZC1hYmJiLTk4OGIxNGRlNzk4ZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4aUVHUFVjM3FhYWlKT1R6ekp6dGg2ZEswRTA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnZtS080QVJwZG9tb0I4RHJKNzVYcHhGdDM0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkYxUEJHVk41IiwibWUiOnsiaWQiOiI2Mjg3ODU2MTQxNTY4OjEyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOYW51cGtGRU1lbHNyNEdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJYT1I0NFRiaHova0laNzBZSndZS1lEQkIzWWdMbklqbFMveGQvaStLS1EwPSIsImFjY291bnRTaWduYXR1cmUiOiJoVWozWjhMU2xydWFsR1lJcHdhdjVVb0ZDZC9JT3o1SWk5c3ZSVnF4ZlFON0JzaVdsbWZ0Unc4b3MyZ2VnQWs3ZkdjNnpGZStjN3IwMXkrNmpLbnJEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQUs3YzVjN09OMmdLRU1NQlM4c0pPV1ZHR2JIeVI3c2RKb0RGWUxaalFoYUN4aEc3VE9SQUF5M1JrTEFRSHdFWkNBcXRPSlloU0Q0djhtOEMzYk0xaWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI2Mjg3ODU2MTQxNTY4OjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZ6a2VPRTI0Yy81Q0dlOUdDY0dDbUF3UWQySUM1eUk1VXY4WGY0dmlpa04ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDE0NjAxNzksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTFhkIn0=';

const prefix = process.env.PREFIX || '';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.OWNER_NUMBER || '254748387615';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';
const reactemoji = process.env.EMOJI || '💚';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const anticallmsg = process.env.ANTICALL_MSG || 'Keith declined your 🤙 call';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  reactemoji,
  autobio,
  antilink: groupControl,  // Use groupControl for antilink
  antibad: groupControl,   // Use groupControl for antibad
  mode,
  prefix,
  anticall,
  autolike,
  anticallmsg,
  mycode,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  session,
  antitag,
  antidelete
};
