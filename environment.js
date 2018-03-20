const config = {
  dev: {
  },
  prod: {
  }
}

module.exports = config[process.env.RELEASE_STAGE]
