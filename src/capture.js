import upload from "./upload"

function capture({ server }) {
  window.addEventListener(
    "error",
    function (error) {
      console.log(error.type)
      upload({
        server,
        message: error.message,
      })
    },
    false
  )

  window.addEventListener("unhandledrejection", function (e) {
    console.log(e.type)
  })
}

export default capture
