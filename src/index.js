import capture from "./capture"

const monitor = {
  init: ({ server }) => {
    capture({ server })
  },
}

export default monitor
