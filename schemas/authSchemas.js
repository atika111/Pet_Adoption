const signupSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    address: {
      anyOf: [{ type: "string" }, { type: "number" }],
    },

    email: {
      type: "string",
      pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
    },
    phone: {
      type: "string"
    },
    password: {
      type: "string",
      pattern:
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{4,}$",
    },
    repPassword: {
      type: "string",
      pattern:
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{4,}$",
    },
  },
  required: ["name", "email", "password", "repPassword", "address", "phone"],
  additionalProperties: false,
};
const loginSchema = {
  type: "object",
  properties: {
    email: { type: "string" },
    password: {
      type: "string",
      pattern:
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{4,}$",
    },
  },
  required: ["email", "password"],
  additionalProperties: true,
};

module.exports = { signupSchema, loginSchema };
