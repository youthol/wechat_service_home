import Axios from "axios";

export const binding = props => {
  // 获取url中的参数
  const getQueryVariable = variable => {
    var query = window.location.search.substring(1); //substring() 方法用于提取字符串中介于两个指定下标之间的字符。
    var vars = query.split("&"); //split() 方法用于把一个字符串分割成字符串数组。
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] === variable) {
        return pair[1];
      }
    }
    return false;
  };

  const code = getQueryVariable("code");

  console.log(code);

  Axios({
    method: "GET", // 请求类型
    url: "/", // 请求地址
    params: {
      // 请求数据
      code: code
    },
    responseType: "json" // 响应数据的类型
  })
    .then(response => {
      console.log(response);
      console.log(props);
      console.log(props.location);
      props.history.push("/select");
    })
    .catch(error => {
      alert(error);
    });
};
