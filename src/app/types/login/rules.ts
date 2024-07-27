export const rules = {
  uname: {
    required: {
      value: true,
      message: "用户名不能为空",
    },
    minLength: {
      value: 3,
      message: "用户名长度不能小于3位",
    },
    maxLength: {
      value: 18,
      message: "用户名长度不能大于18位",
    },
  },
  pwd: {
    required: {
      value: true,
      message: "密码不能为空",
    },
    minLength: {
      value: 6,
      message: "密码长度不能小于6位",
    },
    maxLength: {
      value: 18,
      message: "密码长度不能大于18位",
    },
  },
  mail: {
    required: {
      value: true,
      message: "邮箱不能为空",
    },
  },
};
