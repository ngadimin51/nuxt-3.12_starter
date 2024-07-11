export default defineEventHandler( async event => {
  const { username, password } = await readBody(event)
  if ( username === "koHipi7am" && password === "Pek0o" ) {
    return { msg: "Success", body: { username, password } }
  } else {
    setResponseStatus(event, 401)
    return { msg: "username / password not match", body: { username, password } }
  }
})