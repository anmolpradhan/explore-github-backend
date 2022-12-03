const constants=require('./constants');

const generateOptions=(_path)=>{
    return options = {
        hostname: constants.hostname,
        path: _path,
        OAUth: process.env.GITHUB_ACCESS_TOKEN
    }
}

module.exports ={ generateOptions }