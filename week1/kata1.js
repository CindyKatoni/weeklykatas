function validPhoneNumber(phoneNumber){
    //TODO: Return whether phoneNumber is in the proper form
    let exp = /^[(]{1}[1-9]{3}[)]{1}[\s]{1}\d{3}[\-]{1}\d{4}$/.test(phoneNumber);
    console.log(exp)
    return exp
  }