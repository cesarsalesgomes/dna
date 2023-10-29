interface DirectusPayload {
  id: string,
  role: string,
  app_access: boolean,
  admin_access: boolean,
  iat: number,
  exp: number,
  iss: string
}

export default DirectusPayload;
