var obj = {
 x : 0,
 logMessage:function (sMessage){
    console.log(`This is log message : ${this.x} ${sMessage} `);
  }
}

module.exports = obj

