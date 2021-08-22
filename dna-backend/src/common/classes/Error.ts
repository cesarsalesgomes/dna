class CustomError extends Error {
  constructor(code: string, message: string) {
    super(message);
    this.code = code;
  }

  public code: string;
}

export default CustomError;
