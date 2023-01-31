function upload({ server, message }) {
  const img = new Image()
  img.src = `${server}?message=${encodeURIComponent(message)}`
}

export default upload
