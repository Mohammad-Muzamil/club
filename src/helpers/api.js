import axios from 'axios';

export async function ALL_USERS_API() {
  var config = {
    method: 'get',
    // url: `http://127.0.0.1:8000/api/login`,
    url: `//${window.location.host}/api/login`,
    
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function GALLERY_IMAGES() {
  var config = {
    method: 'get',
    // url: `http://127.0.0.1:8000/api/gallery`,
    url: `//${window.location.host}/api/gallery`,
    
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function ALL_BRANCHES() {
  var config = {
    method: 'get',
    // url: `http://127.0.0.1:8000/api/allbranches`,
    url: `//${window.location.host}/api/allbranches`,
    
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}


export async function Login_API(username, password) {
  let dataofuser = {
    username: username,
    password: password,
  };
  var config = {
    method: 'post',
    // url: `http://127.0.0.1:8000/api/login`,
    url: `//${window.location.host}/api/login`,
    data:dataofuser,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function Cover_Products() {
  var config = {
    method: 'get',
    // url: `http://127.0.0.1:8000/products/cover_products/`,
    url: `//${window.location.host}/products/cover_products`,
    
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}


export async function USER_API_SELECTION(user_id) {
  var config = {
    method: 'get',
    // url: `http://127.0.0.1:8000/api/user/${user_id}`,
    url: `//${window.location.host}/api/user/${user_id}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function Forget_Password_OTP(user_name,email) {
  const dataofuser={
    username:user_name,
    email:email
  }
  var config = {
    method: 'post',
    // url: `http://127.0.0.1:8000/api/forgetpasswordotp`,
    url: `//${window.location.host}/api/forgetpasswordotp`,
    data:dataofuser,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function Reset_Password(user_name,email,password) {
  const dataofuser={
    username:user_name,
    email:email,
    password
  }
  var config = {
    method: 'put',
    // url: `http://127.0.0.1:8000/api/resetpassword`,
    url: `//${window.location.host}/api/resetpassword`,
    data:dataofuser,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function GET_BRANCHES(branch_id) {
  var config = {
    method: 'get',
    // url: `http://127.0.0.1:8000/api/allbranches/${branch_id}`,
    url: `//${window.location.host}/api/allbranches/${branch_id}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function CREATE_BRANCHE(data) {
  var config = {
    method: 'post',
    // url: `http://127.0.0.1:8000/api/createbranch`,
    url: `//${window.location.host}/api/createbranch`,
    data:data,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function UPDATE_BRANCHE(data) {
  var config = {
    method: 'put',
    // url: `http://127.0.0.1:8000/api/createbranch`,
    url: `//${window.location.host}/api/createbranch`,
    data:data,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function GET_BRANCH(instructor_id) {
  var config = {
    method: 'get',
    // url: `http://127.0.0.1:8000/api/branch/${instructor_id}`,
    url: `//${window.location.host}/api/branch/${instructor_id}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function PLAYER_Stats(branch_id) {
  var config = {
    method: 'get',
    // url: `http://127.0.0.1:8000/api/playersstats/${branch_id}`,
    url: `//${window.location.host}/api/playersstats/${branch_id}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function ADMIN_PLAYER_Stats() {
  var config = {
    method: 'get',
    // url: `http://127.0.0.1:8000/api/adminplayersstats`,
    url: `//${window.location.host}/api/adminplayersstats`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function GENERIC_OTP(email) {
  const data={
    email:email
  }
  var config = {
    method: 'post',
    // url: `http://127.0.0.1:8000/api/otp`,
    url: `//${window.location.host}/api/otp`,
    data:data,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}


export async function SEND_PLAYER_DATA(data) {
  let url= `//${window.location.host}/api/player`;
  // let url= `http://127.0.0.1:8000/api/player`;
  const GetResponse = await axios.post(url, data, {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }).then(function (response) {
    return response;
  })
  .catch(function (error) {
    return error.response;
  });
  return GetResponse;
}

export async function SEND_EVENT_DATA(data) {
  let url= `//${window.location.host}/api/upcomming_events`;
  // let url= `http://127.0.0.1:8000/api/upcomming_events`;
  const GetResponse = await axios.post(url, data, {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }).then(function (response) {
    return response;
  })
  .catch(function (error) {
    return error.response;
  });
  return GetResponse;
}
export async function SEND_GALLERY_DATA(data) {
  let url= `//${window.location.host}/api/gallery`;
  // let url= `http://127.0.0.1:8000/api/gallery`;
  const GetResponse = await axios.post(url, data, {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }).then(function (response) {
    return response;
  })
  .catch(function (error) {
    return error.response;
  });
  return GetResponse;
}
export async function SEND_COACH_DATA(data) {
  let url= `//${window.location.host}/api/coach`;
  // let url= `http://127.0.0.1:8000/api/coach`;
  const GetResponse = await axios.post(url, data, {
    headers: {
      'content-type': 'multipart/form-data'
    }
  }).then(function (response) {
    return response;
  })
  .catch(function (error) {
    return error.response;
  });
  return GetResponse;
}


export async function ALL_COACHES() {
  var config = {
    method: 'get',
    // url: `http://127.0.0.1:8000/api/coach`,
    url: `//${window.location.host}/api/coach`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function ALL_PLAYERS_ADMIN(name) {
  var config = {
    method: 'get',
    // url: `http://127.0.0.1:8000/api/allaccounts/${name}`,
    url: `//${window.location.host}/api/allaccounts/${name}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function SPECIFIC_COACH(coach_id) {
  var config = {
    method: 'get',
    // url: `http://127.0.0.1:8000/api/coach/${coach_id}`,
    url: `//${window.location.host}/api/coach/${coach_id}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function SPECIFIC_COACH_Update(coach_id,data) {
  var config = {
    method: 'put',
    // url: `http://127.0.0.1:8000/api/coach/${coach_id}`,
    url: `//${window.location.host}/api/coach/${coach_id}`,
    data:data,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function SPECIFIC_COACH_DELETE(coach_id) {
  var config = {
    method: 'delete',
    // url: `http://127.0.0.1:8000/api/coach/${coach_id}`,
    url: `//${window.location.host}/api/coach/${coach_id}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function ALL_ACCOUNTS(name) {
  var config = {
    method: 'get',
    // url: `http://127.0.0.1:8000/api/allaccounts/${name}`,
    url: `//${window.location.host}/api/allaccounts/${name}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function UPCOMMING_EVENTS() {
  var config = {
    method: 'get',
    // url: `http://127.0.0.1:8000/api/upcomming_events`,
    url: `//${window.location.host}/api/upcomming_events`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function LOGOUT() {
  var config = {
    method: 'get',
    // url: `http://127.0.0.1:8000/api/logout`,
    url: `//${window.location.host}/api/logout`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function PLAYER_LIST(branch_id,player_list) {

  var config = {
    method: 'get',
    // url: `http://127.0.0.1:8000/api/playerattendance/${branch_id}`,
    url: `//${window.location.host}/api/playerattendance/${branch_id}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function SEND_PLAYER_ATTENDANCE_LIST(branch_id,player_list,date) {
  const data={
    listofplayers:player_list,
    date:date
  }
  var config = {
    method: 'post',
    // url: `http://127.0.0.1:8000/api/playerattendance/${branch_id}`,
    url: `//${window.location.host}/api/playerattendance/${branch_id}`,
    data:data,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function EDIT_PLAYER_ATTENDANCE_LIST(branch_id,player_list,date) {
  const data={
    listofplayers:player_list,
    date:date
  }
  var config = {
    method: 'put',
    // url: `http://127.0.0.1:8000/api/playerattendance/${branch_id}`,
    url: `//${window.location.host}/api/playerattendance/${branch_id}`,
    data:data,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function SEND_PLAYER_FIGHT_LIST(branch_id,player_list) {
  const data={
    listofplayers:player_list
  }
  var config = {
    method: 'post',
    // url: `http://127.0.0.1:8000/api/individualplayerstats/${branch_id}`,
    url: `//${window.location.host}/api/individualplayerstats/${branch_id}`,
    data:data,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function PLAYER_ACCOUNTS(branch_id) {

  var config = {
    method: 'get',
    // url: `http://127.0.0.1:8000/api/account/${branch_id}`,
    url: `//${window.location.host}/api/account/${branch_id}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function PLAYER_ACCOUNTS_DELETION(branch_id,player_id) {
  const data={
    player_id:player_id,
  }
  var config = {
    method: 'delete',
    // url: `http://127.0.0.1:8000/api/account/${branch_id}`,
    url: `//${window.location.host}/api/account/${branch_id}`,
    data:data,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function ACCOUNT_APPROVAL_LIST(branch_id) {

  var config = {
    method: 'get',
    // url: `http://127.0.0.1:8000/api/approval/${branch_id}`,
    url: `//${window.location.host}/api/approval/${branch_id}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function ACCOUNT_APPROVED(branch_id, data) {
  const new_data={
    player:data
  }
  var config = {
    method: 'post',
    // url: `http://127.0.0.1:8000/api/approval/${branch_id}`,
    url: `//${window.location.host}/api/approval/${branch_id}`,
    data:new_data,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function ADMIN_ATTENDANCE(branch, date,student) {
 
  var config = {
    method: 'get',
    // url: `http://127.0.0.1:8000/api/attendance/${branch}/${date}/${student}`,
    url: `//${window.location.host}/api/attendance/${branch}/${date}/${student}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function ADMIN_Fight(branch,student) {
 
  var config = {
    method: 'get',
    // url: `http://127.0.0.1:8000/api/fight/${branch}/${student}`,
    url: `//${window.location.host}/api/fight/${branch}/${student}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function ACCOUNT_APPROVED_ADMIN( data) {
  const new_data={
    player:data
  }
  var config = {
    method: 'post',
    // url: `http://127.0.0.1:8000/api/approvaladmin`,
    url: `//${window.location.host}/api/approvaladmin`,
    data:new_data,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function GET_INSTRUCTORS() {
  var config = {
    method: 'get',
    // url: `http://127.0.0.1:8000/api/instructor`,
    url: `//${window.location.host}/api/instructor`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function SEND_EMAIL_ATTENDANCE(data) {
  var config = {
    method: 'post',
    // url: `http://127.0.0.1:8000/api/sendattendance`,
    url: `//${window.location.host}/api/sendattendance`,
    data:data,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function SEND_EMAIL_FEES(data) {
  var config = {
    method: 'post',
    // url: `http://127.0.0.1:8000/api/sendfees`,
    url: `//${window.location.host}/api/sendfees`,
    data:data,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}



// start from here
export async function GET_COMPEPTITIONS() {
  var config = {
    method: 'get',
    // url: `http://127.0.0.1:8000/api/admincompetition`,
    url: `//${window.location.host}/api/admincompetition`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function DELETE_COMPEPTITIONS(id) {
  var config = {
    method: 'delete',
    // url: `http://127.0.0.1:8000/api/admincompetition/${id}`,
    url: `//${window.location.host}/api/admincompetition/${id}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function SEND_COMPEPTITIONS(data) {
  var config = {
    method: 'post',
    // url: `http://127.0.0.1:8000/api/admincompetition`,
    url: `//${window.location.host}/api/admincompetition`,
    data:data,
    headers: {

      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function VERIFY_COMPETITIONS_DETAILS(id,data) {
  var config = {
    method: 'post',
    // url: `http://127.0.0.1:8000/api/admincompetition/${id}`,
    url: `//${window.location.host}/api/admincompetition/${id}`,
  
    data:data,
    headers: {

      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function SEND_TEAM_REGISTRATION(competition_type,data) {
  var config = {
    method: 'post',
    // url: `http://127.0.0.1:8000/api/teamregistration/${competition_type}`,
    url: `//${window.location.host}/api/teamregistration/${competition_type}`,
  
    data:data,
    headers: {

      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function START_DRAWZING(id) {
  var config = {
    method: 'post',
    // url: `http://127.0.0.1:8000/api/teamdrawzing/${id}`,
    url: `//${window.location.host}/api/teamdrawzing/${id}`,
    headers: {

      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function GET_DRAWZ_DATA(id,category) {
  var config = {
    method: 'get',
    // url: `http://127.0.0.1:8000/api/drawzingdata/${id}/${category}`,
    url: `//${window.location.host}/api/drawzingdata/${id}/${category}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
export async function CONATCT_US_DATA(data) {
  var config = {
    method: 'post',
    // url: `http://127.0.0.1:8000/api/contactus/`,
    url: `//${window.location.host}/api/contactus/`,
    data:data,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function GET_BRANCH_FOR_STUDENT(branch_id) {
  var config = {
    method: 'get',
    // url: `http://127.0.0.1:8000/api/branches/${branch_id}`,
    url: `//${window.location.host}/api/branches/${branch_id}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}

export async function SINGLE_PLAYER_STATS(player_id) {
  var config = {
    method: 'get',
    // url: `http://127.0.0.1:8000/api/Singleplayersstats/${player_id}`,
    url: `//${window.location.host}/api/Singleplayersstats/${player_id}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  const GetResponse = await axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error.response;
    });
  return GetResponse;
}
