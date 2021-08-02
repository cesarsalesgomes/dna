interface AuthenticationResponse {
  data: {
    access_token: string;
    refresh_token: string;
    expires: number;
  };
}

export default AuthenticationResponse;
