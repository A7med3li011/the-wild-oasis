
import supabase from './supabase';
export async function login({ email, password }) {

  

  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    throw new Error(error.message);
  }
  if (!error) {
    localStorage.setItem("token", JSON.stringify(data.session.access_token))
    localStorage.setItem("metaData", JSON.stringify(data.user.user_metadata))

    
  }
}

export async function signup({ email, password, name }) {

  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        avatar: ""
      }
    },
  })
  if (error) {
    throw new Error(error.message);
  }

  return data
  
}

